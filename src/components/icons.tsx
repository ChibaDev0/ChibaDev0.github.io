import type { SVGProps } from "react";

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0.5C5.6 0.5 0.5 5.6 0.5 12c0 5.1 3.3 9.5 8 11 0.6 0.1 0.8-0.3 0.8-0.6v-2.1c-3.3 0.7-4-1.4-4-1.4-0.5-1.4-1.3-1.8-1.3-1.8-1.1-0.7 0.1-0.7 0.1-0.7 1.2 0.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 0.1-0.8 0.4-1.3 0.7-1.6-2.6-0.3-5.4-1.3-5.4-5.9 0-1.3 0.5-2.4 1.2-3.2-0.1-0.3-0.5-1.5 0.1-3.1 0 0 1-0.3 3.3 1.2 1-0.3 2-0.4 3-0.4s2 0.1 3 0.4c2.3-1.5 3.3-1.2 3.3-1.2 0.6 1.6 0.2 2.8 0.1 3.1 0.8 0.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9 0.4 0.4 0.8 1.1 0.8 2.2v3.3c0 0.3 0.2 0.7 0.8 0.6 4.7-1.6 8-6 8-11 0-6.4-5.1-11.5-11.5-11.5Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.5" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.6h2.6l0.4-3h-3v-1.9c0-0.9 0.2-1.5 1.5-1.5h1.6V4.3c-0.3 0-1.2-0.1-2.3-0.1-2.3 0-3.9 1.4-3.9 4v2.2H7.5v3h2.9V21h3.1Z" />
    </svg>
  );
}
