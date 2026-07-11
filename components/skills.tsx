"use client";

import { FadeUp, Stagger, StaggerItem } from "./animations";
import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section" style={{ background: "var(--off-white)" }}>
      <div className="container">
        <FadeUp>
          <p
            className="text-[13px] font-medium tracking-wide uppercase mb-4"
            style={{ color: "var(--muted)", letterSpacing: "0.08em" }}
          >
            Expertise
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tight mb-14"
            style={{ color: "var(--heading)" }}
          >
            Tools of the craft.
          </h2>
        </FadeUp>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div>
                <h3
                  className="text-sm font-semibold uppercase tracking-wide mb-5"
                  style={{ color: "var(--heading)", letterSpacing: "0.04em" }}
                >
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-[15px] font-medium flex items-center gap-2.5"
                      style={{ color: "var(--body)" }}
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: "var(--muted)" }}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
