"use client";

import { useEffect } from "react";

// Makes in-page links (href="#about" etc.) scroll smoothly without putting "#about" in the URL.
export default function HashlessScroll() {
  useEffect(() => {
    const clearHash = () =>
      history.replaceState(history.state, "", location.pathname + location.search);

    // Someone opened an old link like /#about: scroll there, then clean the URL.
    if (location.hash) {
      document.querySelector(location.hash)?.scrollIntoView();
      clearHash();
    }

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      const id = link?.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (location.hash) clearHash();
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
