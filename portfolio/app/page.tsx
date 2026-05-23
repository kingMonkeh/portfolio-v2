import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col px-6 py-16 sm:px-16">
      <section className="flex flex-col-reverse gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Hy Lac Nguyen
          </h1>
          <p className="text-lg text-zinc-600 font-medium">
            CS @ <a href="https://uwaterloo.ca/" target="_blank" rel="noopener noreferrer" className="font-semibold text-zinc-600 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 transition-colors">UWaterloo</a>
          </p>
          
          <ul className="mt-4 flex flex-col gap-2 text-sm text-zinc-600 font-normal">
            <li className="flex items-center gap-2">
              <span className="text-zinc-400 select-none">&gt;</span>
              <span className="flex items-center gap-1.5">
                swe @
                <span className="inline-flex items-center gap-1 font-semibold text-zinc-600">
                  <Image
                    src="/images/super_logo.png"
                    alt="Super.com Logo"
                    width={16}
                    height={16}
                    className="rounded-sm object-contain"
                  />
                  <a href="https://super.com/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 transition-colors">Super.com</a>
                </span>
                (S26)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-400 select-none">&gt;</span>
              <span className="flex items-center gap-1.5">
                swe @
                <span className="inline-flex items-center gap-1 font-semibold text-zinc-600">
                  <Image
                    src="/images/blendable_logo.jpg"
                    alt="Blendable Logo"
                    width={16}
                    height={16}
                    className="rounded-sm object-contain"
                  />
                  <a href="https://blendable.ca/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 transition-colors">Blendable</a>
                </span>
                (F25)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-400 select-none">&gt;</span>
              <span className="flex items-center gap-1.5">
                dev @
                <span className="inline-flex items-center gap-1 font-semibold text-zinc-600">
                  <Image
                    src="/images/uw_blueprint_logo.jpg"
                    alt="UW Blueprint Logo"
                    width={16}
                    height={16}
                    className="rounded-sm object-contain"
                  />
                  <a href="https://uwblueprint.org/" target="_blank" rel="noopener noreferrer" className="underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 transition-colors">UW Blueprint</a>
                </span>
                (🍽️ F4K)
              </span>
            </li>
          </ul>
        </div>
        
        <div className="relative w-44 shrink-0 -rotate-2 rounded-xl border border-zinc-200/80 bg-white p-3 pb-10 shadow-md transition-all duration-300 hover:rotate-1 hover:scale-105 hover:shadow-xl sm:w-66">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-zinc-50 border border-zinc-100">
            <Image
              src="/images/canada_goose.webp"
              alt="Canada Goose"
              fill
              className="object-cover"
              priority
            />
          </div>
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
