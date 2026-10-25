"use client";

import { useState } from "react";
import { PROJECTS } from "@/constants/projects";
import { ProjectCard } from "@/components/ProjectCard";

const FILTERS = ["All projects", "Web applications", "Tools"] as const;
export function Projects() {
  const [filter, setFilter] = useState<string>("All projects");
  const visible = PROJECTS.filter(
    (project) => filter === "All projects" || project.category === filter,
  );
  return (
    <section
      id="projects"
      className="section-shell work-section"
      aria-labelledby="work-heading"
    >
      <div className="section-kicker">
        <span>01 / SELECTED WORK</span>
        <span>IDEAS, MADE REAL.</span>
      </div>
      <div className="section-heading">
        <h2 id="work-heading">
          Less talk.
          <br />
          <span className="muted-heading">More building.</span>
        </h2>
        <p>
          A selection of web applications, interactive experiences, and focused
          tools. Real projects you can explore.
        </p>
      </div>
      <div className="work-toolbar">
        <div className="project-filters" aria-label="Filter projects">
          {FILTERS.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <span className="project-count" aria-live="polite">
          {String(visible.length).padStart(2, "0")} PROJECTS
        </span>
      </div>
      <div className="projects-grid">
        {visible.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            featured={
              filter === "All projects" &&
              (index === 0 || index === visible.length - 1)
            }
            index={index}
          />
        ))}
      </div>
      <div className="work-footnote">
        <span>
          Public demos checked October 25, 2026. Preview availability can
          change.
        </span>
        <a
          className="text-link"
          href="https://github.com/ChibaDev0?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          More on GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
