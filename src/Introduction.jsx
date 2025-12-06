// src/Introduction.jsx
import "./App.css";

export default function Introduction() {
  return (
    <section className="content-shell">
      <div className="inner-card intro-card">
        <h2>Introduction</h2>
        <p className="intro-subtitle">Michael Cashion | Mighty Chicken</p>
        <p className="intro-ack">
          I acknowledge that any information I post on here will be public. MC
          8/25/2025
        </p>

        <figure className="intro-figure">
          <img
            src="/michael-cashion-sm.jpg"
            alt="Picture of me at a fraternity meeting in 2024"
          />
          <figcaption>Picture of me at a fraternity meeting in 2024</figcaption>
        </figure>

        <p>
          I am a computer science student working towards a bachelor of science
          in systems and networks administration. I enjoy watching football and
          fishing in my free time. I would like to graduate and one day open my
          own business after building enough capital.
        </p>

        <ul className="intro-list">
          <li>
            <strong>Personal Background:</strong> I am originally from Raleigh
            and am a huge Washington sports fan. I do not enjoy school and am
            ready to graduate and start working.
          </li>
          <li>
            <strong>Professional Background:</strong> I completed my second
            internship this summer at Teleflex Medical where I got exposure to
            many different fields of IT and how a network functions from the
            ground up, as well as gaining a certification in Microsoft Azure.
          </li>
          <li>
            <strong>Academic Background:</strong> I am a computer science major
            in my fourth year at UNCC.
          </li>
          <li>
            <strong>Primary Computer:</strong> I primarily use my MacBook Pro
            for most tasks.
          </li>
          <li>
            <strong>Courses I am Taking and Why:</strong>
            <ul>
              <li>ITSC 2175 – Logic and Algorithms: Required for my major.</li>
              <li>ITIS 3135 – Front End Web Application Development: This course.</li>
              <li>
                ITSC 3155 – Software Engineering: Required for systems and
                networking.
              </li>
              <li>
                ITSC 3146 – Intro Operating Systems and Networking: Required for
                understanding systems and networks.
              </li>
              <li>
                ITCS 3166 – Intro to Computer Networks: Required course for my
                major.
              </li>
            </ul>
          </li>
        </ul>

        <p className="intro-quote">
          "Whether you think you can, or you think you cannot, you are right"
          <br />
          <span className="intro-quote-author">– Henry Ford</span>
        </p>

        <hr className="intro-divider" />

        <p className="intro-meta">
          I acknowledge that the information I present here is public. – M.C.
        </p>
        <p className="intro-meta">
          Date: <i>8/25/2025</i>
        </p>
      </div>
    </section>
  );
}
