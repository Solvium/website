import { Mail, Bell } from "lucide-react"

export function NewsletterSignup() {
  return (
    <section className="py-20" style={{backgroundColor: 'var(--brand-background)'}}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Newsletter signup */}
          <div className="rounded-3xl p-12 backdrop-blur-sm text-center" style={{backgroundColor: 'var(--brand-container)', opacity: 0.3, border: '1px solid var(--brand-container-light)'}}>
            <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto" style={{backgroundColor: 'var(--brand-container-light)', opacity: 0.5}}>
              <Bell className="w-8 h-8" style={{color: 'var(--brand-text)'}} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>
              Stay Updated
            </h2>
            
            <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed" style={{color: 'var(--brand-text-secondary)'}}>
              Get the latest updates on new features, tournaments, exclusive rewards, and be the first to know about major platform developments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{color: 'var(--brand-text-secondary)'}} />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 rounded-lg border text-base focus:outline-none focus:ring-2 transition-all"
                  style={{
                    backgroundColor: 'var(--brand-container)', 
                    border: '1px solid var(--brand-container-light)',
                    color: 'var(--brand-text)'
                  }}
                />
              </div>
              <button
                className="px-8 py-4 rounded-lg text-base font-bold transition-all hover:scale-105 whitespace-nowrap"
                style={{backgroundColor: 'var(--brand-accent)', color: 'var(--brand-text)'}}
              >
                Subscribe Now
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm" style={{color: 'var(--brand-text-secondary)'}}>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: 'var(--brand-accent)'}} />
                <span>Weekly game updates</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: 'var(--brand-accent)'}} />
                <span>Exclusive tournaments</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: 'var(--brand-accent)'}} />
                <span>No spam, unsubscribe anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
