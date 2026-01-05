import { Rocket, Globe, Users, Target, Sparkles, ArrowRight, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Vision() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#020617]">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cosmic Gradients */}
        <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[60vw] h-[60vw] bg-purple-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[0%] left-[0%] w-[40vw] h-[40vw] bg-indigo-900/10 blur-[100px] rounded-full" />
        <div className="absolute top-[20%] right-[0%] w-[30vw] h-[30vw] bg-fuchsia-900/10 blur-[100px] rounded-full" />

        {/* Stars/Particles */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.02]" />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-md mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Sparkles className="w-3 h-3 text-purple-400" />
              <span className="text-xs font-medium text-purple-300 tracking-wide uppercase">Our Vision</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-pixelify)] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              A Global Gaming <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400">
                Revolution
              </span>
            </h2>

            <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-montserrat)] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Our five-year vision is to become the dominant Web3 puzzle platform globally, empowering millions with fun, accessible, and rewarding blockchain experiences.
            </p>
          </div>

          {/* Vision Statement */}
          <div className="relative rounded-3xl p-8 lg:p-16 mb-20 border border-white/10 bg-white/[0.02] backdrop-blur-sm overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 mb-8 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                <Rocket className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white font-[family-name:var(--font-pixelify)]">
                Solvium Is Not Just A Game
              </h3>

              <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10 text-slate-300 font-[family-name:var(--font-montserrat)]">
                It's a movement to revolutionize digital ownership and economic opportunity. We're building the bridge that brings millions of mainstream users into the blockchain ecosystem through the universal language of play.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                {[
                  { icon: Globe, label: "Global Reach" },
                  { icon: Users, label: "Mass Adoption" },
                  { icon: Sparkles, label: "Economic Empowerment" }
                ].map((item, i) => (
                  <div key={i} className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <item.icon className="w-5 h-5 mr-3 text-purple-400" />
                    <span className="text-sm font-medium text-white font-[family-name:var(--font-montserrat)]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 5-Year Roadmap */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-white font-[family-name:var(--font-pixelify)]">Five-Year Roadmap to Dominance</h3>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { year: "Year 1", title: "Foundation", items: ["Platform launch", "1M+ users", "Core features complete"], color: "indigo" },
                { year: "Year 2", title: "Expansion", items: ["Multi-chain deployment", "5M+ users", "Mobile app launch"], color: "purple" },
                { year: "Year 3", title: "Scaling", items: ["15M+ users", "Global tournaments", "Enterprise partnerships"], color: "fuchsia" },
                { year: "Year 4", title: "Dominance", items: ["50M+ users", "Platform expansion", "DeFi integration"], color: "pink" },
                { year: "Year 5", title: "Ecosystem", items: ["100M+ users", "Web3 gaming standard", "Public company"], color: "rose" }
              ].map((phase, i) => (
                <div key={i} className={`group relative animate-in fade-in slide-in-from-bottom-8 duration-700 delay-${400 + (i * 100)}`}>
                  <div className={`absolute inset-0 bg-gradient-to-b from-${phase.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl`} />
                  <Card className={`relative h-full bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:bg-white/10 group-hover:border-${phase.color}-500/30 group-hover:-translate-y-1`}>
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold mb-2 text-white/50 group-hover:text-white transition-colors font-[family-name:var(--font-pixelify)]">{phase.year}</div>
                      <h4 className={`text-lg font-bold mb-4 text-${phase.color}-400`}>{phase.title}</h4>
                      <ul className="space-y-3">
                        {phase.items.map((item, j) => (
                          <li key={j} className="flex items-start text-xs text-slate-400 group-hover:text-slate-300 transition-colors font-[family-name:var(--font-montserrat)]">
                            <ArrowRight className={`w-3 h-3 mr-2 mt-0.5 flex-shrink-0 text-${phase.color}-500/50 group-hover:text-${phase.color}-400`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Target, value: "100M+", label: "Users Empowered", desc: "Bringing millions into the blockchain ecosystem through gaming", color: "purple" },
              { icon: Globe, value: "50+", label: "Countries Reached", desc: "Global platform with localized experiences and communities", color: "indigo" },
              { icon: Users, value: "$1B+", label: "Value Created", desc: "Economic opportunity generated for players and creators", color: "fuchsia" }
            ].map((metric, i) => (
              <div key={i} className={`group relative animate-in fade-in slide-in-from-bottom-8 duration-700 delay-${800 + (i * 100)}`}>
                <Card className="relative h-full bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                  <CardContent className="p-8 text-center">
                    <div className={`flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto bg-${metric.color}-500/20 text-${metric.color}-400 group-hover:scale-110 transition-transform duration-300`}>
                      <metric.icon className="w-8 h-8" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold mb-2 text-white font-[family-name:var(--font-pixelify)]">{metric.value}</div>
                    <div className="text-lg font-medium mb-3 text-slate-200 font-[family-name:var(--font-montserrat)]">{metric.label}</div>
                    <p className="text-sm text-slate-500 font-[family-name:var(--font-montserrat)]">
                      {metric.desc}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="relative text-center animate-in fade-in zoom-in duration-1000 delay-1000">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white font-[family-name:var(--font-pixelify)]">Join The Movement</h3>
            <p className="mb-10 max-w-2xl mx-auto text-lg text-slate-400 font-[family-name:var(--font-montserrat)]">
              Be part of the revolution that's making Web3 accessible, fun, and rewarding for everyone.
            </p>

            <Button
              size="lg"
              className="group relative px-8 py-6 text-lg font-bold bg-white text-black hover:bg-slate-200 transition-all duration-300 rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-3">
                <Rocket className="w-6 h-6 group-hover:animate-bounce" />
                Start Your Journey Today
              </span>
            </Button>

            {/* Mascot positioned as overlay */}
            <div className="absolute top-[-100px] right-[-50px] hidden lg:block z-10 pointer-events-none animate-[bounce_8s_infinite]">
              <img
                src="/images/mascot.svg"
                alt="Solvium Mascot"
                className="w-80 h-80 object-contain opacity-50 blur-[1px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
