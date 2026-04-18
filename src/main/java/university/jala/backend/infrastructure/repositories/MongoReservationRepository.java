package university.jala.backend.infrastructure.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import university.jala.backend.infrastructure.entities.ReservationEntity;

@Repository
public interface MongoReservationRepository extends MongoRepository<ReservationEntity, String> {
    List<ReservationEntity> findByUserId(String userId);
}