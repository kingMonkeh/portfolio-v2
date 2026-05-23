export default function CommunityPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col px-6 py-16 sm:px-16">
      <div className="flex flex-col gap-1 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Community Wall 📌</h1>
        <p className="text-zinc-500">
          Leave a message, safe advice, or just say hello. Your note stays here indefinitely!
        </p>
      </div>

      {/* Interactive Sticky Note Grid Canvas */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        
        {/* Sticky Note 1 */}
        <div className="rotate-[-1deg] bg-amber-100 p-5 shadow-sm border border-amber-200 text-sm text-amber-950 font-medium aspect-square flex flex-col justify-between rounded-sm transform hover:rotate-0 transition-transform">
          <p>"Awesome site structure! Good luck with the full-stack updates."</p>
          <span className="block mt-4 font-bold text-amber-800 text-xs">— Guest #102</span>
        </div>

        {/* Sticky Note 2 */}
        <div className="rotate-[1.5deg] bg-blue-100 p-5 shadow-sm border border-blue-200 text-sm text-blue-950 font-medium aspect-square flex flex-col justify-between rounded-sm transform hover:rotate-0 transition-transform">
          <p>"Waterloo representation! Let's connect on LinkedIn."</p>
          <span className="block mt-4 font-bold text-blue-800 text-xs">— Anon Dev</span>
        </div>

        {/* Sticky Note 3 */}
        <div className="rotate-[-2deg] bg-emerald-100 p-5 shadow-sm border border-emerald-200 text-sm text-emerald-950 font-medium aspect-square flex flex-col justify-between rounded-sm transform hover:rotate-0 transition-transform">
          <p>"This light-themed interface is clean. Crisp fonts."</p>
          <span className="block mt-4 font-bold text-emerald-800 text-xs">— UI Enthusiast</span>
        </div>

      </div>
    </main>
  );
}
