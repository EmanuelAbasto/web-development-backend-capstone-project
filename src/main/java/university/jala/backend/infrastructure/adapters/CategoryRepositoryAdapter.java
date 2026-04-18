package university.jala.backend.infrastructure.adapters;

import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;
import university.jala.backend.domain.models.Category;
import university.jala.backend.domain.ports.CategoryRepository;
import university.jala.backend.infrastructure.entities.CategoryEntity;
import university.jala.backend.infrastructure.mappers.CategoryMapper;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class CategoryRepositoryAdapter implements CategoryRepository {

    private final MongoTemplate mongoTemplate;
    private final CategoryMapper mapper;

    @Override
    public List<Category> findAll() {
        List<CategoryEntity> entities = mongoTemplate.findAll(CategoryEntity.class);
        return entities.stream()
                .map(mapper::toDomain)
                .collect(Collectors.toList());
    }
}