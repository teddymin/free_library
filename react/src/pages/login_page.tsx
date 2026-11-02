import SiteHeader from "../components/site_header";
import "./login_page.css";
import LoginComponent from "../components/google_login";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../components/use_auth";

function LoginPage() {
  const navigate = useNavigate();
  const {setLoggedIn} = useAuth();
  return (
    <main>
        <SiteHeader />
      <LoginComponent onLoggedIn ={() => {setLoggedIn(true); navigate  ("/")} } />
    </main>
  );
}
export default LoginPage;