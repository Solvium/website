import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Play, Gamepad2, TrendingUp, Users, Zap } from "lucide-react"

export function SolviumHero() {
  return (
    <section className="relative min-h-screen flex items-center w-full justify-center bg-[url('/images/background-hero.svg')] bg-cover bg-center bg-no-repeat">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{backgroundColor: 'var(--brand-container-light)'}} />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000" style={{backgroundColor: 'var(--brand-container-light)'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse delay-500" style={{backgroundColor: 'var(--brand-container-light)'}} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          {/* <Badge className="mb-6 px-4 py-2 text-sm font-medium border-0 transition-all" style={{backgroundColor: 'var(--brand-container)', color: 'var(--brand-text)'}}>
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Web3 Gaming Revolution
          </Badge> */}

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-[family-name:var(--font-pixelify)]" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>
            Solvium
          </h1>
          <h2 className="text-3xl md:text-3xl font-semibold mb-6" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>
            The AI-Powered Web3 Puzzle Game Platform
          </h2>

          {/* Subtitle */}
          <p className="text-sm md:text-sm mb-6 max-w-4xl mx-auto leading-relaxed" style={{color: 'var(--brand-text)', opacity: 0.9, fontFamily: 'var(--font-montserrat), sans-serif'}}>
            Bridge the gap between fun and finance. Play intelligent puzzles, earn crypto, and truly own your digital assets in a seamless Web3 gaming experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button size="lg" className="px-8 py-6 text-lg font-semibold min-w-[200px] border-0 shadow-lg hover:shadow-xl transition-all" style={{backgroundColor: 'var(--brand-container-light)', color: 'var(--brand-text)'}}>
              <Play className="w-5 h-5 mr-2" />
              Start Playing Now
            </Button>
            <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg font-semibold min-w-[200px] shadow-lg hover:shadow-xl transition-all"
                style={{backgroundColor: 'transparent', color: 'var(--brand-text)', borderColor: 'var(--brand-container-light)'}}
            >
                <Gamepad2 className="w-5 h-5 mr-2" />
                Explore Platform
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-4 rounded-lg backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
              <div className="text-xl font-bold mb-2 flex items-center justify-center" style={{color: 'var(--brand-text)'}}>
                <Zap className="w-4 h-4 mr-2" />
                AI Engine
              </div>
              <div className="text-xs" style={{color: 'var(--brand-text-secondary)', fontFamily: 'var(--font-montserrat), sans-serif'}}>Dynamic puzzle personalization</div>
            </div>
            <div className="text-center p-4 rounded-lg backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
              <div className="text-xl font-bold mb-2 flex items-center justify-center" style={{color: 'var(--brand-text)'}}>
                <Users className="w-4 h-4 mr-2" />
                Frictionless
              </div>
              <div className="text-xs" style={{color: 'var(--brand-text-secondary)', fontFamily: 'var(--font-montserrat), sans-serif'}}>Start in seconds on Telegram/Discord</div>
            </div>
            <div className="text-center p-4 rounded-lg backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
              <div className="text-xl font-bold mb-2 flex items-center justify-center" style={{color: 'var(--brand-text)'}}>
                <TrendingUp className="w-4 h-4 mr-2" />
                True Ownership
              </div>
              <div className="text-xs" style={{color: 'var(--brand-text-secondary)', fontFamily: 'var(--font-montserrat), sans-serif'}}>NFT assets with real-world value</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
