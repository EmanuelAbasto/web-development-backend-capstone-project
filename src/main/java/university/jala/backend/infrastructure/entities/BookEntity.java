package university.jala.backend.infrastructure.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import java.util.List;

@Data
@Document(collection = "books")
public class BookEntity {
    @Id
    private String id;
    private String title;
    private AuthorEntity author;
    
    @Field("cover_image")
    private String coverImage;
    
    private List<String> categories;
    private MetricsEntity metrics;
    private StatusEntity status;
    private FlagsEntity flags;
    
    @Field("summary_short")
    private String summaryShort;
    
    @Field("published_at")
    private String publishedAt;
    
    private String summary;
    private Integer quantity;

    @Data 
    public static class AuthorEntity { 
        private String name; 
    }
    
    @Data 
    public static class MetricsEntity { 
        private Double rating; 
        @Field("review_count") private Integer reviewCount;
        @Field("borrowed_count") private Integer borrowedCount;
    }
    
    @Data 
    public static class StatusEntity { 
        @Field("is_available") private Boolean isAvailable;
        @Field("available_count") private Integer availableCount;
        @Field("next_availability_date") private String nextAvailabilityDate;
    }
    
    @Data 
    public static class FlagsEntity { 
        @Field("is_new") private Boolean isNew;
        @Field("is_popular") private Boolean isPopular;
        @Field("is_wishlisted") private Boolean isWishlisted;
    }
}