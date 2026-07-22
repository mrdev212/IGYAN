const Skeleton = ({ className }: { className: string }) => (
  <div aria-hidden="true" className={`animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800 ${className}`} />
);

export default function PageSkeleton() {
  return (
    <main aria-busy="true" aria-live="polite" className="min-h-screen bg-white dark:bg-slate-950">
      <span className="sr-only">Loading page content</span>
      <header className="border-b border-slate-200 bg-white/80 px-6 py-5 dark:border-slate-800 dark:bg-slate-950/80 md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3"><Skeleton className="h-10 w-10 rounded-lg" /><Skeleton className="h-6 w-28" /></div>
          <div className="hidden gap-5 md:flex"><Skeleton className="h-4 w-16" /><Skeleton className="h-4 w-16" /><Skeleton className="h-4 w-16" /></div>
          <Skeleton className="h-10 w-28 rounded-full" />
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-6 py-16 text-center md:px-10 md:py-24">
        <Skeleton className="mx-auto mb-6 h-8 w-48 rounded-full" />
        <Skeleton className="mx-auto mb-5 h-12 w-full max-w-3xl md:h-16" />
        <Skeleton className="mx-auto h-5 w-full max-w-2xl" />
        <Skeleton className="mx-auto mt-3 h-5 w-4/5 max-w-xl" />
        <div className="mt-10 flex justify-center gap-3"><Skeleton className="h-12 w-40 rounded-full" /><Skeleton className="h-12 w-36 rounded-full" /></div>
        <Skeleton className="mx-auto mt-12 aspect-[16/8] w-full max-w-4xl rounded-3xl" />
      </section>
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-3 md:px-10">
        {Array.from({ length: 3 }, (_, index) => (
          <div key={index} className="overflow-hidden rounded-2xl border border-slate-200 p-5 dark:border-slate-800">
            <Skeleton className="h-44 w-full" />
            <Skeleton className="mt-5 h-5 w-2/3" />
            <Skeleton className="mt-3 h-4 w-full" />
            <Skeleton className="mt-2 h-4 w-5/6" />
          </div>
        ))}
      </section>
    </main>
  );
}
