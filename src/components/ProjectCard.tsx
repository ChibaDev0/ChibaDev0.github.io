import Image from "next/image";
import type { PROJECTS } from "@/constants/projects";

type Project = (typeof PROJECTS)[number];
export function ProjectCard({
  project,
  featured = false,
  index,
}: {
  project: Project;
  featured?: boolean;
  index: number;
}) {
  return (
    <article
      className={`project-card ${featured ? "featured-project" : ""}`}
      data-category={project.category}
    >
      <a
        className="project-visual"
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="preview-chrome" aria-hidden="true">
          <span className="chrome-dots">● ● ●</span>
          <span>{new URL(project.href).hostname}</span>
          <span>↗</span>
        </div>
        <div className="preview-image">
          <Image
            src={project.image}
            alt={`${project.name} public website preview`}
            width={1280}
            height={800}
            sizes={
              featured
                ? "(max-width: 760px) 100vw, 60vw"
                : "(max-width: 760px) 100vw, 50vw"
            }
          />
          <span className="preview-open">
            Explore project <span aria-hidden="true">↗</span>
          </span>
        </div>
      </a>
      <div className="project-body">
        <div className="project-meta">
          <span>
            {String(index + 1).padStart(2, "0")} / {project.category}
          </span>
          <span className="demo-status">
            <span /> {project.status}
          </span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="tech-tags">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          <a href={project.href} target="_blank" rel="noopener noreferrer">
            Visit website <span aria-hidden="true">↗</span>
          </a>
          {project.source ? (
            <a href={project.source} target="_blank" rel="noopener noreferrer">
              Source code <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className="private-source">Private source</span>
          )}
        </div>
      </div>
    </article>
  );
}
