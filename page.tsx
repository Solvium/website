"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Users, Trophy, Zap, Youtube, MessageCircle, Send, Facebook } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

function MatrixRain() {
  const [chars, setChars] = useState<
    Array<{ id: number; char: string; left: number; duration: number; delay: number }>
  >([])

  useEffect(() => {
    const puzzleChars = "01□■◆◇▲△▼▽●○◐◑⬢⬡⬟⬠⚬⚭⚮⚯"
    const newChars = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      char: puzzleChars[Math.floor(Math.random() * puzzleChars.length)],
      left: Math.random() * 100,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 8,
    }))
    setChars(newChars)
  }, [])

  return (
    <div className="matrix-rain">
      {chars.map((char) => (
        <div
          key={char.id}
          className="matrix-char"
          style={{
            left: `${char.left}%`,
            animationDuration: `${char.duration}s`,
            animationDelay: `${char.delay}s`,
          }}
        >
          {char.char}
        </div>
      ))}
    </div>
  )
}

export default function SolviumLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      <MatrixRain />

      <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="fixed inset-0 puzzle-pattern opacity-10 pointer-events-none" />

      <section className="relative min-h-screen flex items-center justify-center px-4 py-8 z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-primary/20 text-accent border-accent/30 matrix-glow">
                  AI-Powered Web3 Gaming
                </Badge>

                <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                  <Image
                    src="/solvium-logo-new.png"
                    alt="Solvium Logo"
                    width={100}
                    height={100}
                    className="animate-float"
                  />
                  <h1 className="text-6xl lg:text-8xl font-serif font-black text-foreground tracking-tight digital-text">
                    SOLVIUM
                  </h1>
                </div>

                <h2 className="text-2xl lg:text-4xl font-serif font-bold text-accent leading-tight matrix-glow">
                  Your Mind is the Key.
                  <br />
                  The Puzzle is the Lock.
                </h2>

                <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Solvium blends logic, data, and creativity into a single challenge. Play puzzles, earn crypto, and own
                  your skill in the ultimate AI-powered Web3 puzzle platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="https://t.me/Solvium_bot" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="play-button-enhanced text-white font-bold text-3xl rounded-2xl border-3 border-primary hover:border-accent transition-all duration-300 group min-w-[280px]"
                  >
                    <Play className="mr-4 h-10 w-10 group-hover:scale-125 transition-transform" />
                    PLAY NOW
                  </Button>
                </a>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg bg-transparent matrix-glow"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Join Community
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl animate-pulse matrix-glow" />
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-64 h-64 relative animate-cube-rotate">
                    <div className="absolute inset-0 transform-gpu preserve-3d">
                      <div className="absolute w-full h-full bg-primary/80 border-2 border-accent transform translate-z-32 matrix-glow" />
                      <div className="absolute w-full h-full bg-primary/60 border-2 border-accent transform rotate-y-90 translate-z-32 matrix-glow" />
                      <div className="absolute w-full h-full bg-primary/40 border-2 border-accent transform rotate-y-180 translate-z-32 matrix-glow" />
                      <div className="absolute w-full h-full bg-primary/60 border-2 border-accent transform rotate-y-270 translate-z-32 matrix-glow" />
                      <div className="absolute w-full h-full bg-primary/80 border-2 border-accent transform rotate-x-90 translate-z-32 matrix-glow" />
                      <div className="absolute w-full h-full bg-primary/40 border-2 border-accent transform rotate-x-270 translate-z-32 matrix-glow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif font-bold mb-4 matrix-glow">Solve the Impossible</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of puzzle gaming with AI-driven challenges, blockchain rewards, and true digital
              ownership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-accent/50 transition-all duration-300 group">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform matrix-glow">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-serif font-bold">Data-Driven Challenges</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Our AI Puzzle Engine dynamically adjusts difficulty based on your performance, ensuring every
                  challenge is perfectly calibrated to your skill level.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-accent/50 transition-all duration-300 group">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform matrix-glow">
                  <Trophy className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-serif font-bold">Infinite Puzzle Variations</h4>
                <p className="text-muted-foreground leading-relaxed">
                  From Jigsaw to Wordle-style challenges, experience endless variety with blockchain-verified
                  achievements and NFT rewards.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-accent/50 transition-all duration-300 group">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform matrix-glow">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-serif font-bold">Compete Globally</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Join a thriving community of puzzle solvers, participate in tournaments, and earn $SOV tokens while
                  showcasing your skills.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-serif font-bold mb-4 matrix-glow">Join the Solver Community</h3>
          <p className="text-xl text-muted-foreground mb-12">
            Connect with fellow puzzle enthusiasts, share your solutions, and stay updated on the latest challenges.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.youtube.com/@solvium_puzzle"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-16 h-16 bg-red-600/20 hover:bg-red-600/30 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-red-600/30 matrix-glow">
                <Youtube className="h-8 w-8 text-red-500" />
              </div>
            </a>

            <a href="https://x.com/Solvium_game" target="_blank" rel="noopener noreferrer" className="group">
              <div className="w-16 h-16 bg-slate-600/20 hover:bg-slate-600/30 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-slate-600/30 matrix-glow">
                <svg className="h-8 w-8 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
            </a>

            <a href="https://t.me/solvium_puzzle" target="_blank" rel="noopener noreferrer" className="group">
              <div className="w-16 h-16 bg-blue-600/20 hover:bg-blue-600/30 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-blue-600/30 matrix-glow">
                <Send className="h-8 w-8 text-blue-400" />
              </div>
            </a>

            <a href="https://t.me/solviumupdate" target="_blank" rel="noopener noreferrer" className="group">
              <div className="w-16 h-16 bg-cyan-600/20 hover:bg-cyan-600/30 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-cyan-600/30 matrix-glow">
                <MessageCircle className="h-8 w-8 text-cyan-400" />
              </div>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61566560151625&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-16 h-16 bg-blue-700/20 hover:bg-blue-700/30 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-blue-700/30 matrix-glow">
                <Facebook className="h-8 w-8 text-blue-500" />
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border/50 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <Image src="/solvium-logo-new.png" alt="Solvium Logo" width={40} height={40} />
              <span className="text-2xl font-serif font-bold digital-text">SOLVIUM</span>
            </div>

            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-[#00ff41] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#00ff41] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#00ff41] transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Solvium. All rights reserved. Built on NEAR Protocol.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
