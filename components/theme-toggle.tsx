// components/theme-toggle.tsx
"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect, bileşenin sadece istemcide yüklendiğinden emin olur.
  // Bu, hydration hatasını önler.
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Eğer bileşen henüz yüklenmediyse, bir yer tutucu göstererek
  // sunucu ve istemci arasında fark olmasını engelliyoruz.
  if (!mounted) {
    return <button className="theme-toggle w-9 h-9" disabled />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}