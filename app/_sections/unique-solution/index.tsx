import { Brain, Zap, Shield, Bot, Image, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function UniqueSolution() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#020617]">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Gradients */}
        <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-cyan-900/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-900/10 blur-[100px] rounded-full" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02]" />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span className="text-xs font-medium text-cyan-300 tracking-wide uppercase">The Solvium Solution</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-pixelify)] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              Bridging Fun & <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400">
                Real Finance
              </span>
            </h2>

            <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-montserrat)] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              We've built a seamless platform where players can earn crypto and truly own their in-game assets through innovative, invisible technology.
            </p>
          </div>

          {/* Main Solution Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {/* AI Puzzle Engine */}
            <div className="group relative animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
              <Card className="relative h-full bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:bg-white/10 group-hover:border-cyan-500/30 group-hover:-translate-y-1">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                    <Brain className="w-7 h-7 text-cyan-400" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white font-[family-name:var(--font-pixelify)]">
                    AI Puzzle Engine
                  </h3>

                  <p className="text-sm text-slate-400 mb-6 leading-relaxed font-[family-name:var(--font-montserrat)] flex-grow">
                    Proprietary technology that dynamically adjusts puzzle difficulty in real-time for personalized, endlessly engaging experiences.
                  </p>

                  <div className="space-y-3 pt-6 border-t border-white/5">
                    {["Real-time difficulty adjustment", "Personalized gameplay patterns", "Infinite content generation"].map((item, i) => (
                      <div key={i} className="flex items-center text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 mr-2 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Frictionless Onboarding */}
            <div className="group relative animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
              <Card className="relative h-full bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:bg-white/10 group-hover:border-blue-500/30 group-hover:-translate-y-1">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                    <Bot className="w-7 h-7 text-blue-400" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white font-[family-name:var(--font-pixelify)]">
                    Frictionless Entry
                  </h3>

                  <p className="text-sm text-slate-400 mb-6 leading-relaxed font-[family-name:var(--font-montserrat)] flex-grow">
                    Simple bot-based login and integrated, mobile-first wallet on Telegram and Discord let users start playing in seconds.
                  </p>

                  <div className="space-y-3 pt-6 border-t border-white/5">
                    {["No external wallet required", "Start in under 30 seconds", "Social platform integration"].map((item, i) => (
                      <div key={i} className="flex items-center text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mr-2 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* True Digital Ownership */}
            <div className="group relative animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
              <Card className="relative h-full bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:bg-white/10 group-hover:border-indigo-500/30 group-hover:-translate-y-1">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                    <Image className="w-7 h-7 text-indigo-400" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white font-[family-name:var(--font-pixelify)]">
                    True Ownership
                  </h3>

                  <p className="text-sm text-slate-400 mb-6 leading-relaxed font-[family-name:var(--font-montserrat)] flex-grow">
                    All player achievements, from badges to puzzle skins, are minted as NFTs providing verifiable, permanent ownership.
                  </p>

                  <div className="space-y-3 pt-6 border-t border-white/5">
                    {["On-chain verification", "Secondary marketplace trading", "Cross-game asset portability"].map((item, i) => (
                      <div key={i} className="flex items-center text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 mr-2 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="relative rounded-3xl p-8 lg:p-12 border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
              <div className="text-center lg:text-left max-w-md">
                <h3 className="text-2xl font-bold mb-2 text-white font-[family-name:var(--font-pixelify)]">Powered by Innovation</h3>
                <p className="text-sm text-slate-400 font-[family-name:var(--font-montserrat)]">
                  Built on cutting-edge technology to enable the next generation of Web3 gaming experiences.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-auto">
                {[
                  { icon: Brain, label: "Machine Learning", sub: "Adaptive AI" },
                  { icon: Shield, label: "Blockchain", sub: "NEAR Protocol" },
                  { icon: Image, label: "NFT Standards", sub: "ERC-721/1155" },
                  { icon: TrendingUp, label: "DeFi Integration", sub: "$SOV Token" }
                ].map((tech, i) => (
                  <div key={i} className="group p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 text-center">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <tech.icon className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-xs font-semibold text-white mb-0.5">{tech.label}</div>
                    <div className="text-[10px] text-slate-500">{tech.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
