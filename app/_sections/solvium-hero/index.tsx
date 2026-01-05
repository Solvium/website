import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Play, Gamepad2, TrendingUp, Users, Zap, ArrowRight, ChevronRight } from "lucide-react"
import Image from "next/image"

export function SolviumHero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[#020617] pt-4 lg:pt-0">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-600/20 blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[30vw] h-[30vw] rounded-full bg-cyan-500/10 blur-[100px]" />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center w-full">

          {/* Left Column: Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 pb-4 lg:pb-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-3 lg:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 mx-auto lg:mx-0 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] lg:text-sm font-medium text-emerald-300/90 tracking-wide">Live on Mainnet</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-8xl lg:text-9xl font-bold mb-3 lg:mb-6 leading-[0.9] tracking-tight font-[family-name:var(--font-pixelify)] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 drop-shadow-2xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
                Solvium
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-xl text-slate-400 mb-4 lg:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-[family-name:var(--font-montserrat)] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              The next generation of Web3 gaming. Solve intelligent puzzles, earn real value, and own your assets in a decentralized ecosystem powered by AI.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 lg:gap-4 justify-center lg:justify-start items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 mb-8 lg:mb-12">
              <Button
                size="lg"
                className="group relative px-6 py-4 lg:px-8 lg:py-6 text-base lg:text-lg font-semibold bg-white text-black hover:bg-slate-200 transition-all duration-300 rounded-full overflow-hidden w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  Start Playing <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group px-6 py-4 lg:px-8 lg:py-6 text-base lg:text-lg font-semibold bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-full backdrop-blur-sm w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  <Gamepad2 className="w-4 h-4 lg:w-5 lg:h-5" />
                  Explore Platform
                </span>
              </Button>
            </div>

            {/* Features Grid - Under Buttons */}
            <div className="grid grid-cols-3 gap-2 lg:gap-8 max-w-2xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
              {[
                {
                  icon: Zap,
                  label: "AI Engine",
                  desc: "Dynamic puzzle generation"
                },
                {
                  icon: Users,
                  label: "Frictionless",
                  desc: "One-click onboarding"
                },
                {
                  icon: TrendingUp,
                  label: "Ownership",
                  desc: "Verifiable NFT assets"
                }
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group flex flex-col items-center lg:items-start gap-2 lg:gap-3 cursor-default"
                >
                  <div className="p-2 lg:p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all duration-300">
                    <feature.icon className="w-4 h-4 lg:w-6 lg:h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="font-semibold text-white text-[10px] lg:text-base leading-tight mb-0.5">{feature.label}</div>
                    <div className="hidden lg:block text-xs text-slate-400 font-[family-name:var(--font-montserrat)]">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Mascot (Hidden on Mobile) */}
          <div className="relative hidden lg:block order-1 lg:order-2 flex justify-center animate-in fade-in zoom-in duration-1000 delay-300">
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
              {/* Glow behind mascot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-indigo-500/20 blur-[100px] rounded-full animate-pulse" />

              {/* Floor Spotlight */}
              <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[60%] h-[20%] bg-indigo-500/30 blur-[50px] rounded-[100%]" />

              {/* Floating Mascot */}
              <div className="relative w-full h-full animate-[bounce_6s_infinite_ease-in-out]">
                <Image
                  src="/images/mascot.svg"
                  alt="Solvium Mascot"
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none -z-10" />
    </section>
  )
}
