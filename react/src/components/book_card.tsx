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
        <img src={`/covers/cover-${(book.id).toString().padStart(2,'0')}.jpg`} alt={`${book.title} 표지`} loading="lazy" />
        {/* <iframe src={[
          "https://dcinside.com",
          "https://ilbe.com",
          "https://warning.or.kr",
          "https://밥.net"
        ][book.id%4]} style={{width: "100%", height: "100%", zoom: 0.7}}></iframe> */}
      </div>
      <h3 className="book-card-title">{book.title}</h3>
      <p className="book-card-author">{book.author}</p>
    </Link>
  );
}

export default BookCard;
