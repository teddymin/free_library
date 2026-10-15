import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main_page";
import MyPage from "./pages/my_page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/my" element={<MyPage />} />
    </Routes>
  );
}

export default App; 