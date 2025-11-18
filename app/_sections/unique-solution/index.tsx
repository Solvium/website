import { Brain, Zap, Shield, Bot, Image, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function UniqueSolution() {
  return (
    <section className="py-20" style={{backgroundColor: 'var(--brand-background)'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 border-0" style={{backgroundColor: 'var(--brand-container-light)', color: 'var(--brand-text)'}}>
              Our Solution
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>
              Bridging Fun and Finance
            </h2>
            <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{color: 'var(--brand-text-secondary)'}}>
              Solvium offers a seamless platform where players can earn crypto and truly own their in-game assets through innovative technology.
            </p>
          </div>

          {/* Main Solution Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* AI Puzzle Engine */}
            <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full mb-6 transition-transform group-hover:scale-110" style={{backgroundColor: 'var(--brand-container-light)'}}>
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>
                  AI Puzzle Engine
                </h3>
                <p className="text-sm mb-6" style={{color: 'var(--brand-text-secondary)'}}>
                  Proprietary technology that dynamically adjusts puzzle difficulty in real-time for personalized, endlessly engaging experiences.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Zap className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>Real-time difficulty adjustment</span>
                  </div>
                  <div className="flex items-start">
                    <Zap className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>Personalized gameplay patterns</span>
                  </div>
                  <div className="flex items-start">
                    <Zap className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>Infinite content generation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Frictionless Onboarding */}
            <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full mb-6 transition-transform group-hover:scale-110" style={{backgroundColor: 'var(--brand-container-light)'}}>
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>
                  Frictionless Onboarding
                </h3>
                <p className="text-sm mb-6" style={{color: 'var(--brand-text-secondary)'}}>
                  Simple bot-based login and integrated, mobile-first wallet on Telegram and Discord let users start playing and earning in seconds.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Zap className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>No external wallet required</span>
                  </div>
                  <div className="flex items-start">
                    <Zap className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>Start in under 30 seconds</span>
                  </div>
                  <div className="flex items-start">
                    <Zap className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>Social platform integration</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* True Digital Ownership */}
            <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full mb-6 transition-transform group-hover:scale-110" style={{backgroundColor: 'var(--brand-container-light)'}}>
                  <Image className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>
                  True Digital Ownership
                </h3>
                <p className="text-sm mb-6" style={{color: 'var(--brand-text-secondary)'}}>
                  All player achievements, from badges to puzzle skins, are minted as NFTs providing verifiable, permanent ownership.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Zap className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>On-chain achievement verification</span>
                  </div>
                  <div className="flex items-start">
                    <Zap className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>Secondary marketplace trading</span>
                  </div>
                  <div className="flex items-start">
                    <Zap className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>Cross-game asset portability</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technology Stack */}
          <div className="rounded-2xl p-8 backdrop-blur-sm" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>Powered by Innovation</h3>
              <p className="text-sm" style={{color: 'var(--brand-text-secondary)'}}>Cutting-edge technology enabling the next generation of Web3 gaming</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{backgroundColor: 'var(--brand-container-light)'}}>
                  <Brain className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium" style={{color: 'var(--brand-text)'}}>Machine Learning</div>
                <div className="text-xs" style={{color: 'var(--brand-text-muted)'}}>Adaptive AI</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{backgroundColor: 'var(--brand-container-light)'}}>
                  <Shield className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium" style={{color: 'var(--brand-text)'}}>Blockchain</div>
                <div className="text-xs" style={{color: 'var(--brand-text-muted)'}}>NEAR Protocol</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{backgroundColor: 'var(--brand-container-light)'}}>
                  <Image className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium" style={{color: 'var(--brand-text)'}}>NFT Standards</div>
                <div className="text-xs" style={{color: 'var(--brand-text-muted)'}}>ERC-721/1155</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{backgroundColor: 'var(--brand-container-light)'}}>
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium" style={{color: 'var(--brand-text)'}}>DeFi Integration</div>
                <div className="text-xs" style={{color: 'var(--brand-text-muted)'}}>$SOV Token</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
