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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionRatioRef.current.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        });

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
        rootMargin: "-25% 0px -45% 0px",
        threshold: [0, 0.15, 0.35, 0.6],
      },
    );

    sectionLinks.forEach((sectionLink) => {
      const sectionElement = document.getElementById(sectionLink.id);

      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <aside className="sticky top-40 self-start rounded-lg border border-border bg-card/90 p-4 shadow-sm max-md:static">
      <h2 className="mb-3 text-base font-bold text-foreground">ページ内目次</h2>

      <nav className="grid gap-2">
        {sectionLinks.map((sectionLink) => {
          const isActive = activeSectionId === sectionLink.id;

          return (
            <a
              key={sectionLink.href}
              href={sectionLink.href}
              onClick={() => setActiveSectionId(sectionLink.id)}
              className={cn(
                "rounded-md px-3 py-2 text-base font-bold transition",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-primary hover:bg-surface-hover",
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
