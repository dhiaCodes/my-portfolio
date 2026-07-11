"use client";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-8 px-6"
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--white)",
      }}
    >
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-2">
        <p
          className="text-xs font-medium"
          style={{ color: "var(--muted)" }}
        >
          © {year} Dhia Eddine Abdelli. No rights reserved.
        </p>
        <p
          className="text-xs"
          style={{ color: "var(--muted)" }}
        >
          Designed & built with care.
        </p>
      </div>
    </footer>
  );
}
