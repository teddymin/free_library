import { useParams } from "react-router-dom";
import SiteHeader from "../components/site_header";
import useBook from "../data/books";
import "./read_page.css";

// '바로보기' 버튼이 향하는 자리표시용 페이지입니다. 이후 md 본문 뷰어로 교체하세요.
function ReadPage() {
  const { id } = useParams();
  const BOOKS = useBook(0);
  const book = BOOKS.find((b) => b.id === Number(id));

  return (
    <main>
      <SiteHeader />
      <div className="context">
        <div className="read-page">
          <div className="book-title-container">
            <h1 className="book-title">{book?.title}</h1>
            <h2 className="book-author">{book?.author}</h2>
          </div>
          <div className="book-content">
            <p>{book?.content}</p>
          </div>
        </div>
        <div className="note-page">
          <h1>Note</h1>
          <textarea placeholder="이곳에 메모를 입력하세요..." ></textarea>
        </div>
      </div>
    </main>
  );
}

export default ReadPage;
