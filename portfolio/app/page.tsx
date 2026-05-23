import Image from "next/image";
import Experience from "@/components/Experience";

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
          
          <h2 className="mt-6 text-xs font-bold tracking-wider text-zinc-400 uppercase select-none">
            what i've been up to
          </h2>
          
          <ul className="mt-2 flex flex-col gap-2 text-sm text-zinc-600 font-normal">
            <Experience
              imageRef="/images/super_logo.png"
              role="swe"
              organization="Super.com"
              orgUrl="https://super.com/"
              misc="S26"
            />
            <Experience
              imageRef="/images/blendable_logo.jpg"
              role="swe"
              organization="Blendable"
              orgUrl="https://blendable.ca/"
              misc="F25"
            />
            <Experience
              imageRef="/images/uw_blueprint_logo.jpg"
              role="dev"
              organization="UW Blueprint"
              orgUrl="https://uwblueprint.org/"
              misc="🍽️ F4K"
            />
            <Experience
              imageRef="/images/watai.jpg"
              role="dev"
              organization="Wat.ai"
              orgUrl="https://watai.ca/"
            />
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
