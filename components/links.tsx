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

export function Links() {
  const [links, setLinks] = useState<Link[]>([
    { id: "1", title: "LinkedIn", url: "https://www.linkedin.com/in/max-dewinter/" },
    { id: "2", title: "Instagram", url: "https://www.instagram.com/maxdewinter/" },
    { id: "3", title: "Email", url: "mailto:contact@maxdewinter.com" },
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
    <section id="links" className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl mx-auto w-full">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="font-serif text-sm tracking-widest uppercase text-muted-foreground mb-8">Links</h2>
            <div className="w-16 h-px bg-border mx-auto" />
          </div>

          <div className="space-y-4">
            {links.map((link) => (
              <div
                key={link.id}
                className="group relative border border-border bg-card hover:bg-secondary transition-colors"
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="block px-8 py-6">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg tracking-wide">{link.title}</span>
                    <span className="font-serif text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      →
                    </span>
                  </div>
                </a>
                <button
                  onClick={() => removeLink(link.id)}
                  className="absolute top-4 right-4 p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                  aria-label="Remove link"
                >
                  <X size={16} />
                </button>
              </div>
            ))}

            {isAdding ? (
              <div className="border border-border bg-card p-6 space-y-4">
                <Input
                  type="text"
                  placeholder="Link Title"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="font-serif bg-background border-border"
                />
                <Input
                  type="url"
                  placeholder="https://example.com"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  className="font-serif bg-background border-border"
                />
                <div className="flex gap-3">
                  <Button
                    onClick={addLink}
                    className="flex-1 font-serif tracking-widest uppercase text-xs bg-primary text-primary-foreground hover:bg-accent"
                  >
                    Add Link
                  </Button>
                  <Button
                    onClick={() => {
                      setIsAdding(false)
                      setNewTitle("")
                      setNewUrl("")
                    }}
                    variant="outline"
                    className="flex-1 font-serif tracking-widest uppercase text-xs"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setIsAdding(true)}
                className="w-full border border-dashed border-border hover:border-foreground hover:bg-secondary transition-all py-8 flex items-center justify-center gap-3 group"
              >
                <Plus size={20} className="group-hover:rotate-90 transition-transform" />
                <span className="font-serif text-sm tracking-widest uppercase">Add New Link</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
