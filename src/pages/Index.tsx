import { ArrowRight, Gauge, Globe, Clock, Ship } from "lucide-react";

const TargoLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="16,1 29,8.5 29,23.5 16,31 3,23.5 3,8.5" stroke="white" strokeWidth="1.2" fill="none" />
    <line x1="3" y1="8.5" x2="29" y2="23.5" stroke="white" strokeWidth="0.8" />
    <line x1="29" y1="8.5" x2="3" y2="23.5" stroke="white" strokeWidth="0.8" />
    <line x1="16" y1="1" x2="16" y2="31" stroke="white" strokeWidth="0.8" />
  </svg>
);

const Header = () => (
  <header className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-8 md:px-16 py-6">
    <a href="#" className="flex items-center gap-3">
      <TargoLogo />
      <span className="text-xl font-medium tracking-tighter uppercase text-foreground">TARGO</span>
    </a>
    <nav className="hidden md:flex items-center gap-8">
      {["Home", "About", "Contact Us"].map((link) => (
        <a key={link} href="#" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
          {link}
        </a>
      ))}
    </nav>
    <a href="#" className="clip-corner bg-primary text-sm font-medium px-6 py-2.5 text-primary-foreground hover:opacity-90 transition-opacity">
      Contact Us
    </a>
  </header>
);

const Hero = () => (
  <section className="relative h-screen overflow-hidden">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      src="https://go.screenpal.com/player/stream/cOeifenZ3wA"
    />

    {/* Info bar */}
    <div className="absolute top-24 w-full px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-foreground/10 pb-6">
        <p className="text-xs text-foreground/50">Worldwide Logistics</p>
        <p className="text-xs text-foreground/50">Premium freight solutions by Targo</p>
        <p className="text-xs text-foreground/50">Delivering excellence across continents with precision and care.</p>
      </div>
    </div>

    {/* Headline */}
    <div className="absolute bottom-20 w-full px-8 md:px-16">
      <div className="flex items-end gap-6">
        <span className="hidden md:block text-xs text-foreground/30 mb-2">001</span>
        <h1 className="text-[40px] md:text-[72px] font-medium tracking-tighter leading-[0.95] text-foreground whitespace-pre-line">
          {"Swift and Simple\nTransport."}
        </h1>
      </div>
    </div>

    {/* Bottom CTA bar */}
    <div className="absolute bottom-0 w-full border-t border-foreground/10 flex">
      <a href="#" className="group flex-1 flex items-center justify-between px-8 md:px-16 py-5 hover:bg-foreground/5 transition-colors border-r border-foreground/10">
        <span className="text-sm text-foreground/80">Get a Quote</span>
        <ArrowRight size={16} className="text-foreground/30 group-hover:text-primary transition-colors" />
      </a>
      <a href="#" className="group flex-1 flex items-center justify-between px-8 md:px-16 py-5 hover:bg-foreground/5 transition-colors">
        <span className="text-sm text-foreground/80">Track Shipment</span>
        <ArrowRight size={16} className="text-foreground/30 group-hover:text-primary transition-colors" />
      </a>
    </div>
  </section>
);

const About = () => (
  <section className="px-8 md:px-16 py-24 md:py-36">
    <div className="flex items-center gap-4 mb-16">
      <div className="w-10 h-px bg-foreground/30" />
      <span className="uppercase tracking-widest text-xs text-foreground/50">About Us</span>
    </div>
    <h2 className="text-[28px] md:text-[56px] font-medium tracking-tighter leading-[1.1] max-w-5xl">
      <span className="text-foreground">From express deliveries to full-scale freight operations, </span>
      <span className="text-foreground/40">Targo offers an exceptional network and trusted, personalised service.</span>
    </h2>
    <div className="mt-16 pt-8 border-t border-foreground/10">
      <p className="text-sm text-foreground/50 max-w-lg leading-relaxed">
        Our comprehensive logistics solutions include air freight, sea freight, road transport, warehousing, and customs brokerage — all tailored to your unique supply chain requirements.
      </p>
    </div>
  </section>
);

const Fleet = () => (
  <section className="px-8 md:px-16 py-24 md:py-36">
    {/* Label + buttons */}
    <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-20">
      <div className="flex items-center gap-4">
        <div className="w-10 h-px bg-primary" />
        <span className="uppercase tracking-widest text-xs text-primary">Our Fleet</span>
      </div>
      <div className="flex gap-3">
        <a href="#" className="rounded-full border border-primary px-5 py-2 text-xs text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
          Get a Quote
        </a>
        <a href="#" className="rounded-full border border-primary px-5 py-2 text-xs text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
          Our Services
        </a>
      </div>
    </div>

    {/* Centerpiece */}
    <div className="relative flex items-center justify-center py-20">
      <span className="absolute text-[100px] md:text-[200px] font-medium tracking-tighter text-foreground/[0.04] uppercase select-none">
        TARGO
      </span>
      <div className="border border-foreground/10 rounded-[50%] aspect-[2.2/1] w-full max-w-xl flex items-center justify-center">
        <Ship size={120} strokeWidth={1} className="text-foreground/20" />
      </div>
      <span className="absolute bottom-8 text-xs text-foreground/30 uppercase tracking-widest">Global Fleet</span>
      <span className="absolute left-0 hidden md:block text-xs text-foreground/20 uppercase tracking-widest [writing-mode:vertical-lr] rotate-180">
        Freight Class
      </span>
    </div>

    {/* Bottom info */}
    <div className="border-t border-foreground/10 pt-8 mt-8 grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-8 items-start">
      <div>
        <h3 className="text-lg font-medium text-foreground mb-2">Express Air Freight</h3>
        <p className="text-sm text-foreground/40 max-w-sm leading-relaxed">
          Time-critical shipments delivered globally with guaranteed schedules and real-time tracking across our premium carrier network.
        </p>
      </div>
      <div className="flex gap-8">
        {[
          { icon: Gauge, value: "150+", label: "Routes" },
          { icon: Globe, value: "80", label: "Countries" },
          { icon: Clock, value: "24/7", label: "Support" },
        ].map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon size={18} strokeWidth={1.5} className="text-foreground/30" />
            <div>
              <p className="text-sm font-medium text-foreground">{value}</p>
              <p className="text-xs text-foreground/40">{label}</p>
            </div>
          </div>
        ))}
      </div>
      <a href="#" className="rounded-full border border-foreground/20 px-5 py-2 text-xs text-foreground/50 hover:border-foreground/50 hover:text-foreground transition-colors">
        View Details
      </a>
    </div>
  </section>
);

const Index = () => (
  <div className="bg-background text-foreground min-h-screen">
    <Header />
    <Hero />
    <About />
    <Fleet />
  </div>
);

export default Index;
