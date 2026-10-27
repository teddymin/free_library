import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "./site_header.css";

interface SearchBoxProps {
  initial: string;
}
function Logedin(){
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:4000/api/auth/me", { credentials: "include" })
      .then((r) => {
        if (r.ok) return true;
      })
      .catch(() => {});
  }, [navigate]);
  return false;
}

function SearchBox({ initial }: SearchBoxProps) {
  const navigate = useNavigate();
  const [value, setValue] = useState(initial);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const q = value.trim();
    navigate(q ? `/?q=${encodeURIComponent(q)}` : "/");
  };

  return (
    <form className="search" role="search" onSubmit={handleSubmit}>
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="제목이나 작가를 검색해 보세요"
        aria-label="검색"
      />
      <button type="submit" className="search-btn" aria-label="검색하기">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </form>
  );
}

function SiteHeader() {
  const [params] = useSearchParams();
  const q = params.get("q") ?? "";

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link to="/" className="logo" aria-label="Free Library 홈">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 6.5C10.2 5.2 7.6 4.6 4 4.8v13c3.6-.2 6.2.4 8 1.7 1.8-1.3 4.4-1.9 8-1.7v-13c-3.6-.2-6.2.4-8 1.7z"
              fill="currentColor"
            />
            <path d="M12 6.5v13" stroke="#fff" strokeWidth="1.4" />
          </svg>
          <span>free_library</span> {/*project 이상*/}
        </Link>

        {/* q가 바뀌면 입력창도 새로 초기화되도록 key 사용 */}
        <SearchBox key={q} initial={q} />

        {Logedin() ? null:(
          <Link to="/login" className="header-link">
            로그인
          </Link>
        )}
      </div>
    </header>
  );
}

export default SiteHeader;
