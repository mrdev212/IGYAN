import type { ReactNode } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

type PolicyPageProps = {
  title: string;
  intro: string;
  children: ReactNode;
};

export default function PolicyPage({ title, intro, children }: PolicyPageProps) {
  return (
    <>
      <Navbar />
      <main className="bg-surface-white pt-28 dark:bg-slate-950 md:pt-32">
        <section className="bg-gradient-to-br from-[#0b2e72] via-[#3b1595] to-[#0a051c] px-margin-desktop py-20 text-white md:py-28">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 font-label-sm text-label-sm font-bold uppercase tracking-[0.18em] text-indigo-200">IGYAN AI</p>
            <h1 className="font-headline-xl text-headline-xl md:text-[56px]">{title}</h1>
            <p className="mt-6 font-body-lg text-body-lg text-indigo-100">{intro}</p>
          </div>
        </section>
        <section className="px-margin-desktop py-16 md:py-24">
          <article className="mx-auto max-w-3xl space-y-10 font-body-md text-body-md leading-relaxed text-on-surface-variant dark:text-slate-300">
            {children}
            <p className="border-t border-outline-variant/30 pt-8 text-sm">Last updated: July 22, 2026. Questions? Contact us at <a className="font-semibold text-trust-blue hover:underline dark:text-indigo-400" href="mailto:igyan.ai.team@gmail.com">igyan.ai.team@gmail.com</a>.</p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
