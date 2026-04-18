package university.jala.backend.domain.usecases;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import university.jala.backend.domain.models.Reservation;
import university.jala.backend.domain.ports.ReservationRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetUserReservationsUseCase {

    private final ReservationRepository reservationRepository;

    public List<Reservation> execute(String userId) {
        return reservationRepository.findByUserId(userId);
    }
}