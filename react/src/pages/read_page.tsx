import { Link, useParams } from "react-router-dom";
import SiteHeader from "../components/site_header";
import { findBook } from "../data/books";

// '바로보기' 버튼이 향하는 자리표시용 페이지입니다. 이후 md 본문 뷰어로 교체하세요.
function ReadPage() {
  const { id } = useParams();
  const book = findBook(Number(id));

  return (
    <div>
      <SiteHeader />
      <main
        className="container"
        style={{ padding: "120px 24px", textAlign: "center", color: "var(--ink-muted)" }}
      >
        <p style={{ marginBottom: 20 }}>
          {book ? `『${book.title}』 읽기 화면은 준비 중입니다.` : "찾을 수 없는 책입니다."}
        </p>
        <Link to={book ? `/book/${book.id}` : "/"} className="btn btn-ghost">
          돌아가기
        </Link>
      </main>
    </div>
  );
}

export default ReadPage;
