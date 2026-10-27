import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import "../pages/login_page.css";
import { useEffect } from "react";


function LoginComponent({onLoggedIn}: {onLoggedIn: () => void}) {
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch("http://localhost:4000/api/auth/me", { credentials: "include" })
      .then((r) => {
        if (r.ok) {return;};
        onLoggedIn();
      })
      .catch(() => {});
  }, [navigate]);

  return (
    <main>
    <div className="login-container">
    <GoogleLogin
        onSuccess={async (res) => {
            try {
            const r = await fetch("http://localhost:4000/api/auth/google", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ credential: res.credential }),
            });
            if (!r.ok) {
                console.error("서버 응답 실패:", r.status, await r.text());
                return;
            }
            navigate("/");
            } catch (e) {
            console.error("요청 자체가 실패 (CORS 가능성):", e);
            }
        }}
      onError={() => console.error("구글 로그인 실패")}
    />
    </div>
    </main>
  );
}
export default LoginComponent;