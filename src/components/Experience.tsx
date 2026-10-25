import { WORK_EXPERIENCE, ACHIEVEMENTS } from "@/constants/experience";

export function Experience() {
  const experience = [
    WORK_EXPERIENCE[3],
    WORK_EXPERIENCE[1],
    WORK_EXPERIENCE[0],
  ];
  return (
    <section
      id="experience"
      className="section-shell experience-section"
      aria-labelledby="experience-heading"
    >
      <div className="section-kicker">
        <span>03 / THE JOURNEY</span>
        <span>EXPERIENCE SHAPES THE WORK.</span>
      </div>
      <div className="experience-layout">
        <div>
          <h2 id="experience-heading">
            Always learning.
            <br />
            <span className="muted-heading">Always moving.</span>
          </h2>
          <p className="section-description">
            From game-server systems to web products, each chapter adds
            something to the way I build.
          </p>
          <div className="education-note">
            <span className="eyebrow">CURRENTLY</span>
            <strong>B.Sc. Computer Science</strong>
            <span>Prince of Songkla University, Phuket</span>
            <span>Second-year student</span>
          </div>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={item.org}>
              <span className="experience-period">{item.period}</span>
              <h3>{item.role}</h3>
              <p className="experience-org">{item.org}</p>
              {item.description && <p>{item.description}</p>}
            </article>
          ))}
        </div>
      </div>
      <div className="awards">
        <p className="eyebrow">RECOGNITION / INVENTION & INNOVATION</p>
        <div className="awards-grid">
          {[...ACHIEVEMENTS].reverse().map((item) => (
            <article key={item.title}>
              <span className="award-symbol" aria-hidden="true">
                ✳
              </span>
              <h3>{item.title}</h3>
              <p>{item.event}</p>
              <strong>{item.award}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
