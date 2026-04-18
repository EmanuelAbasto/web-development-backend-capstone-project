package university.jala.backend.domain.ports;

import java.util.List;

import university.jala.backend.domain.models.Reservation;

public interface ReservationRepository {
    Reservation save(Reservation reservation);
    List<Reservation> findByUserId(String userId);
}