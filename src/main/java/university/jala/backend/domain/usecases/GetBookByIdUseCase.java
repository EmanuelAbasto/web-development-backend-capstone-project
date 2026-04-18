package university.jala.backend.domain.usecases;

import lombok.RequiredArgsConstructor;
import university.jala.backend.domain.models.Book;
import university.jala.backend.domain.ports.BookRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class GetBookByIdUseCase {

    private final BookRepository bookRepository;

    public Optional<Book> execute(String id) {
        return bookRepository.findById(id);
    }
}