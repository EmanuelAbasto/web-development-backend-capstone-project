package university.jala.backend.domain.usecases;

import university.jala.backend.domain.models.Book;
import university.jala.backend.domain.ports.BookRepository;
import lombok.RequiredArgsConstructor;
import lombok.Value;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class GetPaginatedBooksUseCase {

    private final BookRepository bookRepository;

    public PaginatedResponse execute(int page, int size, String search, Double minRating, String category,
            String publishedAt) {
        List<Book> books = bookRepository.findByFilters(page, size, search, minRating, category, publishedAt);
        long totalItems = bookRepository.countByFilters(search, minRating, category, publishedAt);
        int totalPages = (int) Math.ceil((double) totalItems / size);

        return new PaginatedResponse(books, totalItems, page, totalPages);
    }

    @Value
    public static class PaginatedResponse {
        List<Book> books;
        long totalItems;
        int currentPage;
        int totalPages;
    }
}