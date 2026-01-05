import { Crown, Gift, Handshake, Coins, TrendingUp, PiggyBank, Wallet, ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function RevenueModel() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#020617]">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Gradients */}
        <div className="absolute top-[10%] right-[20%] w-[40vw] h-[40vw] bg-amber-900/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[20%] left-[10%] w-[30vw] h-[30vw] bg-yellow-900/10 blur-[100px] rounded-full" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02]" />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-md mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Wallet className="w-3 h-3 text-amber-400" />
              <span className="text-xs font-medium text-amber-300 tracking-wide uppercase">Business Model</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-pixelify)] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              Sustainable <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400">
                Revenue Streams
              </span>
            </h2>

            <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-montserrat)] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Our diversified business model ensures long-term sustainability and growth while providing value to all stakeholders.
            </p>
          </div>

          {/* Revenue Streams Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Crown, title: "NFT Royalties", desc: "Secondary sales commission", value: "2.5%", sub: "Commission Rate", color: "amber" },
              { icon: Gift, title: "Premium Content", desc: "Exclusive puzzle tiers", value: "$9.99", sub: "Monthly Sub", color: "yellow" },
              { icon: Handshake, title: "Partnerships", desc: "Sponsored tournaments", value: "$50K+", sub: "Per Event", color: "orange" },
              { icon: Coins, title: "Token Deposits", desc: "Reward multipliers", value: "5%", sub: "Platform Fee", color: "gold" }
            ].map((item, i) => (
              <div key={i} className={`group relative animate-in fade-in slide-in-from-bottom-8 duration-700 delay-${300 + (i * 100)}`}>
                <div className={`absolute inset-0 bg-gradient-to-b from-${item.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl`} />
                <Card className={`relative h-full bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:bg-white/10 group-hover:border-${item.color}-500/30 group-hover:-translate-y-1`}>
                  <CardContent className="p-6 text-center">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-2xl mb-4 mx-auto bg-${item.color}-500/20 text-${item.color}-400 group-hover:scale-110 transition-transform duration-300 border border-white/5`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white font-[family-name:var(--font-pixelify)]">{item.title}</h3>
                    <p className="text-xs text-slate-400 mb-4 h-8 font-[family-name:var(--font-montserrat)]">{item.desc}</p>
                    <div className="text-2xl font-bold mb-1 text-white font-[family-name:var(--font-pixelify)]">{item.value}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-[family-name:var(--font-montserrat)]">{item.sub}</div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Revenue Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Revenue Distribution */}
            <div className="group relative animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />
              <Card className="relative h-full bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-amber-500/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mr-4">
                      <PiggyBank className="w-5 h-5 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-[family-name:var(--font-pixelify)]">Revenue Distribution</h3>
                  </div>
                  <div className="space-y-6">
                    {[
                      { label: "NFT Royalties", value: "35%", width: "35%" },
                      { label: "Premium Subscriptions", value: "30%", width: "30%" },
                      { label: "Brand Partnerships", value: "25%", width: "25%" },
                      { label: "Token Platform Fees", value: "10%", width: "10%" }
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400 font-[family-name:var(--font-montserrat)]">{item.label}</span>
                          <span className="text-white font-semibold font-[family-name:var(--font-montserrat)]">{item.value}</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: item.width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Growth Projections */}
            <div className="group relative animate-in fade-in slide-in-from-bottom-8 duration-700 delay-800">
              <div className="absolute inset-0 bg-gradient-to-l from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />
              <Card className="relative h-full bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-yellow-500/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center mr-4">
                      <TrendingUp className="w-5 h-5 text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-[family-name:var(--font-pixelify)]">Growth Projections</h3>
                  </div>
                  <div className="space-y-6">
                    {[
                      { label: "Current Monthly Revenue", value: "$125K" },
                      { label: "6-Month Projection", value: "$350K" },
                      { label: "12-Month Target", value: "$750K" },
                      { label: "Annual Run Rate (Year 2)", value: "$15M+" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between group/item p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                        <span className="text-sm text-slate-400 font-[family-name:var(--font-montserrat)]">{item.label}</span>
                        <div className="flex items-center">
                          <span className="text-sm font-semibold text-white font-[family-name:var(--font-montserrat)] mr-2">{item.value}</span>
                          <ArrowUpRight className="w-3 h-3 text-green-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="relative rounded-3xl p-8 lg:p-12 border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700 delay-1000">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-yellow-500/5 pointer-events-none" />

            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white font-[family-name:var(--font-pixelify)]">Player-First Economics</h3>
              <p className="max-w-3xl mx-auto leading-relaxed mb-8 text-slate-400 font-[family-name:var(--font-montserrat)]">
                Our revenue model aligns platform success with player value. We earn when players succeed,
                creating a sustainable ecosystem that rewards skill, engagement, and community participation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center justify-center px-6 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <TrendingUp className="w-4 h-4 mr-3 text-green-400" />
                  <span className="text-sm font-medium text-white">280% Revenue Growth YoY</span>
                </div>
                <div className="flex items-center justify-center px-6 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <Coins className="w-4 h-4 mr-3 text-yellow-400" />
                  <span className="text-sm font-medium text-white">$50M+ Asset Value Locked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
