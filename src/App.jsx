import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
// src/App.jsx
import { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import Introduction from './Introduction.jsx';
import Contract from './Contract.jsx';
import Introductions from './Introductions.jsx';
import './index.css';

export default function App() {
  return (
    <>
      <Header />
const PAGES = {
  HOME: 'home',
  INTRO: 'introduction',
  CONTRACT: 'contract',
};

      <main>
        <h2>Welcome</h2>
        <p>This is my ITIS 3135 course homepage.</p>
      </main>
function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.HOME);

  let content;
  switch (currentPage) {
    case PAGES.INTRO:
      content = <Introduction />;
      break;
    case PAGES.CONTRACT:
      content = <Contract />;
      break;
    case PAGES.HOME:
    default:
      content = <Home />;
  }

  return (
    <div className="site-wrapper">
      <Header currentPage={currentPage} onNavChange={setCurrentPage} />
      <main className="main-card">
        {content}
      </main>
      <Footer />
    </>
    </div>
  );
}

export default App;
