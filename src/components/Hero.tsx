import { siteConfig } from "@/constants/site";
import { PROJECTS } from "@/constants/projects";

export function Hero() {
  return (
    <section className="hero-stage" aria-labelledby="hero-heading">
      <div className="hero section-shell">
        <div className="hero-copy">
          <div className="availability">
            <span /> Open to freelance & developer opportunities
          </div>
          <p className="eyebrow hero-intro">
            TRAIWIT KUNRAPEEPAT <span>/</span> DEVELOPER
          </p>
          <h1 id="hero-heading">
            Ideas to <span className="serif-word">interfaces.</span>
            <span className="muted-heading">Built to work.</span>
          </h1>
          <p className="hero-description">
            I’m {siteConfig.shortName}, a developer turning complex ideas into
            considered web experiences. From the first interaction to the
            systems behind it.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore selected work <span aria-hidden="true">↗</span>
            </a>
            <a
              className="text-link"
              href="https://github.com/ChibaDev0"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-topline">
            <span>THE SPACE BETWEEN IDEA & EXECUTION</span>
            <span>01 / ∞</span>
          </div>
          <div className="orbital">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="orbital-core">&lt;/&gt;</div>
            <span className="orbit-node node-one" />
            <span className="orbit-node node-two" />
            <span className="orbit-label label-one">design</span>
            <span className="orbit-label label-two">develop</span>
            <span className="orbit-label label-three">deliver</span>
          </div>
          <div className="build-note">
            <div className="note-title">
              <span className="note-dot" /> A BUILDER’S MINDSET <span>↗</span>
            </div>
            <p>
              <span className="code-dim">const</span> experience{" "}
              <span className="code-dim">=</span> &#123;
              <br />
              <span className="code-indent">
                intent:{" "}
                <span className="code-string">&quot;make it useful&quot;</span>,
              </span>
              <br />
              <span className="code-indent">
                details:{" "}
                <span className="code-string">&quot;make them count&quot;</span>
              </span>
              <br />
              &#125;;
            </p>
          </div>
          <div className="art-coordinate">
            CRAFT × CODE <span>ALWAYS ITERATING.</span>
          </div>
        </div>
        <div className="hero-bottom">
          <div>
            <span className="status-dot" /> Based in Thailand{" "}
            <span className="separator">/</span> Building for the web
          </div>
          <a href="#projects">
            SCROLL TO DISCOVER <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="practice-strip">
          <span>
            DESIGNED WITH INTENT.
            <br />
            <strong>ENGINEERED WITH CARE.</strong>
          </span>
          <span>React / Next.js</span>
          <span>TypeScript</span>
          <span>Node.js / APIs</span>
          <span>
            {String(PROJECTS.length).padStart(2, "0")} selected projects ↗
          </span>
        </div>
      </div>
    </section>
  );
}
