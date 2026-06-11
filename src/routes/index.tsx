import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Wheat, Leaf, Package, Coffee, Cookie, Home, Phone, Mail, MessageCircle, MapPin } from "lucide-react";

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
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

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
            src="/images/hero-groceries.jpg"
            alt="Grocery products including rice, grains, spices, tea, and packaged food"
            className="h-full w-full object-cover"
            width={1280}
            height={640}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              SOHAN OÜ
            </h1>
            <p className="mt-3 max-w-xl text-base text-white/90 sm:text-lg">
              Grocery, food products and general retail activities in Estonia.
            </p>
            <button
              onClick={() => scrollTo("contact")}
              className="mt-6 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-white/90"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
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
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
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

      {/* Company Information */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Company Information
        </h2>
        <div className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
          <table className="w-full text-left text-sm">
            <tbody>
              {[
                { label: "Company name", value: "SOHAN OÜ" },
                { label: "Registry code", value: "16028578" },
                { label: "VAT number", value: "EE102400935" },
                { label: "Location", value: "Tallinn, Estonia" },
                { label: "Business activity", value: "Grocery, food products and general retail" },
                { label: "Email", value: "[ADD EMAIL]" },
                { label: "Phone", value: "[ADD PHONE NUMBER]" },
                { label: "WhatsApp", value: "[ADD WHATSAPP NUMBER]" },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border last:border-b-0">
                  <th className="w-1/3 px-6 py-4 font-medium text-muted-foreground sm:w-48">
                    {row.label}
                  </th>
                  <td className="px-6 py-4 text-card-foreground">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
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
                  <p className="mt-1 text-sm text-muted-foreground">[ADD EMAIL]</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <p className="mt-1 text-sm text-muted-foreground">[ADD PHONE NUMBER]</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">WhatsApp</p>
                  <p className="mt-1 text-sm text-muted-foreground">[ADD WHATSAPP NUMBER]</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Address</p>
                  <p className="mt-1 text-sm text-muted-foreground">[ADD ADDRESS]</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                    <svg className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-card-foreground">Message Sent</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Thank you for contacting SOHAN OÜ. We will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-1.5 block w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-1 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-card-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1.5 block w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-1 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-card-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-1.5 block w-full resize-none rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-1 focus:ring-ring"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 SOHAN OÜ. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
