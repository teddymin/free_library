import { Link } from "react-router-dom";
import type { Book } from "../types/book";
import "./book_card.css";

interface BookCardProps {
  book: Book;
}

function BookCard({ book }: BookCardProps) {
  return (
    <Link to={`/book/${book.id}`} className="book-card">
      <div className="book-card-cover">
        <img src={book.cover} alt={`${book.title} 표지`} loading="lazy" />
      </div>
      <h3 className="book-card-title">{book.title}</h3>
      <p className="book-card-author">{book.author}</p>
    </Link>
  );
}

export default BookCard;
