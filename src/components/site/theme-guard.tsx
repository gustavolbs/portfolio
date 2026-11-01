"use client";

import { useEffect } from "react";
import { ensureApplied } from "@/lib/theme";

/* Renders nothing. Re-asserts the stored theme once after mount so the palette
   survives any client re-render that discards the attributes set before paint. */
export function ThemeGuard() {
  useEffect(() => {
    ensureApplied();
  }, []);
  return null;
}
