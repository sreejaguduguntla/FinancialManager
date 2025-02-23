import { Link } from "react-router-dom";
import "../styles.css";

function Login() {
  return (
    <div className="container">
      <div className="card">
        <h1>Login Page</h1>
        <p>Enter your credentials to access the dashboard.</p>
        <button>Login</button>
        <br />
        <Link to="/">Go to Dashboard</Link> {/* ✅ Add Navigation */}
      </div>
    </div>
  );
}

export default Login;
