"use client";

import { useEffect, useState } from "react";

const KEY = "offersprinter_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      try {
        if (!localStorage.getItem(KEY)) setVisible(true);
      } catch {
        setVisible(true);
      }
    });
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-white/10 bg-[#0c1010]/95 p-4 shadow-2xl backdrop-blur-md sm:p-5">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-300">
          We use essential cookies and optional analytics to improve the experience.
          See our{" "}
          <a href="/privacy" className="text-emerald-400 underline">
            Privacy Policy
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            try {
              localStorage.setItem(KEY, "1");
            } catch {
              /* ignore */
            }
            setVisible(false);
          }}
          className="shrink-0 rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-zinc-950 hover:bg-emerald-400"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
