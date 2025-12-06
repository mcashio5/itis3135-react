import { Link } from "react-router";
export default function Navbar() {
  return (
    <nav className="main-nav">
      <Link to="/" className="nav-pill">Home</Link>
      <span className="nav-separator">|</span>
      <Link to="/contract" className="nav-pill">Course Contract</Link>
      <span className="nav-separator">|</span>
      <Link to="/introduction" className="nav-pill">Introduction</Link>
      <span className="nav-separator">|</span>
      <Link to="/students" className="nav-pill">Students</Link>
    </nav>
  );
}
