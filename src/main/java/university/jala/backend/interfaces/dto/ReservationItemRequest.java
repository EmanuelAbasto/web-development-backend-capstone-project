package university.jala.backend.interfaces.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ReservationItemRequest {
    @JsonProperty("bookId")
    private String bookId;
    
    @JsonProperty("quantity")
    private Integer quantity;
}
