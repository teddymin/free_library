import "../App.css";
import { useNavigate } from "react-router-dom";

const MENUS = ["홈", "신상품", "베스트", "세일", "고객센터"];
const PRODUCTS = Array.from({ length: 10 }, (_, i) => `제품 ${i + 1}`);

function MainPage() {
  const navigate = useNavigate();
  return (
    <div className="page">
      {/* 왼쪽 메인 영역 */}
      <div className="main-wrap">
        {/* 헤더: 로고 + 검색창 */}
        <header className="header">
          <div className="logo">LOGO</div>
          <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
            <input type="search" placeholder="검색어를 입력하세요" aria-label="검색" />
          </form>
        </header>

        {/* 스크롤 되는 회색 영역 */}
        <main className="content">
          {/* 내비게이션 바 (스크롤 시 상단 고정, CSS sticky) */}
          <nav className="navbar">
            {MENUS.map((menu) => (
              <a key={menu} href="#">
                {menu}
              </a>
            ))}
          </nav>

          {/* 제품 목록 */}
          <section className="products">
            {PRODUCTS.map((name) => (
              <article key={name} className="product">
                {name}
              </article>
            ))}
          </section>
        </main>
      </div>

      {/* 오른쪽 사이드바 */}
      <aside className="sidebar">
        <button className="side-btn" type="button" onClick={() => navigate("/my")}>
          버튼
        </button>
      </aside>
    </div>
  );
}

export default MainPage;
