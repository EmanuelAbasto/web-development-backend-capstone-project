package university.jala.backend.interfaces.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class ReservationRequest {
    @JsonProperty("items")
    private List<ReservationItemRequest> items;
    
    @JsonProperty("dueDate")
    private Long dueDate;
}