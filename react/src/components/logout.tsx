import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import "./logout.css"
import { useAuth } from "./use_auth";
function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:4000/api/auth/logout", {
        method: "POST",
        credentials: "include", // 쿠키를 같이 보내야 서버가 지울 수 있음
      });
    } catch (e) {
      console.error("로그아웃 요청 실패:", e);
    }
    const { setLoggedIn } = useAuth();
    setLoggedIn(false); // 로그아웃 상태로 변경
    googleLogout();        // 구글 자동 로그인 상태 해제 
    navigate("/");
  };

  return <button type="button" className = "logout_button" onClick={handleLogout}>로그아웃</button>;
}

export default LogoutButton;