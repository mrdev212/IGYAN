type Variant = "auth" | "dashboard" | "feature";

const Block = ({ className }: { className: string }) => (
  <div aria-hidden="true" className={`animate-pulse rounded-2xl bg-slate-200 dark:bg-slate-800 ${className}`} />
);

export default function RouteSkeleton({ variant }: { variant: Variant }) {
  if (variant === "auth") {
    return (
      <main aria-busy="true" aria-live="polite" className="grid min-h-screen place-items-center bg-slate-50 p-6 dark:bg-slate-950">
        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <Block className="mx-auto h-12 w-12 rounded-xl" />
          <Block className="mx-auto mt-6 h-8 w-48" />
          <Block className="mx-auto mt-3 h-4 w-64 max-w-full" />
          <Block className="mt-10 h-12 w-full" />
          <Block className="mt-5 h-12 w-full" />
          <Block className="mt-7 h-12 w-full rounded-full" />
        </div>
      </main>
    );
  }

  if (variant === "dashboard") {
    return (
      <main aria-busy="true" aria-live="polite" className="min-h-screen bg-slate-50 px-6 py-10 dark:bg-slate-950 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Block className="h-8 w-56" />
          <Block className="mt-3 h-4 w-80 max-w-full" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">{Array.from({ length: 3 }, (_, index) => <Block key={index} className="h-32 w-full" />)}</div>
          <Block className="mt-7 h-80 w-full" />
        </div>
      </main>
    );
  }

  return (
    <main aria-busy="true" aria-live="polite" className="min-h-screen bg-white pt-28 dark:bg-slate-950 md:pt-32">
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center md:px-10 md:py-24">
        <div><Block className="h-8 w-44 rounded-full" /><Block className="mt-6 h-14 w-full" /><Block className="mt-4 h-14 w-4/5" /><Block className="mt-7 h-5 w-full" /><Block className="mt-3 h-5 w-5/6" /><Block className="mt-9 h-12 w-44 rounded-full" /></div>
        <Block className="aspect-[4/3] w-full rounded-3xl" />
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-20 md:grid-cols-3 md:px-10">{Array.from({ length: 3 }, (_, index) => <Block key={index} className="h-64 w-full" />)}</section>
    </main>
  );
}
