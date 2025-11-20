import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Introduction() {
  return (
    <>
      <Header />

      <main>
        <h2>Introduction</h2>
        <p className="tagline">Who I am, what I do, and what I’m learning.</p>

        <p>
          Hi! I’m Michael Cashion, a Computer Science student at UNC Charlotte
          (’26). I enjoy web apps, cloud/Azure projects, and building clean,
          accessible interfaces. Outside class, I lift, play intramural sports,
          and tinker with hardware/software builds.
        </p>
      </main>

      <Footer />
    </>
  );
}
