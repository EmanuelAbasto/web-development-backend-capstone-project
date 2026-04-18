package university.jala.backend.domain.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Reservation {
    private String id;
    private String userId;
    private List<ReservationItem> items;
    private Long reservationDate;
    private Long dueDate;
    private String status;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ReservationItem {
        private String bookId;
        private Integer quantity;
    }
}