import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <h1>Michael Cashion – ITIS 3135</h1>
      <nav className="main-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contract">Course Contract</Link></li>
          <li><Link to="/introduction">Introduction</Link></li>
        </ul>
      </nav>
    </header>
  );
}
