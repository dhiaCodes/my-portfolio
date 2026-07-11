"use client";

import { FadeUp, Stagger, StaggerItem } from "./animations";
import { experiences, contact } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section" style={{ background: "var(--white)" }}>
      <div className="container-narrow">
        <FadeUp>
          <p
            className="text-[13px] font-medium tracking-wide uppercase mb-4"
            style={{ color: "var(--muted)", letterSpacing: "0.08em" }}
          >
            Experience
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tight mb-3"
            style={{ color: "var(--heading)" }}
          >
            Where I&apos;ve contributed.
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p
            className="text-sm mb-12"
            style={{ color: "var(--muted)" }}
          >
            For a full history of my work, view my{" "}
            <a
              href={contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:text-[#1a1a1a] transition-colors"
              style={{ color: "var(--body)" }}
            >
              resume
            </a>
            .
          </p>
        </FadeUp>

        <Stagger className="space-y-0">
          {experiences.map((exp, i) => (
            <StaggerItem key={i}>
              <div
                className="group py-8"
                style={{
                  borderBottom: i < experiences.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3
                      className="text-base font-semibold"
                      style={{ color: "var(--heading)" }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className="text-sm font-medium mt-0.5"
                      style={{ color: "var(--accent)" }}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <p
                    className="text-sm font-medium flex-shrink-0"
                    style={{ color: "var(--muted)" }}
                  >
                    {exp.period}
                  </p>
                </div>
                <p
                  className="text-sm leading-relaxed max-w-lg"
                  style={{ color: "var(--body)" }}
                >
                  {exp.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
