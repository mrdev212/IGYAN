const Skeleton = ({ className }: { className: string }) => (
  <div aria-hidden="true" className={`animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800 ${className}`} />
);

export default function PageSkeleton() {
  return (
    <main aria-busy="true" aria-live="polite" className="min-h-screen bg-white pt-32 dark:bg-slate-950">
      <span className="sr-only">Loading page content</span>
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
        <Skeleton className="mb-5 h-4 w-32" />
        <Skeleton className="mb-5 h-12 w-full max-w-2xl md:h-16" />
        <Skeleton className="h-5 w-full max-w-xl" />
        <Skeleton className="mt-3 h-5 w-4/5 max-w-lg" />
        <div className="mt-10 flex gap-3">
          <Skeleton className="h-12 w-36 rounded-full" />
          <Skeleton className="h-12 w-32 rounded-full" />
        </div>
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
