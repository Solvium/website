import { Rocket, Globe, Users, Target, Sparkles, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Vision() {
  return (
    <section className="py-20" style={{backgroundColor: 'var(--brand-background)'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 border-0" style={{backgroundColor: 'var(--brand-container-light)', color: 'var(--brand-text)'}}>
              Our Vision
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>
              A Global Gaming Revolution
            </h2>
            <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{color: 'var(--brand-text-secondary)'}}>
              Our five-year vision is to become the dominant Web3 puzzle platform globally, empowering millions with fun, accessible, and rewarding blockchain experiences.
            </p>
          </div>

          {/* Vision Statement */}
          <div className="rounded-3xl p-12 mb-16 backdrop-blur-sm" style={{backgroundColor: 'transparent', border: '1px solid var(--brand-container-light)'}}>
            <div className="text-center">
              <Rocket className="w-12 h-12 text-[#ffffff] mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-6" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>
                Solvium Is Not Just A Game
              </h3>
              <p className="text-sm leading-relaxed max-w-4xl mx-auto mb-8" style={{color: 'var(--brand-text-secondary)'}}>
                It's a movement to revolutionize digital ownership and economic opportunity. We're building the bridge that brings millions of mainstream users into the blockchain ecosystem through the universal language of play.
              </p>
              <div className="flex flex-col text-sm sm:flex-row gap-4 justify-center">
                <div className="inline-flex items-center px-6 py-3 rounded-full backdrop-blur-sm" style={{backgroundColor: 'var(--brand-container)',  border: '1px solid var(--brand-container-light)'}}>
                  <Globe className="w-5 h-5 mr-2 text-white" />
                  <span style={{color: 'var(--brand-text)', fontWeight: '500'}}>Global Reach</span>
                </div>
                <div className="inline-flex items-center px-6 py-3 rounded-full backdrop-blur-sm" style={{backgroundColor: 'var(--brand-container)',  border: '1px solid var(--brand-container-light)'}}>
                  <Users className="w-5 h-5 mr-2 text-white" />
                  <span style={{color: 'var(--brand-text)', fontWeight: '500'}}>Mass Adoption</span>
                </div> 
                <div className="inline-flex items-center px-6 py-3 rounded-full backdrop-blur-sm" style={{backgroundColor: 'var(--brand-container)',  border: '1px solid var(--brand-container-light)'}}>
                  <Sparkles className="w-5 h-5 mr-2 text-white" />
                  <span style={{color: 'var(--brand-text)', fontWeight: '500'}}>Economic Empowerment</span>
                </div>
              </div>
            </div>
          </div>

          {/* 5-Year Roadmap */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>Five-Year Roadmap to Dominance</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {/* Year 1 */}
              <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-3" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>Year 1</div>
                  <h4 className="text-lg font-bold mb-3" style={{color: 'var(--brand-text)'}}>Foundation</h4>
                  <ul className="text-xs space-y-2 text-left" style={{color: 'var(--brand-text-secondary)'}}>
                    <li className="flex items-start">
                      <ArrowRight className="w-3 h-3 mr-2 mt-1 flex-shrink-0" />
                      <span>Platform launch</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-3 h-3 mr-2 mt-1 flex-shrink-0" />
                      <span>1M+ users</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-3 h-3 mr-2 mt-1 flex-shrink-0" />
                      <span>Core features complete</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Year 2 */}
              <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-3" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>Year 2</div>
                  <h4 className="text-lg font-bold mb-3" style={{color: 'var(--brand-text)'}}>Expansion</h4>
                  <ul className="text-xs space-y-2 text-left" style={{color: 'var(--brand-text-secondary)'}}>
                    <li className="flex items-start">
                      <ArrowRight className="w-3 h-3 mr-2 mt-1 flex-shrink-0" />
                      <span>Multi-chain deployment</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-3 h-3 mr-2 mt-1 flex-shrink-0" />
                      <span>5M+ users</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-3 h-3 mr-2 mt-1 flex-shrink-0" />
                      <span>Mobile app launch</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Year 3 */}
              <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-3" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>Year 3</div>
                  <h4 className="text-lg font-bold mb-3" style={{color: 'var(--brand-text)'}}>Scaling</h4>
                  <ul className="text-xs space-y-2 text-left" style={{color: 'var(--brand-text-secondary)'}}>
                    <li className="flex items-start">
                      <ArrowRight className="w-3 h-3 mr-2 mt-1 flex-shrink-0" />
                      <span>15M+ users</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-3 h-3 mr-2 mt-1 flex-shrink-0" />
                      <span>Global tournaments</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-3 h-3 mr-2 mt-1 flex-shrink-0" />
                      <span>Enterprise partnerships</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Year 4 */}
              <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-3" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>Year 4</div>
                  <h4 className="text-lg font-bold mb-3" style={{color: 'var(--brand-text)'}}>Dominance</h4>
                  <ul className="text-xs space-y-2 text-left" style={{color: 'var(--brand-text-secondary)'}}>
                    <li className="flex items-start">
                      <ArrowRight className="w-3 h-3 mr-2 mt-1 flex-shrink-0" />
                      <span>50M+ users</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-3 h-3 mr-2 mt-1 flex-shrink-0" />
                      <span>Platform expansion</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-3 h-3 mr-2 mt-1 flex-shrink-0" />
                      <span>DeFi integration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Year 5 */}
              <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-3" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace' }}>Year 5</div>
                  <h4 className="text-lg font-bold mb-3" style={{color: 'var(--brand-text)'}}>Ecosystem</h4>
                  <ul className="text-xs space-y-2 text-left" style={{color: 'var(--brand-text-secondary)'}}>
                    <li className="flex items-start">
                      <ArrowRight className="w-3 h-3 mr-2 mt-1 flex-shrink-0" />
                      <span>100M+ users</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-3 h-3 mr-2 mt-1 flex-shrink-0" />
                      <span>Web3 gaming standard</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-3 h-3 mr-2 mt-1 flex-shrink-0" />
                      <span>Public company</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: '1px solid var(--brand-container-light)'}}>
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full mb-6 mx-auto transition-transform hover:scale-110" style={{backgroundColor: 'var(--brand-container-light)'}}>
                  <Target className="w-6 h-6" />
                </div>
                <div className="text-4xl font-bold mb-2" style={{color: 'var(--brand-text)',  fontFamily: 'var(--font-pixelify), monospace'}}>100M+</div>
                <div className="text-lg font-medium mb-2" style={{color: 'var(--brand-text)'}}>Users Empowered</div>
                <p className="text-sm" style={{color: 'var(--brand-text-secondary)'}}>
                  Bringing millions into the blockchain ecosystem through gaming
                </p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: '1px solid var(--brand-container-light)'}}>
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full mb-6 mx-auto transition-transform hover:scale-110" style={{backgroundColor: 'var(--brand-container-light)'}}>
                  <Globe className="w-6 h-6" />
                </div>
                <div className="text-4xl font-bold mb-2" style={{color: 'var(--brand-text)',  fontFamily: 'var(--font-pixelify), monospace'}}>50+</div>
                <div className="text-lg font-medium mb-2" style={{color: 'var(--brand-text)'}}>Countries Reached</div>
                <p className="text-sm" style={{color: 'var(--brand-text-secondary)'}}>
                  Global platform with localized experiences and communities
                </p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: '1px solid var(--brand-container-light)'}}>
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full mb-6 mx-auto transition-transform hover:scale-110" style={{backgroundColor: 'var(--brand-container-light)'}}>
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-4xl font-bold mb-2" style={{color: 'var(--brand-text)',  fontFamily: 'var(--font-pixelify), monospace'}}>$1B+</div>
                <div className="text-lg font-medium mb-2" style={{color: 'var(--brand-text)'}}>Value Created</div>
                <p className="text-sm" style={{color: 'var(--brand-text-secondary)'}}>
                  Economic opportunity generated for players and creators
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="relative text-center">
            <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>Join The Movement</h3>
            <p className="mb-8 max-w-2xl mx-auto" style={{color: 'var(--brand-text-secondary)'}}>
              Be part of the revolution that's making Web3 accessible, fun, and rewarding for everyone.
            </p>
            <div className="inline-flex items-center px-8 py-4 rounded-lg backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'var(--brand-container-light)', border: '1px solid var(--brand-container-light)'}}>
              <Rocket className="w-5 h-5 mr-2 text-white" />
              <span className="text-lg font-bold" style={{color: 'var(--brand-text)'}}>Start Your Journey Today</span>
            </div>
            
            {/* Mascot positioned as overlay */}
            <div className="absolute top-0 right-0 hidden lg:block z-10 pointer-events-none">
              <img 
                src="/images/mascot.svg" 
                alt="Solvium Mascot" 
                className="w-64 h-64 object-contain transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
