"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center"
      style={{
        minHeight: "100vh",
        background: "var(--white)",
      }}
    >
      <div className="container-narrow text-center px-6">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-[13px] font-medium tracking-wide uppercase mb-6"
          style={{ color: "var(--muted)", letterSpacing: "0.08em" }}
        >
          Mobile Product Engineer
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.08] tracking-tight mb-6"
          style={{ color: "var(--heading)" }}
        >
          Building thoughtful
          <br />
          mobile experiences.
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="text-lg md:text-xl max-w-md mx-auto mb-10"
          style={{ color: "var(--body)", lineHeight: 1.6 }}
        >
          I craft polished mobile applications that people genuinely enjoy using.
          Flutter specialist with a passion for product quality.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center h-12 px-7 text-[15px] font-medium rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              backgroundColor: "var(--heading)",
              color: "var(--white)",
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-12 px-7 text-[15px] font-medium rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              border: "1px solid var(--border)",
              color: "var(--heading)",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--muted)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--border)")
            }
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown
            size={18}
            strokeWidth={1.5}
            style={{ color: "var(--muted)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
