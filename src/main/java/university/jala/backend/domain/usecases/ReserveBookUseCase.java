package university.jala.backend.domain.usecases;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import university.jala.backend.domain.models.Book;
import university.jala.backend.domain.models.Reservation;
import university.jala.backend.domain.ports.BookRepository;
import university.jala.backend.domain.ports.ReservationRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ReserveBookUseCase {

    private final BookRepository bookRepository;
    private final ReservationRepository reservationRepository;

    public Reservation execute(List<Reservation.ReservationItem> requestedItems, String userId, Long dueDateTimestamp) {

        log.info("🎯 ReserveBookUseCase.execute - Iniciando");
        log.info("👤 userId: {}", userId);
        log.info("📅 dueDateTimestamp: {} ({})", dueDateTimestamp,
                dueDateTimestamp != null ? new java.util.Date(dueDateTimestamp) : "null");
        log.info("📦 Cantidad de items: {}", requestedItems != null ? requestedItems.size() : 0);

        if (requestedItems == null || requestedItems.isEmpty()) {
            log.error("❌ requestedItems es null o vacío");
            throw new RuntimeException("Items cannot be null or empty");
        }

        if (dueDateTimestamp == null) {
            log.error("❌ dueDateTimestamp es null");
            throw new RuntimeException("DueDate cannot be null");
        }

        for (Reservation.ReservationItem item : requestedItems) {
            log.info("🔍 Procesando item - bookId: {}, quantity: {}", item.getBookId(), item.getQuantity());

            // 1. Validar existencia
            Book book = bookRepository.findById(item.getBookId())
                    .orElseThrow(() -> {
                        log.error("❌ Libro no encontrado: {}", item.getBookId());
                        return new RuntimeException("Book not found: " + item.getBookId());
                    });

            log.info("✅ Libro encontrado: {} (available: {})", book.getTitle(), book.getStatus().getAvailableCount());

            // 2. Validar cantidad solicitada vs disponible
            if (book.getStatus().getAvailableCount() < item.getQuantity()) {
                log.error("❌ Stock insuficiente para {}: available={}, requested={}",
                        book.getTitle(), book.getStatus().getAvailableCount(), item.getQuantity());
                throw new RuntimeException("Insufficient stock for book: " + book.getTitle());
            }

            // 3. Actualizar stock del libro
            int newAvailableCount = book.getStatus().getAvailableCount() - item.getQuantity();
            book.getStatus().setAvailableCount(newAvailableCount);

            if (newAvailableCount == 0) {
                book.getStatus().setIsAvailable(false);
            }

            log.info("✅ Stock actualizado para {}: {} -> {}", book.getTitle(),
                    book.getStatus().getAvailableCount() + item.getQuantity(), newAvailableCount);

            // Actualizar métricas
            book.getMetrics().setBorrowedCount(book.getMetrics().getBorrowedCount() + item.getQuantity());

            // 4. Persistir cambios del libro
            bookRepository.save(book);
            log.info("✅ Libro guardado en BD");
        }

        // 5. Crear el registro de la reserva con todos los ítems
        Reservation reservation = Reservation.builder()
                .userId(userId)
                .items(requestedItems)
                .reservationDate(System.currentTimeMillis())
                .dueDate(dueDateTimestamp)
                .status("ACTIVE")
                .build();

        log.info("🔄 Guardando reserva en BD...");
        Reservation savedReservation = reservationRepository.save(reservation);
        log.info("✅ Reserva guardada exitosamente con ID: {}", savedReservation.getId());

        return savedReservation;
    }
}
