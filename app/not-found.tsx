import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 text-center dark:bg-slate-950">
      <div className="max-w-lg">
        <p className="font-label-sm text-label-sm font-bold uppercase tracking-[0.18em] text-trust-blue dark:text-indigo-400">404</p>
        <h1 className="mt-4 font-headline-xl text-headline-xl text-on-surface dark:text-white">This page isn&apos;t available.</h1>
        <p className="mt-4 font-body-md text-body-md text-on-surface-variant dark:text-slate-400">The page may have moved, or the address may be incorrect.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-trust-blue px-6 py-3 font-semibold text-white transition hover:bg-[#003da1]">Back to home</Link>
      </div>
    </main>
  );
}
