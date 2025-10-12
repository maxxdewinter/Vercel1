import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Contact />
    </main>
  )
}
