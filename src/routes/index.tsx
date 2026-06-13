import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Wheat, Leaf, Package, Coffee, Cookie, Home, Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import riceHero from "@/assets/products-hero.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SOHAN OÜ | Grocery and Food Products Estonia" },
      { name: "description", content: "SOHAN OÜ is an Estonia-registered company based in Tallinn, active in grocery, food products, packaged goods, beverages, snacks, and general retail-related activities." },
      { property: "og:title", content: "SOHAN OÜ | Grocery and Food Products Estonia" },
      { property: "og:description", content: "SOHAN OÜ is an Estonia-registered company based in Tallinn, active in grocery, food products, packaged goods, beverages, snacks, and general retail-related activities." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "SOHAN OÜ",
        description: "Grocery, food products and general retail activities in Estonia.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tallinn",
          addressCountry: "EE",
        },
      }),
    }],
  }),
  component: Index,
});

const categories = [
  {
    title: "Rice & Grains",
    description: "Rice, grains, flour, beans, lentils, and other dry food products.",
    icon: Wheat,
  },
  {
    title: "Spices & Herbs",
    description: "Ground spices, whole spices, dried herbs, and seasoning blends.",
    icon: Leaf,
  },
  {
    title: "Packaged Food",
    description: "Canned goods, pasta, sauces, soups, and ready-to-eat meals.",
    icon: Package,
  },
  {
    title: "Beverages",
    description: "Tea, coffee, juices, soft drinks, and bottled water.",
    icon: Coffee,
  },
  {
    title: "Snacks & Sweets",
    description: "Biscuits, chips, nuts, chocolates, and confectionery.",
    icon: Cookie,
  },
  {
    title: "Household Essentials",
    description: "Cleaning products, personal care, and everyday household items.",
    icon: Home,
  },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button onClick={() => scrollTo("hero")} className="text-xl font-bold tracking-tight text-foreground">
            Sohan
          </button>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <button onClick={() => scrollTo("about")} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              About
            </button>
            <button onClick={() => scrollTo("products")} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Products
            </button>
            <button onClick={() => scrollTo("contact")} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="flex flex-col gap-1.5 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="flex flex-col gap-4 border-t border-border px-6 py-4 md:hidden">
            <button onClick={() => scrollTo("about")} className="text-left text-sm font-medium text-muted-foreground hover:text-foreground">
              About
            </button>
            <button onClick={() => scrollTo("products")} className="text-left text-sm font-medium text-muted-foreground hover:text-foreground">
              Products
            </button>
            <button onClick={() => scrollTo("contact")} className="text-left text-sm font-medium text-muted-foreground hover:text-foreground">
              Contact
            </button>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden">
        <div className="relative h-[320px] w-full sm:h-[400px] md:h-[480px]">
          <img
            src={riceHero.url}
            alt="Sohan product range — Ayran beverages, premium dates, and rose tea"
            className="h-full w-full object-cover"
            width={1280}
            height={640}
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              SOHAN OÜ
            </h1>
            <p className="mt-3 max-w-xl text-base text-white/90 sm:text-lg">
              Grocery, food products and general retail activities in Estonia.
            </p>
            <button
              onClick={() => scrollTo("contact")}
              className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
          About Sohan
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-muted-foreground">
          <p>
            SOHAN OÜ is an Estonia-registered private limited company. The company is active in grocery, food products, packaged goods, and general retail-related business activities.
          </p>
          <p>
            Sohan provides access to everyday food products, dry goods, packaged groceries, beverages, snacks, household essentials, and selected international food items.
          </p>
          <p>
            The company is based in Tallinn, Estonia.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Product Categories
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {cat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            Contact
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            For business, supplier, or customer inquiries, please contact SOHAN OÜ.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="mt-1 text-sm text-muted-foreground">info@sohan.ee</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <p className="mt-1 text-sm text-muted-foreground">+37256089607</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">WhatsApp</p>
                  <p className="mt-1 text-sm text-muted-foreground">+37256089607</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Address</p>
                  <p className="mt-1 text-sm text-muted-foreground">Tõnismägi 11a, 10119 Tallinn, Estonia</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="overflow-hidden rounded-lg border border-border bg-card">
              <iframe
                title="SOHAN OÜ location on Google Maps"
                src="https://www.google.com/maps?q=T%C3%B5nism%C3%A4gi+11a,+10119+Tallinn,+Estonia&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "360px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Company name</p>
              <p className="mt-1 text-sm text-foreground">SOHAN OÜ</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">VAT number</p>
              <p className="mt-1 text-sm text-foreground">EE102400935</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Registry code</p>
              <p className="mt-1 text-sm text-foreground">16028578</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Address</p>
              <p className="mt-1 text-sm text-foreground">Tõnismägi 11a, 10119 Tallinn, Estonia</p>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-6 text-center">
            <p className="text-sm text-muted-foreground">&copy; 2026 SOHAN OÜ. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
