import SiteHeader from "../components/site_header";
import "./login_page.css";
import LoginComponent from "../components/google_login";
import {useNavigate} from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <main>
        <SiteHeader />
    <div className="login-container">
      <LoginComponent onLoggedIn ={() => navigate("/")} />
    </div>
    </main>
  );
}
export default LoginPage;