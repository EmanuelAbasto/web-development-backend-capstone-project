package university.jala.backend.domain.ports;

import university.jala.backend.domain.models.Category;
import java.util.List;

public interface CategoryRepository {
    List<Category> findAll();
}