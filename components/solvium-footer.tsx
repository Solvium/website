import { 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Instagram, 
  Facebook,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Gamepad2,
  Shield,
  FileText,
  HelpCircle,
  Users,
  Zap
} from "lucide-react"

export function SolviumFooter() {
  const currentYear = new Date().getFullYear()

  const footerSections = {
    product: {
      title: "Product",
      links: [
        { name: "Play Now", href: "/play", icon: Gamepad2 },
        { name: "How It Works", href: "/how-it-works", icon: HelpCircle },
        { name: "Leaderboard", href: "/leaderboard", icon: Users },
        { name: "Rewards", href: "/rewards", icon: Zap },
        { name: "NFT Marketplace", href: "/marketplace", icon: ExternalLink },
      ]
    },
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Press Kit", href: "/press" },
        { name: "Blog", href: "/blog" },
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs", icon: FileText },
        { name: "API Reference", href: "/api" },
        { name: "Community", href: "/community" },
        { name: "Support Center", href: "/support" },
        { name: "Status", href: "/status" },
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Security", href: "/security", icon: Shield },
        { name: "Compliance", href: "/compliance" },
      ]
    }
  }

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/solvium", icon: Twitter },
    { name: "Discord", href: "https://discord.gg/solvium", icon: Users },
    { name: "Telegram", href: "https://t.me/solvium", icon: Mail },
    { name: "GitHub", href: "https://github.com/solvium", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/company/solvium", icon: Linkedin },
    { name: "YouTube", href: "https://youtube.com/@solvium", icon: Youtube },
  ]

  return (
    <footer className="relative" style={{backgroundColor: 'var(--brand-background)'}}>
      {/* Gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{background: 'linear-gradient(90deg, transparent, var(--brand-container-light), transparent)'}} />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>
                  Solvium
                </h3>
                <p className="text-base leading-relaxed mb-6" style={{color: 'var(--brand-text-secondary)'}}>
                  The AI-powered Web3 puzzle platform bridging fun and finance. Play intelligent puzzles, earn crypto, and truly own your digital assets.
                </p>
              </div>
              
              {/* Contact info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3" style={{color: 'var(--brand-accent)'}} />
                  <a 
                    href="mailto:hello@solvium.com" 
                    className="text-sm hover:underline transition-colors"
                    style={{color: 'var(--brand-text-secondary)'}}
                  >
                    hello@solvium.com
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3" style={{color: 'var(--brand-accent)'}} />
                  <span className="text-sm" style={{color: 'var(--brand-text-secondary)'}}>
                    Global • Decentralized
                  </span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg backdrop-blur-sm transition-all hover:scale-110"
                    style={{backgroundColor: 'var(--brand-container)', border: '1px solid var(--brand-container-light)'}}
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" style={{color: 'var(--brand-text)'}} />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer sections */}
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key}>
                <h4 className="text-lg font-bold mb-4" style={{color: 'var(--brand-text)', fontFamily: 'var(--font-pixelify), monospace'}}>
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="flex items-center text-sm hover:underline transition-colors group"
                        style={{color: 'var(--brand-text-secondary)'}}
                      >
                        {link.icon && (
                          <link.icon className="w-3 h-3 mr-2 opacity-60 group-hover:opacity-100 transition-opacity" />
                        )}
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t" style={{borderColor: 'var(--brand-container-light)'}}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm" style={{color: 'var(--brand-text-secondary)'}}>
                <span>© {currentYear} Solvium. All rights reserved.</span>
                <div className="flex items-center gap-4">
                  <a href="/privacy" className="hover:underline transition-colors">Privacy</a>
                  <span>•</span>
                  <a href="/terms" className="hover:underline transition-colors">Terms</a>
                  <span>•</span>
                  <a href="/cookies" className="hover:underline transition-colors">Cookies</a>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-xs" style={{color: 'var(--brand-text-muted)'}}>
                <Shield className="w-3 h-3" />
                <span>Secured by blockchain technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
