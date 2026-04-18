package university.jala.backend.infrastructure.mappers;

import org.springframework.stereotype.Component;
import university.jala.backend.domain.models.Category;
import university.jala.backend.infrastructure.entities.CategoryEntity;

@Component
public class CategoryMapper {

    public Category toDomain(CategoryEntity entity) {
        if (entity == null) {
            return null;
        }
        return Category.builder()
                .id(entity.getId())
                .name(entity.getName())
                .slug(entity.getSlug())
                .createdAt(entity.getCreatedAt())
                .build();
    }
}