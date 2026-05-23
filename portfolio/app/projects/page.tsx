import Image from "next/image";

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col px-6 py-16 sm:px-16">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Projects</h1>

      <div className="flex flex-col gap-6">

        {/* Goose Clicker Card */}
        <div className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:border-zinc-400 hover:shadow-md w-8/10">
          <div className="relative aspect-video w-full overflow-hidden bg-zinc-50 border-b border-zinc-100">
            <Image
              src="/images/goose_clicker.jpg"
              alt="Goose Clicker"
              fill
              style={{ objectFit: "fill" }}
              className="transition-transform duration-500"
              priority
            />
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-zinc-900 group-hover:text-zinc-950 transition-colors">
              <a
                href="https://kingmonkeh.github.io/Goose-Clicker/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline inline-flex items-center gap-2"
              >
                Goose Clicker
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="h-4 w-4 text-zinc-400 group-hover:text-zinc-600 transition-colors"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </h3>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
              inspired by cookie clicker
            </p>
          </div>
        </div>
        
      </div>
    </main>
  );
}

