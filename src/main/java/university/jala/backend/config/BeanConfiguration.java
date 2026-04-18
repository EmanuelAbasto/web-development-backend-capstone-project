package university.jala.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;
import university.jala.backend.domain.ports.BookRepository;
import university.jala.backend.domain.usecases.GetPaginatedBooksUseCase;
import university.jala.backend.infrastructure.adapters.BookRepositoryAdapter;
import university.jala.backend.infrastructure.mappers.BookMapper;

@Configuration
public class BeanConfiguration {

    @Bean
    public GetPaginatedBooksUseCase getPaginatedBooksUseCase(BookRepository bookRepository) {
        return new GetPaginatedBooksUseCase(bookRepository);
    }

    @Bean
    public BookRepository bookRepository(MongoTemplate mongoTemplate, BookMapper bookMapper) {
        return new BookRepositoryAdapter(mongoTemplate, bookMapper);
    }
}