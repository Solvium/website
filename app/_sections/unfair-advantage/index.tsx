import { Trophy, Users, Brain, Handshake, Shield, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function UnfairAdvantage() {
  return (
    <section className="py-20" style={{backgroundColor: 'var(--brand-background)'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 border-0" style={{backgroundColor: 'var(--brand-container-light)', color: 'var(--brand-text)'}}>
              Competitive Edge
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>
              Our Unfair Advantage
            </h2>
            <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{color: 'var(--brand-text-secondary)'}}>
              Core strengths that create a formidable competitive moat and position us for market dominance.
            </p>
          </div>

          {/* Advantage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* First-Mover Advantage */}
            <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full mr-4 transition-transform hover:scale-110 flex-shrink-0" style={{backgroundColor: 'var(--brand-container-light)'}}>
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>
                      First-Mover Advantage
                    </h3>
                    <p className="text-sm" style={{color: 'var(--brand-text-secondary)'}}>
                      Pioneers in using AI engine for dynamic puzzle personalization in Web3 gaming, creating technological barriers that are difficult to replicate.
                    </p>
                  </div>
                </div>
                <div className="space-y-3 md:ml-9">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>Proprietary AI algorithms with 18 months R&D</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>Patent-pending dynamic difficulty system</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>Exclusive partnerships with major platforms</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Proven Community */}
            <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full mr-4 transition-transform hover:scale-110 flex-shrink-0" style={{backgroundColor: 'var(--brand-container-light)'}}>
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>
                      Proven Community
                    </h3>
                    <p className="text-sm" style={{color: 'var(--brand-text-secondary)'}}>
                      Rapidly growing community on Telegram and Discord demonstrates strong organic demand and network effects.
                    </p>
                  </div>
                </div>
                <div className="space-y-3 md:ml-9">
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>210K+ combined social media followers</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>85% community engagement rate</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>Viral word-of-mouth growth engine</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Expertise */}
            <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full mr-4 transition-transform hover:scale-110 flex-shrink-0" style={{backgroundColor: 'var(--brand-container-light)'}}>
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>
                      Team Expertise
                    </h3>
                    <p className="text-sm" style={{color: 'var(--brand-text-secondary)'}}>
                      Leadership team with deep experience in both blockchain and game design, bringing unique cross-disciplinary insights.
                    </p>
                  </div>
                </div>
                <div className="space-y-3 md:ml-9">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>Ex-Disney, EA, and Unity developers</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>Blockchain veterans from ConsenSys & Chainlink</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>AI/ML PhDs from top institutions</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Strategic Partnerships */}
            <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full mr-4 transition-transform hover:scale-110 flex-shrink-0" style={{backgroundColor: 'var(--brand-container-light)'}}>
                    <Handshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>
                      Strategic Partnerships
                    </h3>
                    <p className="text-sm" style={{color: 'var(--brand-text-secondary)'}}>
                      Collaborations with industry leaders provide robust technical foundation and market access.
                    </p>
                  </div>
                </div>
                <div className="space-y-3 md:ml-9">
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>NEAR Protocol Foundation technical partnership</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>Telegram gaming API early access</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-3 flex-shrink-0" />
                    <span className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>Major NFT marketplace integrations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Competitive Moat */}
          <div className="rounded-2xl p-8 backdrop-blur-sm" style={{backgroundColor: 'transparent',  border: `1px solid var(--brand-container-light)`}}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>Formidable Competitive Moat</h3>
              <p className="max-w-3xl mx-auto text-sm" style={{color: 'var(--brand-text-secondary)'}}>
                Our combined advantages create barriers that would require competitors 2-3 years and $10M+ to replicate
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{color: 'var(--brand-text)'}}>18+</div>
                <div className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>Months of R&D</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{color: 'var(--brand-text)'}}>3</div>
                <div className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>Patents Pending</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{color: 'var(--brand-text)'}}>$5M+</div>
                <div className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>Technical Investment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2" style={{color: 'var(--brand-text)'}}>24</div>
                <div className="text-xs" style={{color: 'var(--brand-text-secondary)'}}>Expert Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
