export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl mx-auto w-full">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="font-serif text-sm tracking-widest uppercase text-muted-foreground mb-8">Contact</h2>
            <div className="w-16 h-px bg-border mx-auto" />
          </div>

          <div className="border border-border bg-card">
            <div className="p-12 space-y-8">
              <div className="space-y-2">
                <p className="font-serif text-xs tracking-widest uppercase text-muted-foreground">Email</p>
                <a
                  href="mailto:contact@maxdewinter.com"
                  className="font-sans text-xl md:text-2xl hover:opacity-70 transition-opacity block"
                >
                  contact@maxdewinter.com
                </a>
              </div>

              <div className="w-full h-px bg-border" />

              <div className="space-y-2">
                <p className="font-serif text-xs tracking-widest uppercase text-muted-foreground">Locations</p>
                <div className="font-sans text-xl md:text-2xl space-y-1">
                  <p>Auckland, New Zealand</p>
                  <p>Sydney, Australia</p>
                  <p>California, USA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-12">
            <p className="font-serif text-xs tracking-widest uppercase text-muted-foreground">
              © 2025 Max DeWinter. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
