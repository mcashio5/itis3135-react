// src/Header.jsx
function Header({ currentPage, onNavChange }) {
  const navButton = (id, label) => (
    <button
      type="button"
      className={`nav-pill ${currentPage === id ? 'nav-pill-active' : ''}`}
      onClick={() => onNavChange(id)}
    >
      {label}
    </button>
  );

  return (
    <header className="site-header">
      <h1>Michael Cashion – ITIS 3135</h1>
      <nav className="primary-nav">
        {navButton('home', 'Home')}
        <span className="nav-separator">|</span>
        {navButton('contract', 'Course Contract')}
        <span className="nav-separator">|</span>
        {navButton('introduction', 'Introduction')}
        <span className="nav-separator">|</span>
        {navButton('introductions', 'Introductions')}
      </nav>
    </header>
  );
}

export default Header;
