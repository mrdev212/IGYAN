"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 text-center dark:bg-slate-950">
      <div className="max-w-lg">
        <p className="font-label-sm text-label-sm font-bold uppercase tracking-[0.18em] text-trust-blue dark:text-indigo-400">IGYAN AI</p>
        <h1 className="mt-4 font-headline-xl text-headline-xl text-on-surface dark:text-white">We couldn&apos;t load this page.</h1>
        <p className="mt-4 font-body-md text-body-md text-on-surface-variant dark:text-slate-400">Please try again. If the problem continues, contact our team.</p>
        <div className="mt-8 flex justify-center gap-4">
          <button type="button" onClick={reset} className="rounded-full bg-trust-blue px-6 py-3 font-semibold text-white transition hover:bg-[#003da1]">Try again</button>
          <a href="/contact" className="rounded-full border border-outline px-6 py-3 font-semibold text-trust-blue dark:border-slate-700 dark:text-indigo-400">Contact us</a>
        </div>
      </div>
    </main>
  );
}
