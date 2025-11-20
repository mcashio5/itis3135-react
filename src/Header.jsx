import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Michael Cashion – ITIS 3135</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contract">Course Contract</Link>
        <Link to="/introduction">Introduction</Link>
      </nav>
    </header>
  );
}
