import { Link, redirect, useParams } from "react-router-dom";
import SiteHeader from "../components/site_header";
import useBook from "../data/books";
import "./book_detail_page.css";

function BookDetailPage() {
  const { id } = useParams();
  if (id === '0' || !id) {
    redirect("/");
  }
  const book = useBook(Number(id))[0]; // useBook은 배열을 반환하므로 첫 번째 요소를 가져옴
  if (!book) {
    return (
      <div>
        <SiteHeader />
        <main className="container not-found">
          <p>찾을 수 없는 책입니다.</p>
          <Link to="/" className="btn btn-primary">
            목록으로 돌아가기
          </Link>
        </main>
      </div>
    );
  }
  const book_category = book.categories.split(",");

  return (
    <div>
      <SiteHeader />

      <main className="container">
        <Link to="/" className="back-link">
          ← 목록으로
        </Link>

        <article className="detail">
          <div className="detail-cover">
            <img src={book.cover} alt={`${book.title} 표지`} />
          </div>

          <div className="detail-info">
            <p className="detail-author">
              {book.author}
              {book.year && ` · ${book.year}`}
            </p>
            <h1 className="detail-title">{book.title}</h1>

            <ul className="chips" aria-label="분류">
              {book_category.map((name) => (
                <li key={name}>
                  <Link to={`/?category=${encodeURIComponent(name)}`} className="chip">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>

            <section className="detail-desc" aria-label="자세한 설명">
              {book.description}
            </section>

            <div className="detail-actions">
              <Link to={`/read/${book.id}`} className="btn btn-primary">
                바로보기
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

export default BookDetailPage;
