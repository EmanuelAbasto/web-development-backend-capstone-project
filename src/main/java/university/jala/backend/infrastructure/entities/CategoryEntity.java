package university.jala.backend.infrastructure.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@Document(collection = "categories")
public class CategoryEntity {
    @Id
    private String id;
    private String name;
    private String slug;
    
    @Field("created_at")
    private String createdAt;
}