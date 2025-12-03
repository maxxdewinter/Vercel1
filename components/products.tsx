import Image from "next/image"

interface Product {
  id: string
  title: string
  url: string
  image: string
}

export function Products() {
  const products: Product[] = [
    {
      id: "1",
      title: "Gillette King C. Safety Razor",
      url: "https://amzn.to/3Ktx6sq",
      image: "/images/gillette-razor.jpg",
    },
    {
      id: "2",
      title: "Bronson Vitamin D3 + K2, 5000IU + 90mcg",
      url: "https://amzn.to/3Ktx6sq",
      image: "/images/bronson-vitamin.jpg",
    },
    {
      id: "3",
      title: "MUSICOZY Bluetooth Sleep Headband",
      url: "https://amzn.to/3Ktx6sq",
      image: "/images/musicozy-headband.jpg",
    },
  ]

  return (
    <section id="products" className="px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="w-16 h-px bg-foreground mx-auto mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-wide">Products I Use and Recommend</h2>
          <div className="w-16 h-px bg-foreground mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border bg-white hover:bg-secondary transition-colors"
            >
              <div className="h-48 relative overflow-hidden bg-white">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="px-3 py-3 border-t border-border">
                <p className="font-serif text-xs md:text-sm text-center tracking-wide leading-tight">{product.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
