import { useParams } from "react-router-dom";
import SiteHeader from "../components/site_header";
import useBook from "../data/books";
import {useNote, updateNote} from "../data/note";
import "./read_page.css";
import LoginComponent from "../components/google_login";
import { useAuth } from "../components/use_auth";


function ReadPage() {
  const { id } = useParams();
  const BOOKS = useBook(0);
  const book = BOOKS.find((b) => b.id === Number(id));
  const note = useNote(Number(id));
  const {loggedIn, setLoggedIn} = useAuth();
  if(loggedIn === null) {
    return <div>로그인 상태 확인 중...</div>;
  }
  if(loggedIn === false) {
    return <LoginComponent onLoggedIn ={() => setLoggedIn(true)} />;
  }
  return (  

    <div className= "read-page-container">
      <SiteHeader />
      <main className="context">
        <div className="read-page">
          <div className="book-title-container">
            <h1 className="book-title">{book?.title}</h1>
            <h2 className="book-author">&lt;{book?.author}&gt;</h2>
          </div>
          <div className="book-content">
            <pre className= "book-content-text">{book?.content}</pre>
          </div>
        </div>
        <div className="note-page">
          <h1>Note</h1>
          <br></br>
          <textarea className = "note-input" placeholder="이곳에 메모를 입력하세요..." >{ note[0].note  === null || note[0].note.length === 0 ? "" : note[0].note }</textarea>
          <button className="save-button" onClick={() =>updateNote(Number(id), (document.querySelector(".note-input") as HTMLTextAreaElement).value)}>
            저장
          </button>
        </div>
      </main>
    </div>
  );
}

export default ReadPage;
