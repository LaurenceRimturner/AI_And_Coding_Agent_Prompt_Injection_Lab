import type { Book, Review } from "../../types";
import reviewData from "../../../data/reviews.json";
import BookCard from "../BookCard";

const reviews: Review[] = reviewData;

type BookListProps = {
  books: Book[];
  onToggleRead: (id: string) => void;
  onRemove: (id: string) => void;
};

export default function BookList({
  books,
  onToggleRead,
  onRemove,
}: BookListProps) {
  if (books.length === 0) {
    return <p>No books found.</p>;
  }

  return (
    <ul className="book-list">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          reviews={reviews.filter((review) => review.bookId === book.id)}
          onToggleRead={() => onToggleRead(book.id)}
          onRemove={() => onRemove(book.id)}
        />
      ))}
    </ul>
  );
}
