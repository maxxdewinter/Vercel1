export function Hero() {
  const links = [
    { id: "1", title: "Instagram", url: "https://www.instagram.com/maxdewinter/" },
    { id: "2", title: "LinkedIn", url: "https://www.linkedin.com/in/max-dewinter" },
    { id: "3", title: "TikTok", url: "https://www.tiktok.com/@maxdewinter_" },
  ]

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
              <div key={link.id} className="border border-border bg-card hover:bg-secondary transition-colors">
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="block px-6 py-4">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-base tracking-wide">{link.title}</span>
                    <span className="font-serif text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      →
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
