import { SOCIAL_LINKS } from "@/constants/social";
import { cn } from "@/lib/utils";
import { FacebookIcon, GithubIcon, InstagramIcon } from "@/components/icons";

const ICON_MAP = {
  github: GithubIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
};

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {SOCIAL_LINKS.map((link) => {
        const Icon = ICON_MAP[link.platform];
        return (
          <li key={link.platform}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={link.label}
              className="border-border bg-card text-foreground/70 hover:text-foreground hover:border-primary/50 flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
