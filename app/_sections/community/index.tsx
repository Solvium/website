import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Youtube, Twitter, Send, MessageCircle, Facebook, BookOpen } from "lucide-react"

export function Community() {
  const socialLinks = [
    {
      name: "YouTube",
      icon: <Youtube className="h-5 w-5" />,
      href: "#",
      color: "hover:text-red-500",
    },
    {
      name: "X (Twitter)",
      icon: <Twitter className="h-5 w-5" />,
      href: "#",
      color: "hover:text-blue-400",
    },
    {
      name: "Telegram Channel",
      icon: <Send className="h-5 w-5" />,
      href: "#",
      color: "hover:text-blue-500",
    },
    {
      name: "Telegram Announcements",
      icon: <MessageCircle className="h-5 w-5" />,
      href: "#",
      color: "hover:text-blue-500",
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      href: "#",
      color: "hover:text-blue-600",
    },
    {
      name: "GitBook",
      icon: <BookOpen className="h-5 w-5" />,
      href: "#",
      color: "hover:text-green-600",
    },
  ]

  return (
    <section className="py-24 w-full bg-muted/30">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <Card className="w-full">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</CardTitle>
            <p className="text-xl text-muted-foreground">
              Connect with us on social media to stay updated and join the conversation!
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className={`flex flex-col items-center gap-2 h-auto py-4 px-3 ${link.color} transition-colors`}
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                    <span className="text-xs font-medium text-center leading-tight">{link.name}</span>
                  </a>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
