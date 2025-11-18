import { Users, TrendingUp, DollarSign, Activity, BarChart3, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function KeyMetrics() {
  return (
    <section className="py-20" style={{backgroundColor: 'var(--brand-background)'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 border-0" style={{backgroundColor: 'var(--brand-container-light)', color: 'var(--brand-text)'}}>
              Success Metrics
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>
              Measuring What Matters
            </h2>
            <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{color: 'var(--brand-text-secondary)'}}>
              We track both engagement and ecosystem health to ensure sustainable growth and player satisfaction.
            </p>
          </div>

          {/* Primary Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Daily Active Users */}
            <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto" style={{backgroundColor: 'var(--brand-container-light)'}}>
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>50K+</h3>
                <div className="text-sm font-medium mb-1" style={{color: 'var(--brand-text)'}}>Daily Active Users</div>
                <div className="text-xs" style={{color: 'var(--brand-text-muted)'}}>Real-time player engagement</div>
              </CardContent>
            </Card>

            {/* Monthly Active Users */}
            <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto" style={{backgroundColor: 'var(--brand-container-light)'}}>
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>500K+</h3>
                <div className="text-sm font-medium mb-1" style={{color: 'var(--brand-text)'}}>Monthly Active Users</div>
                <div className="text-xs" style={{color: 'var(--brand-text-muted)'}}>Growing community base</div>
              </CardContent>
            </Card>

            {/* Transaction Volume */}
            <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto" style={{backgroundColor: 'var(--brand-container-light)'}}>
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>$2.5M+</h3>
                <div className="text-sm font-medium mb-1" style={{color: 'var(--brand-text)'}}>Monthly Transaction Volume</div>
                <div className="text-xs" style={{color: 'var(--brand-text-muted)'}}>Healthy in-game economy</div>
              </CardContent>
            </Card>

            {/* Token Utility */}
            <Card className="backdrop-blur-sm transition-all hover:scale-105" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full mb-4 mx-auto" style={{backgroundColor: 'var(--brand-container-light)'}}>
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>85%</h3>
                <div className="text-sm font-medium mb-1" style={{color: 'var(--brand-text)'}}>Token Circulation Rate</div>
                <div className="text-xs" style={{color: 'var(--brand-text-muted)'}}>Strong utility adoption</div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Engagement Metrics */}
            <Card className="backdrop-blur-sm" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <BarChart3 className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>Engagement Metrics</h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span style={{color: 'var(--brand-text-secondary)'}}>Average Session Duration</span>
                    <span style={{color: 'var(--brand-text)', fontWeight: '500'}}>24 minutes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span style={{color: 'var(--brand-text-secondary)'}}>Daily Puzzle Completion Rate</span>
                    <span className="text-white font-medium">1.2M+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span style={{color: 'var(--brand-text-secondary)'}}>Player Retention (Day 7)</span>
                    <span style={{color: 'var(--brand-text)', fontWeight: '500'}}>78%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span style={{color: 'var(--brand-text-secondary)'}}>Player Retention (Day 30)</span>
                    <span style={{color: 'var(--brand-text)', fontWeight: '500'}}>42%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ecosystem Health */}
            <Card className="backdrop-blur-sm" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>Ecosystem Health</h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span style={{color: 'var(--brand-text-secondary)'}}>Telegram Community</span>
                    <span style={{color: 'var(--brand-text)', fontWeight: '500'}}>125K+ members</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span style={{color: 'var(--brand-text-secondary)'}}>Discord Community</span>
                    <span style={{color: 'var(--brand-text)', fontWeight: '500'}}>85K+ members</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span style={{color: 'var(--brand-text-secondary)'}}>NFT Marketplace Volume</span>
                    <span style={{color: 'var(--brand-text)', fontWeight: '500'}}>$450K+/month</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span style={{color: 'var(--brand-text-secondary)'}}>Active Tournament Players</span>
                    <span style={{color: 'var(--brand-text)', fontWeight: '500'}}>15K+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Growth Indicator */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full backdrop-blur-sm" style={{backgroundColor: 'transparent', border: `1px solid var(--brand-container-light)`}}>
              <TrendingUp className="w-5 h-5 mr-3 text-[var(--brand-container-light)]" />
              <span style={{color: 'var(--brand-text)'}}>
                Strong month-over-month growth across all key metrics
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
