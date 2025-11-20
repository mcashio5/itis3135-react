import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Contract() {
  return (
    <>
      <Header />

      <main>
        <h2>Course Contract</h2>
        <p className="tagline">
          Commitment to course policies and academic integrity.
        </p>

        <p>
          I, Michael Cashion, agree to abide by the rules, policies, and
          standards of ITIS 3135. I will submit my own work, cite sources, and
          follow all timelines and accessibility/usability guidelines for web
          content.
        </p>
      </main>

      <Footer />
    </>
  );
}
