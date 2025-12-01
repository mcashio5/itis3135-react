import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import Introduction from "./Introduction.jsx";
import Contract from "./Contract.jsx";
import Introductions from "./Introductions.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Header />
        <main className="main-card">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/contract" element={<Contract />} />
            <Route path="/introductions" element={<Introductions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
