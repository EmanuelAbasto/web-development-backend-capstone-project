package university.jala.backend.infrastructure.adapters;

import university.jala.backend.domain.models.Book;
import university.jala.backend.domain.ports.BookRepository;
import university.jala.backend.infrastructure.entities.BookEntity;
import university.jala.backend.infrastructure.mappers.BookMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class BookRepositoryAdapter implements BookRepository {

    private final MongoTemplate mongoTemplate;
    private final BookMapper mapper;

    @Override
    public List<Book> findByFilters(int page, int size, String author, Double minRating, String category,
            String publishedAt) {
        Query query = buildQuery(author, minRating, category, publishedAt);
        query.with(PageRequest.of(page, size));

        return mongoTemplate.find(query, BookEntity.class)
                .stream()
                .map(mapper::toDomain)
                .collect(Collectors.toList());
    }

    @Override
    public long countByFilters(String author, Double minRating, String category, String publishedAt) {
        Query query = buildQuery(author, minRating, category, publishedAt);
        return mongoTemplate.count(query, BookEntity.class);
    }

    private Query buildQuery(String search, Double minRating, String category, String publishedAt) {
        Query query = new Query();

        if (search != null && !search.isEmpty()) {
            query.addCriteria(new Criteria().orOperator(
                    Criteria.where("title").regex(search, "i"),
                    Criteria.where("author.name").regex(search, "i")));
        }

        if (minRating != null) {
            query.addCriteria(Criteria.where("metrics.rating").gte(minRating));
        }
        if (category != null && !category.isEmpty()) {
            query.addCriteria(Criteria.where("categories").is(category));
        }
        if (publishedAt != null && !publishedAt.isEmpty()) {
            query.addCriteria(Criteria.where("published_at").regex(publishedAt));
        }

        return query;
    }

    @Override
    public Optional<Book> findById(String id) {
        BookEntity entity = mongoTemplate.findById(id, BookEntity.class);
        return Optional.ofNullable(entity).map(mapper::toDomain);
    }

    @Override
    public Book save(Book book) {
        BookEntity entity = mapper.toEntity(book);

        BookEntity savedEntity = mongoTemplate.save(entity);

        return mapper.toDomain(savedEntity);
    }
}