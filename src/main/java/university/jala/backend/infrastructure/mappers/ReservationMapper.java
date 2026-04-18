package university.jala.backend.infrastructure.mappers;

import org.springframework.stereotype.Component;
import university.jala.backend.domain.models.Reservation;
import university.jala.backend.infrastructure.entities.ReservationEntity;

import java.util.stream.Collectors;

@Component
public class ReservationMapper {

    public Reservation toDomain(ReservationEntity entity) {
        if (entity == null) return null;

        return Reservation.builder()
                .id(entity.getId())
                .userId(entity.getUserId())
                .reservationDate(entity.getReservationDate())
                .dueDate(entity.getDueDate())
                .status(entity.getStatus())
                .items(entity.getItems().stream()
                        .map(item -> new Reservation.ReservationItem(item.getBookId(), item.getQuantity()))
                        .collect(Collectors.toList()))
                .build();
    }

    public ReservationEntity toEntity(Reservation domain) {
        if (domain == null) return null;

        ReservationEntity entity = new ReservationEntity();
        entity.setId(domain.getId());
        entity.setUserId(domain.getUserId());
        entity.setReservationDate(domain.getReservationDate());
        entity.setDueDate(domain.getDueDate());
        entity.setStatus(domain.getStatus());
        
        if (domain.getItems() != null) {
            entity.setItems(domain.getItems().stream()
                    .map(item -> new ReservationEntity.ReservationItemEntity(item.getBookId(), item.getQuantity()))
                    .collect(Collectors.toList()));
        }

        return entity;
    }
}