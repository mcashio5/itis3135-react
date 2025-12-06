import { useEffect, useState } from "react";
import './App.css';

const STUDENTS_URL =
  "https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSingle, setShowSingle] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchStudents() {
      try {
        const res = await fetch(STUDENTS_URL);
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        const data = await res.json();
        setStudents(data);
      } catch (err) {
        console.error(err);
        setError("Could not load student data. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchStudents();
  }, []);

  if (loading) {
    return (
      <main>
        <h2>ITIS 3135 Student Introductions</h2>
        <p>Loading…</p>
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <h2>ITIS 3135 Student Introductions</h2>
        <p>{error}</p>
      </main>
    );
  }

  const query = searchTerm.toLowerCase();
  const filtered = students.filter((s) => {
    const fullName = `${s.name.first} ${s.name.last}`.toLowerCase();
    const mascot = (s.mascot || "").toLowerCase();
    const prefix = (s.prefix || "").toLowerCase();
    return (
      fullName.includes(query) ||
      mascot.includes(query) ||
      prefix.includes(query)
    );
  });

  const hasResults = filtered.length > 0;

  let toDisplay = filtered;
  if (showSingle && hasResults) {
    const safeIndex =
      ((currentIndex % filtered.length) + filtered.length) % filtered.length;
    toDisplay = [filtered[safeIndex]];
  }

  const handleNext = () => hasResults && setCurrentIndex((i) => i + 1);
  const handlePrev = () => hasResults && setCurrentIndex((i) => i - 1);
  const toggleMode = () => {
    setShowSingle((prev) => !prev);
    setCurrentIndex(0);
  };

  return (
    <main >
      <h2>ITIS 3135 Student Introductions</h2>

      <section >
        <label>
          Search by name, mascot, or prefix:
        </label>
        <input
          type="text"
          value={searchTerm}
          placeholder="e.g. Michael"
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentIndex(0);
          }}
          
        />
      </section>

      <section>
        <button onClick={toggleMode} >
          {showSingle ? "Show All" : "Show One at a Time"}
        </button>

        {showSingle && hasResults && (
          <>
            <button onClick={handlePrev} >
              ◀ Previous
            </button>
            <button onClick={handleNext}>Next ▶</button>
          </>
        )}

        {showSingle && !hasResults && (
          <p>No students match that search.</p>
        )}
      </section>

      {!hasResults && <p>No students found. Try changing your search.</p>}

      <section>
        {toDisplay.map((student) => (
          <article
            key={student.prefix}
            
          >
            <header>
              <h3>
                {student.name.first} {student.name.last}
              </h3>
              <p>
                Prefix: <strong>{student.prefix}</strong> &nbsp;|&nbsp; Mascot:{" "}
                <strong>{student.mascot}</strong>
              </p>
            </header>

            <p>
              <strong>Personal:</strong> {student.backgrounds?.personal}
            </p>
            <p>
              <strong>Academic:</strong> {student.backgrounds?.academic}
            </p>

            {student.funFact && (
              <p>
                <strong>Fun fact:</strong> {student.funFact}
              </p>
            )}

            {student.quote?.text && (
              <blockquote
                
              >
                “{student.quote.text}”
                {student.quote.author && <> — {student.quote.author}</>}
              </blockquote>
            )}

            {student.media?.hasImage && (
              <figure>
                <img
                  src={`https://dvonb.xyz${student.media.src}`}
                  alt={student.media.caption || `${student.name.first}'s photo`}
                  
                />
                {student.media.caption && (
                  <figcaption                  >
                    {student.media.caption}
                  </figcaption>
                )}
              </figure>
            )}

            <footer >
              <strong>Links:</strong>
              <ul >
                {student.links?.charlotte && (
                  <li>
                    <a
                      href={student.links.charlotte}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Charlotte page
                    </a>
                  </li>
                )}
                {student.links?.github && (
                  <li>
                    <a
                      href={student.links.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                )}
                {student.links?.githubio && (
                  <li>
                    <a
                      href={student.links.githubio}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub Pages
                    </a>
                  </li>
                )}
                {student.links?.linkedin && (
                  <li>
                    <a
                      href={student.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                )}
              </ul>
            </footer>
          </article>
        ))}
      </section>
    </main>
  );
}
