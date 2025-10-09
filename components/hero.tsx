"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Link {
  id: string
  title: string
  url: string
}

export function Hero() {
  const [links, setLinks] = useState<Link[]>([
    { id: "1", title: "LinkedIn", url: "https://linkedin.com" },
    { id: "2", title: "Twitter", url: "https://twitter.com" },
    { id: "3", title: "GitHub", url: "https://github.com" },
  ])
  const [isAdding, setIsAdding] = useState(false)
  const [newTitle, setNewTitle] = useState("")
  const [newUrl, setNewUrl] = useState("")

  const addLink = () => {
    if (newTitle && newUrl) {
      setLinks([
        ...links,
        {
          id: Date.now().toString(),
          title: newTitle,
          url: newUrl,
        },
      ])
      setNewTitle("")
      setNewUrl("")
      setIsAdding(false)
    }
  }

  const removeLink = (id: string) => {
    setLinks(links.filter((link) => link.id !== id))
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-12">
          {/* Decorative line */}
          <div className="w-24 h-px bg-foreground mx-auto" />

          <h1 className="font-sans text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-balance">
            Max DeWinter
          </h1>

          <div className="w-24 h-px bg-foreground mx-auto" />

          <div className="max-w-md mx-auto space-y-3 pt-4">
            {links.map((link) => (
              <div
                key={link.id}
                className="group relative border border-border bg-card hover:bg-secondary transition-colors"
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="block px-6 py-4">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-base tracking-wide">{link.title}</span>
                    <span className="font-serif text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      →
                    </span>
                  </div>
                </a>
                <button
                  onClick={() => removeLink(link.id)}
                  className="absolute top-3 right-3 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                  aria-label="Remove link"
                >
                  <X size={14} />
                </button>
              </div>
            ))}

            {isAdding ? (
              <div className="border border-border bg-card p-4 space-y-3">
                <Input
                  type="text"
                  placeholder="Link Title"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="font-serif bg-background border-border text-sm"
                />
                <Input
                  type="url"
                  placeholder="https://example.com"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  className="font-serif bg-background border-border text-sm"
                />
                <div className="flex gap-2">
                  <Button
                    onClick={addLink}
                    className="flex-1 font-serif tracking-widest uppercase text-xs bg-primary text-primary-foreground hover:bg-accent h-9"
                  >
                    Add
                  </Button>
                  <Button
                    onClick={() => {
                      setIsAdding(false)
                      setNewTitle("")
                      setNewUrl("")
                    }}
                    variant="outline"
                    className="flex-1 font-serif tracking-widest uppercase text-xs h-9"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setIsAdding(true)}
                className="w-full border border-dashed border-border hover:border-foreground hover:bg-secondary transition-all py-5 flex items-center justify-center gap-2 group"
              >
                <Plus size={16} className="group-hover:rotate-90 transition-transform" />
                <span className="font-serif text-xs tracking-widest uppercase">Add Link</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
