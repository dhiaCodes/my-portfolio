"use client";

import { Mail, FileDown } from "lucide-react";
import { FadeUp } from "./animations";
import { contact } from "@/lib/data";

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const links = [
  {
    label: "Email",
    href: `mailto:${contact.email}`,
    icon: <Mail size={18} />,
    display: contact.email,
  },
  {
    label: "LinkedIn",
    href: contact.linkedin,
    icon: <LinkedinIcon />,
    display: "LinkedIn",
  },
  {
    label: "GitHub",
    href: contact.github,
    icon: <GithubIcon />,
    display: "GitHub",
  },
  {
    label: "Resume",
    href: contact.resume,
    icon: <FileDown size={18} />,
    display: "Download Resume",
  },
];

export function Contact() {
  return (
    <section id="contact" className="section" style={{ background: "var(--off-white)" }}>
      <div className="container-narrow text-center">
        <FadeUp>
          <p
            className="text-[13px] font-medium tracking-wide uppercase mb-4"
            style={{ color: "var(--muted)", letterSpacing: "0.08em" }}
          >
            Contact
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tight mb-4"
            style={{ color: "var(--heading)" }}
          >
            Let&apos;s build something
            <br />
            together.
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p
            className="text-base md:text-lg mb-12 max-w-md mx-auto"
            style={{ color: "var(--body)" }}
          >
            I&apos;m always open to discussing new projects, interesting ideas,
            or opportunities to create meaningful products.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2.5 h-12 px-6 text-[14px] font-medium rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--heading)",
                  background: "var(--white)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--muted)";
                  e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {link.icon}
                {link.display}
              </a>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
