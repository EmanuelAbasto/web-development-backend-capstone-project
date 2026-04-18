package university.jala.backend.infrastructure.adapters;

import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;
import university.jala.backend.domain.models.Reservation;
import university.jala.backend.domain.ports.ReservationRepository;
import university.jala.backend.infrastructure.entities.ReservationEntity;
import university.jala.backend.infrastructure.mappers.ReservationMapper;
import university.jala.backend.infrastructure.repositories.MongoReservationRepository;

@Component
@RequiredArgsConstructor
public class ReservationRepositoryAdapter implements ReservationRepository {

    private final MongoReservationRepository mongoReservationRepository;
    private final ReservationMapper mapper;

    @Override
    public Reservation save(Reservation reservation) {
        ReservationEntity entity = mapper.toEntity(reservation);

        ReservationEntity savedEntity = mongoReservationRepository.save(entity);

        return mapper.toDomain(savedEntity);
    }

    @Override
    public List<Reservation> findByUserId(String userId) {
        return mongoReservationRepository.findByUserId(userId)
                .stream()
                .map(mapper::toDomain)
                .collect(Collectors.toList());
    }
}