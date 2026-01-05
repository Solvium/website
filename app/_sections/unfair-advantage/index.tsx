import { Trophy, Users, Brain, Handshake, Shield, Zap, Swords, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function UnfairAdvantage() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#020617]">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Gradients */}
        <div className="absolute top-[20%] left-[10%] w-[50vw] h-[50vw] bg-red-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-orange-900/10 blur-[100px] rounded-full" />

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
              <Swords className="w-3 h-3 text-red-400" />
              <span className="text-xs font-medium text-red-300 tracking-wide uppercase">Competitive Edge</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-pixelify)] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              Our Unfair <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-red-500">
                Advantage
              </span>
            </h2>

            <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-montserrat)] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Core strengths that create a formidable competitive moat and position us for market dominance.
            </p>
          </div>

          {/* Advantage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Trophy,
                title: "First-Mover Advantage",
                desc: "Pioneers in using AI engine for dynamic puzzle personalization in Web3 gaming, creating technological barriers that are difficult to replicate.",
                points: ["Proprietary AI algorithms with 18 months R&D", "Patent-pending dynamic difficulty system", "Exclusive partnerships with major platforms"],
                color: "red"
              },
              {
                icon: Users,
                title: "Proven Community",
                desc: "Rapidly growing community on Telegram and Discord demonstrates strong organic demand and network effects.",
                points: ["210K+ combined social media followers", "85% community engagement rate", "Viral word-of-mouth growth engine"],
                color: "orange"
              },
              {
                icon: Brain,
                title: "Team Expertise",
                desc: "Leadership team with deep experience in both blockchain and game design, bringing unique cross-disciplinary insights.",
                points: ["Ex-Disney, EA, and Unity developers", "Blockchain veterans from ConsenSys & Chainlink", "AI/ML PhDs from top institutions"],
                color: "amber"
              },
              {
                icon: Handshake,
                title: "Strategic Partnerships",
                desc: "Collaborations with industry leaders provide robust technical foundation and market access.",
                points: ["NEAR Protocol Foundation technical partnership", "Telegram gaming API early access", "Major NFT marketplace integrations"],
                color: "rose"
              }
            ].map((item, i) => (
              <div key={i} className={`group relative animate-in fade-in slide-in-from-bottom-8 duration-700 delay-${300 + (i * 100)}`}>
                <div className={`absolute inset-0 bg-gradient-to-b from-${item.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl`} />
                <Card className={`relative h-full bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:bg-white/10 group-hover:border-${item.color}-500/30 group-hover:-translate-y-1`}>
                  <CardContent className="p-8">
                    <div className="flex items-start mb-6">
                      <div className={`flex items-center justify-center w-14 h-14 rounded-2xl mr-6 transition-transform group-hover:scale-110 flex-shrink-0 bg-${item.color}-500/20 text-${item.color}-400 border border-white/5`}>
                        <item.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-white font-[family-name:var(--font-pixelify)] group-hover:text-${item.color}-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed font-[family-name:var(--font-montserrat)]">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 md:ml-20 pt-2 border-t border-white/5">
                      {item.points.map((point, j) => (
                        <div key={j} className="flex items-start group/point">
                          <Shield className={`w-4 h-4 mr-3 mt-1 flex-shrink-0 text-slate-600 group-hover/point:text-${item.color}-400 transition-colors`} />
                          <span className="text-xs text-slate-500 group-hover/point:text-slate-300 transition-colors font-[family-name:var(--font-montserrat)]">{point}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Competitive Moat */}
          <div className="relative rounded-3xl p-8 lg:p-12 border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700 delay-800">
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-orange-900/20 pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold mb-4 text-white font-[family-name:var(--font-pixelify)]">Formidable Competitive Moat</h3>
                <p className="max-w-3xl mx-auto text-sm text-slate-400 font-[family-name:var(--font-montserrat)]">
                  Our combined advantages create barriers that would require competitors <span className="text-white font-semibold">2-3 years</span> and <span className="text-white font-semibold">$10M+</span> to replicate
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "18+", label: "Months of R&D", icon: Target },
                  { value: "3", label: "Patents Pending", icon: Shield },
                  { value: "$5M+", label: "Tech Investment", icon: Zap },
                  { value: "24", label: "Expert Members", icon: Users }
                ].map((stat, i) => (
                  <div key={i} className="text-center group p-4 rounded-2xl hover:bg-white/5 transition-colors">
                    <div className="flex justify-center mb-3">
                      <stat.icon className="w-6 h-6 text-red-500/50 group-hover:text-red-400 transition-colors" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold mb-2 text-white font-[family-name:var(--font-pixelify)]">{stat.value}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-[family-name:var(--font-montserrat)]">{stat.label}</div>
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
