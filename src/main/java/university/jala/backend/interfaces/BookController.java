package university.jala.backend.interfaces;

import lombok.RequiredArgsConstructor;
import university.jala.backend.domain.models.Book;
import university.jala.backend.domain.usecases.GetBookByIdUseCase;
import university.jala.backend.domain.usecases.GetPaginatedBooksUseCase;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/books")
@RequiredArgsConstructor
public class BookController {

    private final GetPaginatedBooksUseCase getPaginatedBooksUseCase;
    private final GetBookByIdUseCase getBookByIdUseCase;

    @GetMapping
    public ResponseEntity<GetPaginatedBooksUseCase.PaginatedResponse> getBooks(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String search,
            @RequestParam(required = false) Double minRating,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String publishedAt) {

        return ResponseEntity.ok(getPaginatedBooksUseCase.execute(
                page, size, search, minRating, category, publishedAt));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable String id) {
        return getBookByIdUseCase.execute(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}