package university.jala.backend.infrastructure.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Data
@Document(collection = "reservations")
public class ReservationEntity {
    @Id
    private String id;
    private String userId;
    private List<ReservationItemEntity> items;
    private Long reservationDate;
    private Long dueDate;
    private String status;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ReservationItemEntity {
        private String bookId;
        private Integer quantity;
    }
}