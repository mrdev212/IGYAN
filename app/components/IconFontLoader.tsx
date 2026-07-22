"use client";

import { useEffect } from "react";

/**
 * Material Symbols are ligatures, so their source text can briefly be visible
 * while the remote font is downloading. Keep icons hidden until the font is
 * actually available rather than showing names such as `arrow_forward`.
 */
export default function IconFontLoader() {
  useEffect(() => {
    const root = document.documentElement;
    const font = "24px 'Material Symbols Outlined'";

    void document.fonts.load(font).finally(() => {
      root.classList.add("material-symbols-ready");
    });

    return () => root.classList.remove("material-symbols-ready");
  }, []);

  return null;
}
