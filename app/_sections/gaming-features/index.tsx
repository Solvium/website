import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Puzzle, Type, Brain } from "lucide-react"
import { Community } from "../community"

export function GamingFeatures() {
  const games = [
    {
      title: "Spin to Win",
      description:
        "Experience our AI-powered wheel spin feature that dynamically generates token reward opportunities.",
      icon: <Gamepad2 className="h-8 w-8" />,
      status: "available",
    },
    {
      title: "Jigsaw Puzzles",
      description:
        "Experience AI-enhanced jigsaw puzzles with smart difficulty adaptation and real-time solving assistance.",
      icon: <Puzzle className="h-8 w-8" />,
      status: "available",
    },
    {
      title: "Wordle",
      description: "Our AI-powered word puzzle game with intelligent hint system and personalized challenge levels.",
      icon: <Type className="h-8 w-8" />,
      status: "coming-soon",
    },
    {
      title: "Quiz Games",
      description: "AI-generated quizzes that adapt to your knowledge level and learning style.",
      icon: <Brain className="h-8 w-8" />,
      status: "coming-soon",
    },
  ]

  return (
    <section className="pt-6 pb-3 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Gaming Ecosystem</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Solvium leverages cutting-edge AI to create adaptive, intelligent gaming experiences that evolve with each
            player's unique skills and learning patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {game.icon}
                </div>
                <CardTitle className="text-xl mb-2">{game.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{game.description}</CardDescription>
              </CardHeader>

            </Card>
          ))}
        </div>
      </div>
      <Community />
    </section>

  )
}
