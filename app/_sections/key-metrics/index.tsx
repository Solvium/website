import { Users, TrendingUp, DollarSign, Activity, BarChart3, Eye, Trophy, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function KeyMetrics() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#020617]">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Gradients */}
        <div className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] bg-emerald-900/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-green-900/10 blur-[100px] rounded-full" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02]" />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Activity className="w-3 h-3 text-emerald-400" />
              <span className="text-xs font-medium text-emerald-300 tracking-wide uppercase">Success Metrics</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-pixelify)] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              Measuring What <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-400">
                Truly Matters
              </span>
            </h2>

            <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-montserrat)] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              We track both engagement and ecosystem health to ensure sustainable growth and player satisfaction.
            </p>
          </div>

          {/* Primary Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Users, value: "50K+", label: "Daily Active Users", sub: "Real-time engagement", color: "emerald" },
              { icon: Eye, value: "500K+", label: "Monthly Active Users", sub: "Growing community", color: "green" },
              { icon: DollarSign, value: "$2.5M+", label: "Monthly Volume", sub: "In-game economy", color: "teal" },
              { icon: Activity, value: "85%", label: "Token Circulation", sub: "Utility adoption", color: "cyan" }
            ].map((metric, i) => (
              <div key={i} className={`group relative animate-in fade-in slide-in-from-bottom-8 duration-700 delay-${300 + (i * 100)}`}>
                <div className={`absolute inset-0 bg-gradient-to-b from-${metric.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl`} />
                <Card className={`relative h-full bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:bg-white/10 group-hover:border-${metric.color}-500/30 group-hover:-translate-y-1`}>
                  <CardContent className="p-6 text-center">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-2xl mb-4 mx-auto bg-${metric.color}-500/20 text-${metric.color}-400 group-hover:scale-110 transition-transform duration-300 border border-white/5`}>
                      <metric.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2 text-white font-[family-name:var(--font-pixelify)]">{metric.value}</h3>
                    <div className="text-sm font-medium mb-1 text-slate-200 font-[family-name:var(--font-montserrat)]">{metric.label}</div>
                    <div className="text-xs text-slate-500 font-[family-name:var(--font-montserrat)]">{metric.sub}</div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Detailed Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Engagement Metrics */}
            <div className="group relative animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />
              <Card className="relative h-full bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-emerald-500/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mr-4">
                      <BarChart3 className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-[family-name:var(--font-pixelify)]">Engagement Metrics</h3>
                  </div>
                  <div className="space-y-6">
                    {[
                      { label: "Average Session Duration", value: "24 minutes", icon: Target },
                      { label: "Daily Puzzle Completion", value: "1.2M+", icon: Trophy },
                      { label: "Player Retention (Day 7)", value: "78%", icon: Users },
                      { label: "Player Retention (Day 30)", value: "42%", icon: Users }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between group/item p-3 rounded-xl hover:bg-white/5 transition-colors">
                        <div className="flex items-center">
                          <item.icon className="w-4 h-4 text-slate-500 mr-3 group-hover/item:text-emerald-400 transition-colors" />
                          <span className="text-sm text-slate-400 font-[family-name:var(--font-montserrat)]">{item.label}</span>
                        </div>
                        <span className="text-sm font-semibold text-white font-[family-name:var(--font-montserrat)]">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Ecosystem Health */}
            <div className="group relative animate-in fade-in slide-in-from-bottom-8 duration-700 delay-800">
              <div className="absolute inset-0 bg-gradient-to-l from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />
              <Card className="relative h-full bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-green-500/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-8">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mr-4">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-[family-name:var(--font-pixelify)]">Ecosystem Health</h3>
                  </div>
                  <div className="space-y-6">
                    {[
                      { label: "Telegram Community", value: "125K+ members" },
                      { label: "Discord Community", value: "85K+ members" },
                      { label: "NFT Marketplace Volume", value: "$450K+/month" },
                      { label: "Active Tournament Players", value: "15K+" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between group/item p-3 rounded-xl hover:bg-white/5 transition-colors">
                        <span className="text-sm text-slate-400 font-[family-name:var(--font-montserrat)]">{item.label}</span>
                        <span className="text-sm font-semibold text-white font-[family-name:var(--font-montserrat)]">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Growth Indicator */}
          <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-1000">
            <div className="inline-flex items-center px-6 py-4 rounded-full bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-emerald-500/10 border border-white/5 backdrop-blur-sm">
              <TrendingUp className="w-5 h-5 mr-3 text-emerald-400 animate-pulse" />
              <span className="text-sm md:text-base text-slate-300 font-[family-name:var(--font-montserrat)]">
                Strong <span className="text-white font-semibold">month-over-month growth</span> across all key metrics
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
