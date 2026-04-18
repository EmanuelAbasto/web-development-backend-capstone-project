package university.jala.backend.interfaces;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import university.jala.backend.domain.models.Category;
import university.jala.backend.domain.usecases.GetAllCategoriesUseCase;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CategoryController {

    private final GetAllCategoriesUseCase getAllCategoriesUseCase;

    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories() {
        List<Category> categories = getAllCategoriesUseCase.execute();
        return ResponseEntity.ok(categories);
    }
}