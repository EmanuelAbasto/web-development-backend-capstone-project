package university.jala.backend.interfaces;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import university.jala.backend.domain.models.Reservation;
import university.jala.backend.domain.usecases.GetUserReservationsUseCase;
import university.jala.backend.domain.usecases.ReserveBookUseCase;
import university.jala.backend.interfaces.dto.ReservationItemRequest;
import university.jala.backend.interfaces.dto.ReservationRequest;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/reservations")
@RequiredArgsConstructor
@Slf4j
public class ReservationController {

    private final ReserveBookUseCase reserveBookUseCase;
    private final GetUserReservationsUseCase getUserReservationsUseCase;

    @PostMapping
    public ResponseEntity<Reservation> createReservation(
            @RequestBody ReservationRequest requestBody,
            HttpServletRequest request) {

        log.info("═══════════════════════════════════════════════════════");
        log.info("📍 POST /api/reservations - Iniciando creación de reserva");
        log.info("═══════════════════════════════════════════════════════");

        log.info("📦 ReservationRequest recibido:");
        log.info("   - toString(): {}", requestBody.toString());
        log.info("   - dueDate: {} (clase: {})",
                requestBody.getDueDate(),
                requestBody.getDueDate() != null ? requestBody.getDueDate().getClass().getName() : "null");
        log.info("   - items cantidad: {}", requestBody.getItems() != null ? requestBody.getItems().size() : "null");

        if (requestBody.getItems() != null && !requestBody.getItems().isEmpty()) {
            for (int i = 0; i < requestBody.getItems().size(); i++) {
                ReservationItemRequest item = requestBody.getItems().get(i);
                log.info("   [{}] ReservationItemRequest:", i);
                log.info("       - toString(): {}", item.toString());
                log.info("       - bookId: '{}' (type: {}, null: {})",
                        item.getBookId(),
                        item.getBookId() != null ? item.getBookId().getClass().getName() : "N/A",
                        item.getBookId() == null);
                log.info("       - quantity: {} (type: {})",
                        item.getQuantity(),
                        item.getQuantity() != null ? item.getQuantity().getClass().getName() : "N/A");
            }
        }

        String userId = (String) request.getAttribute("userId");
        log.info("👤 userId: {}", userId);

        if (userId == null) {
            log.warn("❌ No autorizado");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        try {
            List<Reservation.ReservationItem> domainItems = requestBody.getItems().stream()
                    .map(dto -> {
                        Reservation.ReservationItem domainItem = new Reservation.ReservationItem(dto.getBookId(),
                                dto.getQuantity());
                        log.info("✅ DTO -> Domain: bookId='{}', quantity={}",
                                domainItem.getBookId(),
                                domainItem.getQuantity());
                        return domainItem;
                    })
                    .collect(Collectors.toList());

            log.info("🔄 Ejecutando ReserveBookUseCase con {} items, dueDate={}",
                    domainItems.size(),
                    requestBody.getDueDate());
            Reservation reservation = reserveBookUseCase.execute(domainItems, userId, requestBody.getDueDate());
            log.info("✅ Reserva creada: {}", reservation.getId());
            return ResponseEntity.status(HttpStatus.CREATED).body(reservation);
        } catch (RuntimeException e) {
            log.error("❌ Error en createReservation: {}", e.getMessage());
            log.error("   Stack trace:", e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        } finally {
            log.info("═══════════════════════════════════════════════════════");
        }
    }

    @GetMapping("/my-reservations")
    public ResponseEntity<List<Reservation>> getMyReservations(HttpServletRequest request) {

        log.info("📍 GET /api/reservations/my-reservations");

        String userId = (String) request.getAttribute("userId");

        if (userId == null) {
            log.warn("❌ No autorizado");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        try {
            List<Reservation> reservations = getUserReservationsUseCase.execute(userId);
            log.info("✅ Se encontraron {} reservas", reservations.size());
            return ResponseEntity.ok(reservations);
        } catch (Exception e) {
            log.error("❌ Error: {}", e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}