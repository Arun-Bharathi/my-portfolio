"use client";

import { useEffect, useState } from "react";

type Props = {
  titles: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
};

export default function RotatingTitle({
  titles,
  className,
  typingSpeed = 90,
  deletingSpeed = 45,
  pause = 1600,
}: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[index % titles.length];

    let delay = deleting ? deletingSpeed : typingSpeed;
    if (!deleting && text === current) delay = pause;

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % titles.length);
      } else {
        setText(current.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, titles, typingSpeed, deletingSpeed, pause]);

  return (
    <h2 className={className}>
      <span className="sr-only">{titles.join(", ")}</span>
      <span aria-hidden="true">
        {text}
        <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-current">&nbsp;</span>
      </span>
    </h2>
  );
}
