export default function ProjectsPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col px-6 py-16 sm:px-16">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Projects</h1>
      <p className="text-zinc-500 mb-8">A curated list of engineering tools, systems, and applications I've built.</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-zinc-400">
          <h3 className="font-semibold text-zinc-900">WLP4 Compiler</h3>
          <p className="mt-1 text-sm text-zinc-500 leading-relaxed">
            Built a full compiler in C++ utilizing an SLR(1) parser and ARM64 assembly code generator.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-zinc-400">
          <h3 className="font-semibold text-zinc-900">Data Pipeline Engine</h3>
          <p className="mt-1 text-sm text-zinc-500 leading-relaxed">
            Engineered automated Python pipelines migrating over 100K+ records safely with strict validation rules.
          </p>
        </div>
      </div>
    </main>
  );
}
