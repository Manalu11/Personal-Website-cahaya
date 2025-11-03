"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark" | "pink";

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  root.classList.remove("dark", "pink");

  if (mode === "dark") root.classList.add("dark");
  else if (mode === "pink") root.classList.add("pink");
}

export default function Navigasi() {
  const [theme, setTheme] = useState<ThemeMode | null>(null);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(
      "theme"
    ) as ThemeMode | null;
    if (
      storedTheme === "light" ||
      storedTheme === "dark" ||
      storedTheme === "pink"
    ) {
      applyTheme(storedTheme);
      setTheme(storedTheme);
      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = prefersDark ? "dark" : "light";
    applyTheme(initialTheme);
    setTheme(initialTheme);
  }, []);

  const handleSelectTheme = (mode: ThemeMode) => {
    applyTheme(mode);
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  return (
    <nav className="p-2 bg-white dark:bg-zinc-900 pink:bg-pink-50 flex items-center gap-x-2 rounded-full shadow-md fixed bottom-4 md:bottom-auto md:top-12 left-1/2 -translate-x-1/2 z-10 transition-all">
      {/* tombol navigasi */}
      <a
        href="#about"
        className="px-4 py-2 text-zinc-500 dark:text-zinc-300 hover:text-pink-500"
      >
        About
      </a>
      <a
        href="#projects"
        className="px-4 py-2 text-zinc-500 dark:text-zinc-300 hover:text-pink-500"
      >
        Projects
      </a>
      <a
        href="#contact"
        className="px-4 py-2 text-zinc-500 dark:text-zinc-300 hover:text-pink-500"
      >
        Contact
      </a>

      <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-700 mx-2"></div>

      {/* menu tema */}
      <div className="flex gap-2 items-center">
        <button
          onClick={() => handleSelectTheme("light")}
          className={`w-6 h-6 rounded-full border ${
            theme === "light" ? "ring-2 ring-pink-400" : ""
          }`}
          style={{ backgroundColor: "#ffffff" }}
          title="Tema Putih"
        ></button>

        <button
          onClick={() => handleSelectTheme("dark")}
          className={`w-6 h-6 rounded-full border ${
            theme === "dark" ? "ring-2 ring-pink-400" : ""
          }`}
          style={{ backgroundColor: "#1f1f1f" }}
          title="Tema Hitam"
        ></button>

        <button
          onClick={() => handleSelectTheme("pink")}
          className={`w-6 h-6 rounded-full border ${
            theme === "pink" ? "ring-2 ring-pink-400" : ""
          }`}
          style={{ backgroundColor: "#ffe4ec" }}
          title="Tema Pink Halus"
        ></button>
      </div>
    </nav>
  );
}
