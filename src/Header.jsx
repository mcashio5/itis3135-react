import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <h1>Michael Cashions' Mighty Chicken || ITIS3135</h1>
      <nav className="primary-nav">
        <Link className="nav-pill" to="/">Home</Link>
        <span className="nav-separator">||</span>
        <Link className="nav-pill" to="/introduction">Introduction</Link>
        <span className="nav-separator">||</span>
        <Link className="nav-pill" to="/contract">Contract</Link>
        <span className="nav-separator">||</span>
        <Link className="nav-pill" to="/introductions">Introductions</Link>
      </nav>
    </>
  );
}
