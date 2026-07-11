"use client";

import { FadeUp } from "./animations";

export function About() {
  return (
    <section id="about" className="section" style={{ background: "var(--off-white)" }}>
      <div className="container-narrow">
        <FadeUp>
          <p
            className="text-[13px] font-medium tracking-wide uppercase mb-4"
            style={{ color: "var(--muted)", letterSpacing: "0.08em" }}
          >
            About
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tight mb-8"
            style={{ color: "var(--heading)" }}
          >
            Crafting mobile products
            <br />
            with intention.
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="space-y-5">
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--body)" }}>
              I'm a mobile product engineer who believes great software should feel
              invisible. My work sits at the intersection of engineering and design, where
              every interaction is deliberate and every pixel has purpose.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--body)" }}>
              I specialize in Flutter, building cross-platform applications that feel
              truly native. From concept to deployment, I care deeply about the details
              that transform functional software into products people love.
            </p>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--body)" }}>
              When I&apos;m not building, I&apos;m exploring new interaction patterns, studying
              design systems, and thinking about how technology can create more meaningful
              human experiences.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
