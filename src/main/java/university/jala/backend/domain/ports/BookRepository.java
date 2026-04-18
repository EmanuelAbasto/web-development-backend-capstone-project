package university.jala.backend.domain.ports;

import university.jala.backend.domain.models.Book;
import java.util.List;
import java.util.Optional;

public interface BookRepository {
    List<Book> findByFilters(int page, int size, String author, Double minRating, String category, String publishedAt);
    long countByFilters(String author, Double minRating, String category, String publishedAt);
    Optional<Book> findById(String id);
    Book save(Book book);
}