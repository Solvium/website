import { Crown, Gift, Handshake, Coins, TrendingUp, PiggyBank } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function RevenueModel() {
  return (
    <section className="py-20" style={{backgroundColor: 'var(--brand-background)'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 border-0" style={{backgroundColor: 'var(--brand-container-light)', color: 'var(--brand-text)'}}>
              Business Model
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>
              Sustainable Revenue Streams
            </h2>
            <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{color: 'var(--brand-text-secondary)'}}>
              Our diversified business model ensures long-term sustainability and growth while providing value to all stakeholders.
            </p>
          </div>

          {/* Revenue Streams Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* NFT Royalties */}
            <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: '1px solid var(--brand-container-light)'}}>
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto transition-transform hover:scale-110" style={{backgroundColor: 'var(--brand-container-light)'}}>
                  <Crown className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>NFT Royalties</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{color: 'var(--brand-text-secondary)'}}>
                  Percentage royalty on all secondary NFT sales in our marketplace
                </p>
                <div className="text-2xl font-bold mb-1" style={{color: 'var(--brand-text)'}}>2.5%</div>
                <div className="text-xs" style={{color: 'var(--brand-text-muted)'}}>Commission Rate</div>
              </CardContent>
            </Card>

            {/* Premium Content */}
            <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: '1px solid var(--brand-container-light)'}}>
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto transition-transform hover:scale-110" style={{backgroundColor: 'var(--brand-container-light)'}}>
                  <Gift className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>Premium Content</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{color: 'var(--brand-text-secondary)'}}>
                  Subscriptions for exclusive puzzle tiers and special features
                </p>
                <div className="text-2xl font-bold mb-1" style={{color: 'var(--brand-text)'}}>$9.99</div>
                <div className="text-xs" style={{color: 'var(--brand-text-muted)'}}>Monthly Subscription</div>
              </CardContent>
            </Card>

            {/* Sponsored Tournaments */}
            <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: '1px solid var(--brand-container-light)'}}>
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto transition-transform hover:scale-110" style={{backgroundColor: 'var(--brand-container-light)'}}>
                  <Handshake className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>Brand Partnerships</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{color: 'var(--brand-text-secondary)'}}>
                  Sponsored tournaments and exclusive brand collaborations
                </p>
                <div className="text-2xl font-bold mb-1" style={{color: 'var(--brand-text)'}}>$50K+</div>
                <div className="text-xs" style={{color: 'var(--brand-text-muted)'}}>Per Tournament</div>
              </CardContent>
            </Card>

            {/* Token Deposits */}
            <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: '1px solid var(--brand-container-light)'}}>
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto transition-transform hover:scale-110" style={{backgroundColor: 'var(--brand-container-light)'}}>
                  <Coins className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>Token Deposits</h3>
                <p className="text-sm mb-4 leading-relaxed" style={{color: 'var(--brand-text-secondary)'}}>
                  Unique mechanic allowing players to multiply their rewards
                </p>
                <div className="text-2xl font-bold mb-1" style={{color: 'var(--brand-text)'}}>5%</div>
                <div className="text-xs" style={{color: 'var(--brand-text-muted)'}}>Platform Fee</div>
              </CardContent>
            </Card>
          </div>

          {/* Revenue Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Revenue Distribution */}
            <Card className="backdrop-blur-sm" style={{backgroundColor: 'transparent', border: '1px solid var(--brand-container-light)'}}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <PiggyBank className="w-6 h-6 mr-3 text-white" />
                  <h3 className="text-xl font-bold" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>Revenue Distribution</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span style={{color: 'var(--brand-text-secondary)'}}>NFT Royalties</span>
                    <div className="flex items-center">
                      <div className="w-24 rounded-full h-2 mr-3" style={{backgroundColor: 'var(--brand-container)'}}>
                        <div className="h-2 rounded-full" style={{width: '35%', backgroundColor: 'var(--brand-accent)'}}></div>
                      </div>
                      <span style={{color: 'var(--brand-text)', fontWeight: '500'}}>35%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span style={{color: 'var(--brand-text-secondary)'}}>Premium Subscriptions</span>
                    <div className="flex items-center">
                      <div className="w-24 rounded-full h-2 mr-3" style={{backgroundColor: 'var(--brand-container)'}}>
                        <div className="h-2 rounded-full" style={{width: '30%', backgroundColor: 'var(--brand-accent)'}}></div>
                      </div>
                      <span style={{color: 'var(--brand-text)', fontWeight: '500'}}>30%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span style={{color: 'var(--brand-text-secondary)'}}>Brand Partnerships</span>
                    <div className="flex items-center">
                      <div className="w-24 rounded-full h-2 mr-3" style={{backgroundColor: 'var(--brand-container)'}}>
                        <div className="h-2 rounded-full" style={{width: '25%', backgroundColor: 'var(--brand-accent)'}}></div>
                      </div>
                      <span style={{color: 'var(--brand-text)', fontWeight: '500'}}>25%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span style={{color: 'var(--brand-text-secondary)'}}>Token Platform Fees</span>
                    <div className="flex items-center">
                      <div className="w-24 rounded-full h-2 mr-3" style={{backgroundColor: 'var(--brand-container)'}}>
                        <div className="h-2 rounded-full" style={{width: '10%', backgroundColor: 'var(--brand-accent)'}}></div>
                      </div>
                      <span style={{color: 'var(--brand-text)', fontWeight: '500'}}>10%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Growth Projections */}
            <Card className="backdrop-blur-sm" style={{backgroundColor: 'transparent', border: '1px solid var(--brand-container-light)'}}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>Growth Projections</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span style={{color: 'var(--brand-text-secondary)'}}>Current Monthly Revenue</span>
                    <span style={{color: 'var(--brand-text)', fontWeight: '500'}}>$125K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span style={{color: 'var(--brand-text-secondary)'}}>6-Month Projection</span>
                    <span style={{color: 'var(--brand-text)', fontWeight: '500'}}>$350K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span style={{color: 'var(--brand-text-secondary)'}}>12-Month Target</span>
                    <span style={{color: 'var(--brand-text)', fontWeight: '500'}}>$750K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span style={{color: 'var(--brand-text-secondary)'}}>Annual Run Rate (Year 2)</span>
                    <span style={{color: 'var(--brand-text)', fontWeight: '500'}}>$15M+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Value Proposition */}
          <div className="rounded-2xl p-8 backdrop-blur-sm" style={{backgroundColor: 'transparent',  border: '1px solid var(--brand-container-light)'}}>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>Player-First Economics</h3>
              <p className="max-w-3xl mx-auto leading-relaxed mb-6" style={{color: 'var(--brand-text-secondary)'}}>
                Our revenue model aligns platform success with player value. We earn when players succeed, 
                creating a sustainable ecosystem that rewards skill, engagement, and community participation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center justify-center px-4 py-2 rounded-lg backdrop-blur-sm" style={{backgroundColor: 'var(--brand-container-light)', border: '1px solid var(--brand-container-light)'}}>
                  <TrendingUp className="w-4 h-4 mr-2 text-[var(--brand-text)]" />
                  <span style={{color: 'var(--brand-text)', fontSize: '14px', fontWeight: '500'}}>280% Revenue Growth YoY</span>
                </div>
                <div className="flex items-center justify-center px-4 py-2 rounded-lg backdrop-blur-sm" style={{backgroundColor: 'var(--brand-container-light)', border: '1px solid var(--brand-container-light)'}}>
                  <Coins className="w-4 h-4 mr-2 text-[var(--brand-text)]" />
                  <span style={{color: 'var(--brand-text)', fontSize: '14px', fontWeight: '500'}}>$50M+ Asset Value Locked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
