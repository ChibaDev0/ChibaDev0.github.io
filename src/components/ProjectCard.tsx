import type { PROJECTS } from "@/constants/projects";
import { cn } from "@/lib/utils";

type Project = (typeof PROJECTS)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer noopener"
      className="border-border bg-card rounded-card hover:border-primary/50 group flex flex-col gap-4 border p-6 transition-colors hover:-translate-y-1 hover:shadow-[0_0_40px_-15px_rgba(139,92,246,0.5)]"
      style={{ transitionProperty: "transform, box-shadow, border-color" }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-foreground text-lg font-semibold tracking-tight">
          {project.name}
        </h3>
        <span
          className={cn(
            "shrink-0 rounded-full border px-3 py-1 text-xs font-medium",
            project.status === "Live"
              ? "border-accent/40 text-accent"
              : "border-border text-foreground/60",
          )}
        >
          {project.status}
        </span>
      </div>

      <p className="text-foreground/70 text-sm leading-relaxed">
        {project.description}
      </p>

      <ul className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="border-border text-foreground/60 rounded-full border px-2.5 py-1 text-xs"
          >
            {tech}
          </li>
        ))}
      </ul>

      <span className="text-primary group-hover:text-accent inline-flex items-center gap-1 text-sm font-medium transition-colors">
        View Project
        <span
          aria-hidden
          className="transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </a>
  );
}
