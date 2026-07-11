"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeUp } from "./animations";
import { projects, type Project, type ProjectStatus } from "@/lib/data";

/* ─── Platform icon ─── */
function PlatformIcon({ platform }: { platform: string }) {
  const icons: Record<string, string> = {
    ios: "􀣺",
    android: "􀯕",
    web: "􀎬",
  };
  const labels: Record<string, string> = {
    ios: "iOS",
    android: "Android",
    web: "Web",
  };
  return (
    <span
      className="text-xs font-medium px-2 py-1 rounded-md"
      style={{ background: "var(--off-white)", color: "var(--muted)" }}
      title={labels[platform] || platform}
    >
      {labels[platform] || platform}
    </span>
  );
}

/* ─── Status badge ─── */
function StatusBadge({ status, label }: { status: ProjectStatus; label: string }) {
  const dotColors: Record<ProjectStatus, string> = {
    live: "#34c759",
    development: "#0071e3",
    private: "#999999",
    research: "#af52de",
    "coming-soon": "#ff9f0a",
  };

  const badgeClass: Record<ProjectStatus, string> = {
    live: "badge-live",
    development: "badge-development",
    private: "badge-private",
    research: "badge-research",
    "coming-soon": "badge-coming-soon",
  };

  return (
    <span className={`badge ${badgeClass[status]}`}>
      <span
        className="inline-block w-[6px] h-[6px] rounded-full"
        style={{ backgroundColor: dotColors[status] }}
      />
      {label}
    </span>
  );
}

/* ─── Link button ─── */
function LinkButton({ type, url }: { type: string; url: string }) {
  const config: Record<string, { label: string; icon: React.ReactNode }> = {
    appstore: {
      label: "App Store",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ),
    },
    playstore: {
      label: "Google Play",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1.004 1.004 0 0 1 0 1.38l-2.302 2.302L15.396 12l2.302-3.192zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z" />
        </svg>
      ),
    },
    website: {
      label: "Website",
      icon: <ExternalLink size={13} />,
    },
    github: {
      label: "GitHub",
      icon: (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
  };

  const c = config[type];
  if (!c) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200"
      style={{
        border: "1px solid var(--border)",
        color: "var(--body)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--muted)";
        e.currentTarget.style.color = "var(--heading)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.color = "var(--body)";
      }}
    >
      {c.icon}
      {c.label}
    </a>
  );
}

/* ─── Project Card ─── */
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="group relative flex flex-col w-[340px] md:w-[400px] rounded-2xl overflow-hidden transition-all duration-500 cursor-default"
      style={{
        background: "var(--white)",
        boxShadow: "var(--shadow-card)",
      }}
      whileHover={{
        y: -4,
        boxShadow: "var(--shadow-card-hover)",
      }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Color accent bar */}
      <div
        className="h-[3px] w-full"
        style={{ background: project.color }}
      />

      {/* App icon area */}
      <div className="flex items-center gap-4 px-7 pt-7 pb-0">
        <div
          className="relative flex items-center justify-center w-14 h-14 rounded-[14px] overflow-hidden text-2xl"
          style={{
            background: `${project.color}10`,
            boxShadow: `0 1px 3px ${project.color}15`,
          }}
        >
          {project.icon.startsWith("/") ? (
            <Image
              src={project.icon}
              alt={project.title}
              fill
              className="object-cover"
              sizes="56px"
            />
          ) : (
            project.icon
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className="text-lg font-semibold tracking-tight truncate"
            style={{ color: "var(--heading)" }}
          >
            {project.title}
          </h3>
          <p
            className="text-xs font-medium mt-0.5"
            style={{ color: "var(--muted)" }}
          >
            {project.category}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="px-7 pt-4 pb-0 flex-1">
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--body)" }}
        >
          {project.description}
        </p>
      </div>

      {/* Meta: platforms + status */}
      <div className="flex flex-wrap items-center gap-2 px-7 pt-4">
        {project.platforms.map((p) => (
          <PlatformIcon key={p} platform={p} />
        ))}
        <StatusBadge status={project.status} label={project.statusLabel} />
      </div>

      {/* Links or access note */}
      <div className="flex flex-wrap items-center gap-2 px-7 pt-4 pb-7">
        {project.links.length > 0 ? (
          project.links.map((link) => (
            <LinkButton key={link.type} type={link.type} url={link.url} />
          ))
        ) : null}
        {project.accessNote && (
          <span
            className="text-xs font-medium italic"
            style={{ color: "var(--muted)" }}
          >
            {project.accessNote}
          </span>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Projects Section ─── */
export function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = dir === "left" ? -424 : 424;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="section" style={{ background: "var(--white)" }}>
      <div className="container">
        <div className="flex items-end justify-between mb-2 px-2">
          <div>
            <FadeUp>
              <p
                className="text-[13px] font-medium tracking-wide uppercase mb-4"
                style={{ color: "var(--muted)", letterSpacing: "0.08em" }}
              >
                Selected Work
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight"
                style={{ color: "var(--heading)" }}
              >
                Projects I&apos;ve shaped.
              </h2>
            </FadeUp>
          </div>

          {/* Navigation arrows — desktop only */}
          <FadeUp delay={0.15}>
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
                style={{
                  border: "1px solid var(--border)",
                  color: canScrollLeft ? "var(--heading)" : "var(--border)",
                  opacity: canScrollLeft ? 1 : 0.4,
                  cursor: canScrollLeft ? "pointer" : "default",
                }}
                aria-label="Scroll left"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
                style={{
                  border: "1px solid var(--border)",
                  color: canScrollRight ? "var(--heading)" : "var(--border)",
                  opacity: canScrollRight ? 1 : 0.4,
                  cursor: canScrollRight ? "pointer" : "default",
                }}
                aria-label="Scroll right"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </FadeUp>
        </div>

        {/* Carousel */}
        <FadeUp delay={0.2}>
          <div
            ref={trackRef}
            className="carousel-track"
            style={{ paddingLeft: "8px", paddingRight: "40px" }}
          >
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
