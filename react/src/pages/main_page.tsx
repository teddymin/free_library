import { useSearchParams} from "react-router-dom";
import SiteHeader from "../components/site_header";
import BookCard from "../components/book_card";
import useBook from "../data/books";
import {CATEGORIES} from "../data/category";
import "./main_page.css";
import LoginComponent from "../components/google_login"
import {useAuth} from "../components/use_auth"
import useActivity from "../data/activity";

function MainPage() {
  const [params, setParams] = useSearchParams();
  const category = params.get("category") ?? "";
  const q = (params.get("q") ?? "").trim();
  const keyword = q.toLowerCase();
  const {loggedIn, setLoggedIn} = useAuth();
  const BOOKS = useBook(0);
  const activities = useActivity(loggedIn === true); // 로그인 상태에 따라 활동 내역을 가져옴
  const myBookIds = new Set(activities.map((a) => a.book_id)); // 활동 내역에서 책 ID만 추출하여 Set으로 만듦
  const filtered = BOOKS.filter((book) => { //my 분류하는 곳
    if(category === "MY") {
      return myBookIds.has(book.id);
    }
    const matchCategory = !category || book.categories.includes(category);
    const matchKeyword =
      !keyword ||
      book.title.toLowerCase().includes(keyword) ||
      book.author.toLowerCase().includes(keyword);
    return matchCategory && matchKeyword;
  });

  // 검색어는 유지하고 분류만 바꿈
  const selectCategory = (next: string) => {
    const nextParams = new URLSearchParams(params);
    if (next) {
      nextParams.set("category", next);
    } else {
      nextParams.delete("category");
    }
    setParams(nextParams);
  };

  return (
    <div className="main-page">
      <SiteHeader />

      {/* 분류 nav (스크롤 시 상단 고정) */}
      <nav className="category-nav" aria-label="분류">
        <div className="container category-nav-inner">
          {["", ...CATEGORIES].map((name) => (
            <button
              key={name || "all"}
              type="button"
              className={`category-btn${category === name ? " is-active" : ""}`}
              aria-pressed={category === name}
              onClick={() => selectCategory(name)}
            >
              {name || "전체"}
            </button>
          ))}
        </div>
      </nav>
      
      <main className="container">
        { loggedIn === false && category === "MY"
        ? <LoginComponent onLoggedIn ={() => setLoggedIn(true)} />
        :(
          <>
        <p className="result-summary">
          {q && <strong>‘{q}’ 검색 결과 · </strong>}
          총 {filtered.length}권
        </p>

        {filtered.length > 0 ? (
          <section className="book-grid" aria-label="책 목록">
            {filtered.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </section>
        ) : (
          <p className="empty">조건에 맞는 책이 없어요. 다른 검색어나 분류를 선택해 보세요.</p>
        )}
        </>) 
        }
      </main>
    </div>
  );
}

export default MainPage;
