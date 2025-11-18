import { AlertTriangle, Lock, Gamepad2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function CoreProblem() {
  return (
    <section className="py-20" style={{backgroundColor: 'var(--brand-background)'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>
              The Core Problem
            </h2>
            <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{color: 'var(--brand-text-secondary)', fontFamily: 'var(--font-montserrat), sans-serif'}}>
              The Web3 gaming space is broken. Three critical issues prevent mainstream adoption and sustainable growth.
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* High Friction */}
            <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full mb-6 transition-transform hover:scale-110" style={{backgroundColor: 'var(--brand-container-light)'}}>
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>
                  High Friction
                </h3>
                <p className="text-sm mb-4" style={{color: 'var(--brand-text-secondary)', fontFamily: 'var(--font-montserrat), sans-serif'}}>
                  Complex wallets and convoluted blockchain mechanics create an impenetrable barrier to entry for mainstream gamers.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs" style={{color: 'var(--brand-text-secondary)', fontFamily: 'var(--font-montserrat), sans-serif'}}>
                    <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: 'var(--brand-accent)'}} />
                    Steep learning curve
                  </div>
                  <div className="flex items-center text-xs" style={{color: 'var(--brand-text-secondary)', fontFamily: 'var(--font-montserrat), sans-serif'}}>
                    <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: 'var(--brand-accent)'}} />
                    Multiple wallet setups
                  </div>
                  <div className="flex items-center text-xs" style={{color: 'var(--brand-text-secondary)', fontFamily: 'var(--font-montserrat), sans-serif'}}>
                    <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: 'var(--brand-accent)'}} />
                    Gas fee confusion
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Static Gameplay */}
            <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full mb-6 transition-transform hover:scale-110" style={{backgroundColor: 'var(--brand-container-light)'}}>
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>
                  Static Gameplay
                </h3>
                <p className="text-sm mb-4" style={{color: 'var(--brand-text-secondary)', fontFamily: 'var(--font-montserrat), sans-serif'}}>
                  Most games offer a one-size-fits-all experience, leading to player frustration, burnout, and rapid churn.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs" style={{color: 'var(--brand-text-secondary)', fontFamily: 'var(--font-montserrat), sans-serif'}}>
                    <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: 'var(--brand-accent)'}} />
                    Fixed difficulty levels
                  </div>
                  <div className="flex items-center text-xs" style={{color: 'var(--brand-text-secondary)', fontFamily: 'var(--font-montserrat), sans-serif'}}>
                    <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: 'var(--brand-accent)'}} />
                    No personalization
                  </div>
                  <div className="flex items-center text-xs" style={{color: 'var(--brand-text-secondary)', fontFamily: 'var(--font-montserrat), sans-serif'}}>
                    <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: 'var(--brand-accent)'}} />
                    Repetitive content
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lack of Ownership */}
            <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full mb-6 transition-transform hover:scale-110" style={{backgroundColor: 'var(--brand-container-light)'}}>
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>
                  Lack of Ownership
                </h3>
                <p className="text-sm mb-4" style={{color: 'var(--brand-text-secondary)', fontFamily: 'var(--font-montserrat), sans-serif'}}>
                  In-game achievements and assets in traditional mobile games have no real-world value or true ownership.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs" style={{color: 'var(--brand-text-secondary)', fontFamily: 'var(--font-montserrat), sans-serif'}}>
                    <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: 'var(--brand-accent)'}} />
                    Centralized control
                  </div>
                  <div className="flex items-center text-xs" style={{color: 'var(--brand-text-secondary)', fontFamily: 'var(--font-montserrat), sans-serif'}}>
                    <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: 'var(--brand-accent)'}} />
                    No asset portability
                  </div>
                  <div className="flex items-center text-xs" style={{color: 'var(--brand-text-secondary)', fontFamily: 'var(--font-montserrat), sans-serif'}}>
                    <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: 'var(--brand-accent)'}} />
                    Zero secondary market
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Impact Statement */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full backdrop-blur-sm" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
              <AlertTriangle className="w-5 h-5 mr-3 text-[#ffce51]" />
              <span style={{color: 'var(--brand-text)', fontFamily: 'var(--font-montserrat), sans-serif'}}>
                These barriers prevent billions of potential players from entering the Web3 gaming ecosystem
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
