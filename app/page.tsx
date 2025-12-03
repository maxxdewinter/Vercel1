import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Products } from "@/components/products"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Products />
      <Contact />
    </main>
  )
}
