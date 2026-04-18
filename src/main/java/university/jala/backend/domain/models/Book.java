package university.jala.backend.domain.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Book {
    private String id;
    private String title;
    private Author author;
    
    @JsonProperty("cover_image")
    private String coverImage;
    
    private List<String> categories;
    private Metrics metrics;
    private Status status;
    private Flags flags;
    
    @JsonProperty("summary_short")
    private String summaryShort;
    
    @JsonProperty("published_at")
    private String publishedAt;
    
    private String summary;
    private Integer quantity;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Author {
        private String name;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Metrics {
        private Double rating;
        
        @JsonProperty("review_count")
        private Integer reviewCount;
        
        @JsonProperty("borrowed_count")
        private Integer borrowedCount;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Status {
        @JsonProperty("is_available")
        private Boolean isAvailable;
        
        @JsonProperty("available_count")
        private Integer availableCount;
        
        @JsonProperty("next_availability_date")
        private String nextAvailabilityDate;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Flags {
        @JsonProperty("is_new")
        private Boolean isNew;
        
        @JsonProperty("is_popular")
        private Boolean isPopular;
        
        @JsonProperty("is_wishlisted")
        private Boolean isWishlisted;
    }
}