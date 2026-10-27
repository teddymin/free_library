import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main_page";
import BookDetailPage from "./pages/book_detail_page";
import ReadPage from "./pages/read_page";
import MyPage from "./pages/my_page";
import ActivityPage from "./pages/activity_page";
import LoginPage from "./pages/login_page";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/book/:id" element={<BookDetailPage />} />
      <Route path="/read/:id" element={<ReadPage />} />
      <Route path="/my" element={<MyPage />} />
      <Route path="/activity" element={<ActivityPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
