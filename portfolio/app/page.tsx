export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col px-6 py-16 sm:px-16">
      <section className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Hy Lac Nguyen
          </h1>
          <p className="text-lg text-zinc-600 font-medium">
            CS @ <a href="https://uwaterloo.ca/" target="_blank" rel="noopener noreferrer" className="font-semibold text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 transition-colors">UWaterloo</a>
          </p>
          
        </div>
        
        <div className="relative flex h-24 w-24 shrink-0 overflow-hidden rounded-full border border-zinc-200 bg-white shadow-sm items-center justify-center text-zinc-400 font-bold">
          HN
        </div>
      </section>

      {/* Quick Call to Action to check out the rest of the site */}
      <div className="mt-12 flex gap-4">
        <a href="/projects" className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition-colors">
          View My Work
        </a>
        <a href="/community" className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-600 hover:border-zinc-400 hover:text-zinc-900 transition-all">
          Leave a Note 📌
        </a>
      </div>
    </main>
  );
}
