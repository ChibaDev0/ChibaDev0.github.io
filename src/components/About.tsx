import Image from "next/image";
import { siteConfig } from "@/constants/site";

const capabilities = [
  {
    number: "01",
    title: "Interfaces that feel right",
    description:
      "Responsive layouts, considered interactions, and a clear path from intention to action.",
    stack: "REACT · NEXT.JS · TYPESCRIPT",
  },
  {
    number: "02",
    title: "More than the frontend",
    description:
      "Connecting interfaces to APIs, authentication, and the data that makes a product useful.",
    stack: "NODE.JS · API INTEGRATION · DATABASES",
  },
  {
    number: "03",
    title: "A creative edge",
    description:
      "A background in content creation and an interest in 3D bring a different perspective to the work.",
    stack: "BLENDER · THREE.JS · CREATIVE TOOLS",
  },
];
export function About() {
  return (
    <section
      id="about"
      className="about-section section-shell"
      aria-labelledby="about-heading"
    >
      <div className="section-kicker">
        <span>02 / BEHIND THE CODE</span>
        <span>CURIOUS BY DEFAULT.</span>
      </div>
      <div className="about-layout">
        <div className="about-profile">
          <div className="portrait-wrap">
            <Image
              src="/images/profile.webp"
              alt={siteConfig.name}
              width={360}
              height={420}
              sizes="(max-width: 760px) 80vw, 360px"
            />
            <span className="portrait-label">TRAIWIT / THAILAND</span>
          </div>
          <div className="profile-caption">
            <span className="status-dot" /> Developer. Student. Always a
            builder.
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">HELLO, I’M TRAIWIT.</p>
          <h2 id="about-heading">
            A curious mind.
            <br />
            <span className="muted-heading">A hands-on approach.</span>
          </h2>
          <p>
            I’m {siteConfig.name}, a Computer Science student at Prince of
            Songkla University, Phuket. I build for the web, learn by doing, and
            care about the details that make a product feel complete.
          </p>
          <p>
            I work across frontend development and backend integrations, using
            AI-assisted workflows as part of my toolkit. My focus is simple:
            understand the problem, build something useful, and keep improving
            it.
          </p>
          <a className="text-link" href="#contact">
            Let’s build something together <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div id="skills" className="capability-grid">
        {capabilities.map((item) => (
          <div className="capability" key={item.number}>
            <span className="capability-number">{item.number} /</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className="capability-stack">{item.stack}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
