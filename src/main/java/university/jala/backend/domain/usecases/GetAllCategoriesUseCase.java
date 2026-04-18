package university.jala.backend.domain.usecases;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import university.jala.backend.domain.models.Category;
import university.jala.backend.domain.ports.CategoryRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GetAllCategoriesUseCase {

    private final CategoryRepository categoryRepository;

    public List<Category> execute() {
        return categoryRepository.findAll();
    }
}