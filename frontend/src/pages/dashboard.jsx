import { Link } from "react-router-dom";
import "../styles.css";

function Dashboard() {
  return (
    <div className="container">
      <div className="card">
        <h1>Expense Dashboard</h1>
        <p>Track and manage your expenses efficiently.</p>
        <button>Add Expense</button>
        <br />
        <Link to="/login">Go to Login</Link> {/* ✅ Add Navigation */}
      </div>
    </div>
  );
}

export default Dashboard;
