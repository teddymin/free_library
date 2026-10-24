import { useState } from "react";
import "./my_page.css";

const ITEMS = Array.from({ length: 10 }, (_, i) => `박스 ${i + 1}`);

function MyPage() {
  const [id, setId] = useState("");

  return (
    <div className="mypage">
      {/* 상단: 아이디 입력칸 */}
      <header className="mypage-header">
        <label htmlFor="user-id">아이디</label>
        <input
          id="user-id"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디를 입력하세요"
        />
      </header>

      {/* 스크롤 되는 회색 영역 */}
      <main className="mypage-content">
        <section className="mypage-list">
          {ITEMS.map((item) => (
            <article key={item} className="mypage-item">
              {item}
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default MyPage;
