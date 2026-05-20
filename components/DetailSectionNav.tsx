"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const sectionLinks = [
  { id: "highlights", label: "見どころ", href: "#highlights" },
  { id: "photos", label: "写真", href: "#photos" },
  { id: "access", label: "アクセス", href: "#access" },
];

export function DetailSectionNav() {
  const [activeSectionId, setActiveSectionId] = useState(sectionLinks[0].id);
  const sectionRatioRef = useRef(new Map<string, number>());

  useEffect(() => {
    const isPageBottom = () =>
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 4;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionRatioRef.current.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        });

        if (isPageBottom()) {
          setActiveSectionId(sectionLinks[sectionLinks.length - 1].id);
          return;
        }

        const mostVisibleSection = sectionLinks
          .map((sectionLink) => ({
            id: sectionLink.id,
            ratio: sectionRatioRef.current.get(sectionLink.id) ?? 0,
          }))
          .sort((a, b) => b.ratio - a.ratio)[0];
        if (mostVisibleSection.ratio > 0) {
          setActiveSectionId(mostVisibleSection.id);
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -25% 0px",
        threshold: [0, 0.15, 0.35, 0.6],
      },
    );

    sectionLinks.forEach((sectionLink) => {
      const sectionElement = document.getElementById(sectionLink.id);

      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    const handleScroll = () => {
      if (isPageBottom()) {
        setActiveSectionId(sectionLinks[sectionLinks.length - 1].id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <aside className="sticky top-28 self-start rounded-2xl bg-card p-4 shadow-panel ring-1 ring-border/80 max-md:static">
      <h2 className="mb-3 text-xs font-semibold tracking-[0.16em] text-muted-foreground">
        CONTENTS
      </h2>

      <nav className="grid gap-2">
        {sectionLinks.map((sectionLink) => {
          const isActive = activeSectionId === sectionLink.id;

          return (
            <a
              key={sectionLink.href}
              href={sectionLink.href}
              aria-current={isActive ? "true" : undefined}
              onClick={() => setActiveSectionId(sectionLink.id)}
              className={cn(
                "relative rounded-xl px-3 py-2 text-sm font-medium transition duration-300 before:absolute before:bottom-2 before:left-0 before:top-2 before:w-0.5 before:rounded-full before:bg-transparent",
                isActive
                  ? "bg-secondary text-foreground before:bg-primary"
                  : "text-muted-foreground hover:bg-surface-hover hover:text-foreground",
              )}
            >
              {sectionLink.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
