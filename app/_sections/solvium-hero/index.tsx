import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Play, Gamepad2 } from "lucide-react"

export function SolviumHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Gaming Platform
          </Badge>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent lg:text-5xl px-px py-1">
            AI-Powered Puzzle Gaming Hub
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Create, Play, and Earn with Solvium's Intelligent Puzzle Platform
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8 py-6 text-lg font-semibold min-w-[200px]">
              <Play className="w-5 h-5 mr-2" />
              Start Playing
            </Button>
            <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold min-w-[200px] bg-black text-white border-2 border-white hover:bg-white hover:text-black"
            >
                <Gamepad2 className="w-5 h-5 mr-2" />
                Explore Games
            </Button>
          </div>

          {/* Stats or additional info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">AI-Powered</div>
              <div className="text-sm text-muted-foreground">Adaptive Gaming</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Game Types</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Earn</div>
              <div className="text-sm text-muted-foreground">Token Rewards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
