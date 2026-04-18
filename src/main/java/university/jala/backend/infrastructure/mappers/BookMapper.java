package university.jala.backend.infrastructure.mappers;

import org.springframework.stereotype.Component;
import university.jala.backend.domain.models.Book;
import university.jala.backend.infrastructure.entities.BookEntity;

@Component
public class BookMapper {

        public Book toDomain(BookEntity entity) {
                if (entity == null)
                        return null;

                return Book.builder()
                                .id(entity.getId())
                                .title(entity.getTitle())
                                .author(new Book.Author(entity.getAuthor().getName()))
                                .coverImage(entity.getCoverImage())
                                .categories(entity.getCategories())
                                .metrics(new Book.Metrics(
                                                entity.getMetrics().getRating(),
                                                entity.getMetrics().getReviewCount(),
                                                entity.getMetrics().getBorrowedCount()))
                                .status(new Book.Status(
                                                entity.getStatus().getIsAvailable(),
                                                entity.getStatus().getAvailableCount(),
                                                entity.getStatus().getNextAvailabilityDate()))
                                .flags(new Book.Flags(
                                                entity.getFlags().getIsNew(),
                                                entity.getFlags().getIsPopular(),
                                                entity.getFlags().getIsWishlisted()))
                                .summaryShort(entity.getSummaryShort())
                                .publishedAt(entity.getPublishedAt())
                                .summary(entity.getSummary())
                                .quantity(entity.getQuantity())
                                .build();
        }

        public BookEntity toEntity(Book domain) {
                if (domain == null)
                        return null;

                BookEntity entity = new BookEntity();

                entity.setId(domain.getId());
                entity.setTitle(domain.getTitle());
                entity.setCoverImage(domain.getCoverImage());
                entity.setCategories(domain.getCategories());
                entity.setSummaryShort(domain.getSummaryShort());
                entity.setPublishedAt(domain.getPublishedAt());
                entity.setSummary(domain.getSummary());
                entity.setQuantity(domain.getQuantity());

                if (domain.getAuthor() != null) {
                        BookEntity.AuthorEntity author = new BookEntity.AuthorEntity();
                        author.setName(domain.getAuthor().getName());
                        entity.setAuthor(author);
                }

                if (domain.getMetrics() != null) {
                        BookEntity.MetricsEntity metrics = new BookEntity.MetricsEntity();
                        metrics.setRating(domain.getMetrics().getRating());
                        metrics.setReviewCount(domain.getMetrics().getReviewCount());
                        metrics.setBorrowedCount(domain.getMetrics().getBorrowedCount());
                        entity.setMetrics(metrics);
                }

                if (domain.getStatus() != null) {
                        BookEntity.StatusEntity status = new BookEntity.StatusEntity();
                        status.setIsAvailable(domain.getStatus().getIsAvailable());
                        status.setAvailableCount(domain.getStatus().getAvailableCount());
                        status.setNextAvailabilityDate(domain.getStatus().getNextAvailabilityDate());
                        entity.setStatus(status);
                }

                if (domain.getFlags() != null) {
                        BookEntity.FlagsEntity flags = new BookEntity.FlagsEntity();
                        flags.setIsNew(domain.getFlags().getIsNew());
                        flags.setIsPopular(domain.getFlags().getIsPopular());
                        flags.setIsWishlisted(domain.getFlags().getIsWishlisted());
                        entity.setFlags(flags);
                }

                return entity;
        }
}