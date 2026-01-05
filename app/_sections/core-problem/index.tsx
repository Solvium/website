import { AlertTriangle, Lock, Gamepad2, XCircle, Ban, ShieldAlert } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function CoreProblem() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#020617]">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Gradients */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-purple-900/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-indigo-900/10 blur-[100px] rounded-full" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02]" />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-md mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-xs font-medium text-red-300 tracking-wide uppercase">Critical Issues</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-pixelify)] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              The Web3 Gaming <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-red-400">
                Broken State
              </span>
            </h2>

            <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-montserrat)] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Despite billions in investment, the current ecosystem is failing players. Three fundamental flaws are holding back mass adoption.
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: High Friction */}
            <div className="group relative animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
              <Card className="relative h-full bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:bg-white/10 group-hover:border-red-500/30 group-hover:-translate-y-1">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                    <Ban className="w-8 h-8 text-red-400" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white font-[family-name:var(--font-pixelify)]">
                    High Friction
                  </h3>

                  <p className="text-sm text-slate-400 mb-6 leading-relaxed font-[family-name:var(--font-montserrat)] flex-grow">
                    Complex wallets, gas fees, and confusing bridges create an impenetrable barrier for 99% of gamers.
                  </p>

                  <div className="w-full space-y-3 pt-6 border-t border-white/5">
                    {["Steep learning curve", "Wallet setup nightmares", "Gas fee confusion"].map((item, i) => (
                      <div key={i} className="flex items-center text-xs text-slate-500 font-medium">
                        <XCircle className="w-3 h-3 text-red-500/50 mr-2" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Card 2: Static Gameplay */}
            <div className="group relative animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
              <Card className="relative h-full bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:bg-white/10 group-hover:border-orange-500/30 group-hover:-translate-y-1">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                    <Gamepad2 className="w-8 h-8 text-orange-400" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white font-[family-name:var(--font-pixelify)]">
                    Boring Gameplay
                  </h3>

                  <p className="text-sm text-slate-400 mb-6 leading-relaxed font-[family-name:var(--font-montserrat)] flex-grow">
                    Most "Play-to-Earn" games prioritize finance over fun, resulting in repetitive grinding and zero engagement.
                  </p>

                  <div className="w-full space-y-3 pt-6 border-t border-white/5">
                    {["Click-to-earn mechanics", "Repetitive loops", "Zero skill expression"].map((item, i) => (
                      <div key={i} className="flex items-center text-xs text-slate-500 font-medium">
                        <XCircle className="w-3 h-3 text-orange-500/50 mr-2" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Card 3: Fake Ownership */}
            <div className="group relative animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
              <Card className="relative h-full bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:bg-white/10 group-hover:border-yellow-500/30 group-hover:-translate-y-1">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                    <Lock className="w-8 h-8 text-yellow-400" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white font-[family-name:var(--font-pixelify)]">
                    Fake Ownership
                  </h3>

                  <p className="text-sm text-slate-400 mb-6 leading-relaxed font-[family-name:var(--font-montserrat)] flex-grow">
                    Assets are often locked in closed ecosystems with no real utility or secondary market value outside the game.
                  </p>

                  <div className="w-full space-y-3 pt-6 border-t border-white/5">
                    {["Centralized databases", "No interoperability", "Zero real-world value"].map((item, i) => (
                      <div key={i} className="flex items-center text-xs text-slate-500 font-medium">
                        <XCircle className="w-3 h-3 text-yellow-500/50 mr-2" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="mt-16 lg:mt-24 text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
            <div className="inline-flex items-center px-6 py-4 rounded-2xl bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 border border-white/5 backdrop-blur-sm">
              <ShieldAlert className="w-5 h-5 mr-3 text-orange-400 animate-pulse" />
              <span className="text-sm md:text-base text-slate-300 font-[family-name:var(--font-montserrat)]">
                The Result: <span className="text-white font-semibold">90% of Web3 games fail</span> within the first 6 months.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
