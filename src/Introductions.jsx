if (error) return <p>Error: {error}</p>;
if (!introductions) return <p>Loading...</p>;

return (
  <>
    <h2>Introductions</h2>

    {introductions.map((data, index) => (
      <article key={index} style={{ textAlign: "left" }}>

        {index > 0 && <hr />}

        <h3>
          {data.name.first}{" "}
          {data.name.middleInitial ? `${data.name.middleInitial}. ` : ""}
          {data.name.last} {data.divider} {data.mascot}
        </h3>

        <figure>
          <img src={`https://dvonb.xyz${data.media.src}`} style={{ width: "30%" }} alt={data.media.caption} />
          <figcaption>{data.media.caption}</figcaption>
        </figure>

        <p>{data.personalStatement}</p>

        <ul>
          <li><strong>Personal Background:</strong> {data.backgrounds.personal}</li>
          <li><strong>Professional Background:</strong> {data.backgrounds.professional}</li>
          <li><strong>Academic Background:</strong> {data.backgrounds.academic}</li>
          <li><strong>Primary Computer:</strong> I use an {data.platform.device}, {data.platform.os}, laptop.</li>

          <li><strong>Courses I'm Taking & Why:</strong>
            <ul>
              {data.courses.map((course, i) => (
                <li key={i}><strong>{course.code} {course.name}:</strong> {course.reason}</li>
              ))}
            </ul>
          </li>

          <li><strong>Funny/Interesting Item:</strong> {data.funFact}</li>

          {data.additional && (
            <li><strong>Something Additional to Share:</strong> {data.additional}</li>
          )}
        </ul>

        <p>"{data.quote.text}"</p>
        <p>- {data.quote.author}</p>

        <p>
          <a href={data.links.charlotte}>Charlotte</a> {data.divider}
          <a href={data.links.github}>GitHub</a> {data.divider}
          <a href={data.links.githubio}>GitHub.io</a> {data.divider}
          <a href={data.links.itis3135}>ITIS3135</a> {data.divider}
          <a href={data.links.freecodecamp}>freeCodeCamp</a> {data.divider}
          <a href={data.links.codecademy}>Codecademy</a> {data.divider}
          <a href={data.links.linkedin}>LinkedIn</a>
        </p>
      </article>
    ))}
  </>
);
