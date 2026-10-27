import SiteHeader from "../components/site_header";
import "./login_page.css";
import LoginComponent from "../components/google_login";

function LoginPage() {


  return (
    <main>
        <SiteHeader />
    <div className="login-container">
      <LoginComponent></LoginComponent>
    </div>
    </main>
  );
}
export default LoginPage;