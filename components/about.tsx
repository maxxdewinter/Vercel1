export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="font-serif text-sm tracking-widest uppercase text-muted-foreground mb-8">About</h2>
            <div className="w-16 h-px bg-border mx-auto" />
          </div>

          <div className="space-y-6 text-center">
            <p className="font-sans text-2xl md:text-3xl font-light leading-relaxed text-balance">
              A brief introduction about Max DeWinter. This section can be customized to include professional
              background, expertise, and personal philosophy.
            </p>

            <p className="font-serif text-base md:text-lg leading-relaxed text-muted-foreground text-balance">
              Additional details about experience, achievements, or areas of focus can be added here to provide context
              and depth to the personal brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
