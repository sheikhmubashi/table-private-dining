'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const services = [
  { 
    title: 'Private Dining', 
    label: 'The signature experience', 
    copy: 'Restaurant-level cooking, served in the comfort and privacy of your own home.', 
    image: '/images/service-table.png',
    alt: 'Elegant private dining table setup by Chef Ivan Holmes'
  },
  { 
    title: 'Events & Celebrations', 
    label: 'Made for the occasion', 
    copy: 'Thoughtful menus and seamless service for the moments worth gathering around.', 
    image: '/images/guest-dinner.png',
    alt: 'Guests enjoying a private dinner celebration'
  },
  { 
    title: 'Bespoke Catering', 
    label: 'Designed around you', 
    copy: 'A considered culinary approach for intimate events, brand occasions and private gatherings.', 
    image: '/images/food-plating.png',
    alt: 'Chef Ivan Holmes plating a gourmet dish'
  },
  { 
    title: 'BBQ & Outdoor Dining', 
    label: 'Open-air occasions', 
    copy: 'Seasonal cooking, generous hospitality and a table worth lingering around.', 
    image: '/images/outdoor-dining.png',
    alt: 'Outdoor private dining experience in Cotswolds'
  },
]

const gallery = [
  { 
    src: '/images/food-plating.png', 
    alt: 'Chef Ivan Holmes delicately finishing a seasonal dish with precision',
    className: 'md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto' 
  },
  { 
    src: '/images/service-table.png', 
    alt: 'Elegant private dining table prepared for guests in Cotswolds',
    className: 'md:col-span-5 aspect-[4/3]' 
  },
  { 
    src: '/images/guest-dinner.png', 
    alt: 'Guests gathered around a private dinner table enjoying fine dining',
    className: 'md:col-span-5 aspect-[4/3]' 
  },
  { 
    src: '/images/outdoor-dining.png', 
    alt: 'Outdoor private dining experience at dusk in Cotswolds',
    className: 'md:col-span-5 md:col-start-3 aspect-[4/5] md:aspect-[5/6]' 
  },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{children}</p>
}

function ArrowLink({ children, href = '#' }: { children: React.ReactNode; href?: string }) {
  return (
    <a 
      href={href} 
      className="group inline-flex items-center gap-3 border-b border-foreground/30 pb-2 font-mono text-xs uppercase tracking-[0.16em] transition-colors hover:border-foreground"
    >
      {children}
      <span className="text-base leading-none transition-transform group-hover:translate-x-1">→</span>
    </a>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-10 lg:px-14">
        <a href="#top" className="brand-lockup" aria-label="Table Private Dining home - Chef Ivan Holmes Cotswolds">
          <span className={`brand-wordmark transition-colors duration-300 ${
            isScrolled ? 'text-foreground' : 'text-primary-foreground'
          }`}>
            TABLE
          </span>
          <span className={`brand-subline transition-colors duration-300 ${
            isScrolled ? 'text-foreground/80' : 'text-primary-foreground/80'
          }`}>
            IVAN HOLMES · COTSWOLDS
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {['Private Dining', 'Experiences', 'About', 'Gallery', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className={`nav-link-premium font-mono text-xs uppercase tracking-[0.16em] transition-colors duration-300 hover:text-accent ${
                isScrolled ? '!text-black' : 'text-primary-foreground/80'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <a 
            href="#contact" 
            className={`hidden lg:block px-6 py-2.5 font-mono text-xs uppercase tracking-[0.16em] transition-all duration-300 ${
              isScrolled 
                ? 'border border-foreground/30 text-foreground hover:border-foreground hover:bg-foreground hover:text-background' 
                : 'border border-primary-foreground/30 text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary'
            }`}
          >
            Enquire now
          </a>
          <button 
            type="button" 
            aria-label={open ? 'Close menu' : 'Open menu'} 
            aria-expanded={open} 
            onClick={() => setOpen(!open)} 
            className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 transition-colors lg:hidden ${
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            }`}
          >
            <span className={`h-px w-4 bg-current transition-all duration-300 ${
              open ? 'rotate-45 translate-y-1.5' : ''
            }`} />
            <span className={`h-px w-4 bg-current transition-all duration-300 ${
              open ? 'opacity-0' : ''
            }`} />
            <span className={`h-px w-4 bg-current transition-all duration-300 ${
              open ? '-rotate-45 -translate-y-1.5' : ''
            }`} />
          </button>
        </div>
      </div>
      {open && (
        <nav className={`border-t px-6 py-6 lg:hidden ${
          isScrolled 
            ? 'border-border/20 bg-background/95 backdrop-blur-md' 
            : 'border-primary-foreground/20 bg-primary'
        }`} aria-label="Mobile navigation">
          {['Private Dining', 'Experiences', 'About', 'Gallery', 'Contact'].map((item) => (
            <a 
              key={item} 
              onClick={() => setOpen(false)} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className={`block border-b py-4 font-mono text-xs uppercase tracking-[0.18em] transition-colors hover:text-accent ${
                isScrolled 
                  ? 'border-border/30 text-foreground' 
                  : 'border-primary-foreground/15 text-primary-foreground'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export function Hero() {
  return (
    <section id="top" className="hero-shell relative flex min-h-dvh items-end overflow-hidden bg-primary text-primary-foreground">
      <Image 
        src="/images/hero-dining.png" 
        alt="Candlelit fine dining experience by Chef Ivan Holmes - Table Private Dining Cotswolds" 
        fill 
        priority 
        sizes="100vw"
        quality={90}
        className="hero-image object-cover object-center opacity-80" 
      />
      <div className="hero-overlay absolute inset-0 bg-primary/60" />
      <Header />
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 md:px-10 md:pb-24 lg:px-14">
        <div className="max-w-5xl">
          <Eyebrow>Private dining · Chef Ivan Holmes</Eyebrow>
          <h1 className="hero-heading mt-5 max-w-5xl text-primary-foreground">
            Private dining,<br /><span>made personal.</span>
          </h1>
          <div className="mt-8 flex max-w-2xl flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <p className="max-w-sm text-base leading-7 text-primary-foreground/85">
              Beautiful food, thoughtful service and a dining experience created around the people you love to gather with.
            </p>
            <div className="flex shrink-0 items-center gap-6">
              <a 
                href="#contact" 
                className="premium-solid-cta border border-primary-foreground/40 px-8 py-3 font-mono text-xs uppercase tracking-[0.16em] text-primary-foreground transition-all hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                aria-label="Enquire about private dining experience"
              >
                Enquire now
              </a>
              <a 
                href="#private-dining" 
                className="font-mono text-xs uppercase tracking-[0.16em] text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                Discover <span className="ml-2 text-sm">↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 right-6 hidden font-mono text-xs uppercase tracking-[0.16em] text-primary-foreground/60 md:block">
        London · UK
      </div>
    </section>
  )
}

export function MainSections() {
  return (
    <>
      <section id="chef" className="section-space reveal-on-scroll mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-24 lg:px-14"> 
        <div className="site-shell grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="relative lg:col-span-6">
            <div className="image-frame aspect-[4/5] max-w-[38rem]">
              <img 
                src="/images/chef-ivan.jpg" 
                alt="Chef Ivan Holmes - Private Dining Chef in Cotswolds" 
                loading="lazy" 
                width={1024} 
                height={1280} 
                className="h-full w-full object-cover" 
              />
            </div>
            <p className="vertical-note hidden lg:block">Chef Ivan Holmes · Private dining</p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow">Meet your chef</p>
            <h2 className="section-title mt-7">The chef behind <em>the experience.</em></h2>
            <div className="mt-9 space-y-5 text-body">
              <p>With more than 20 years in acclaimed kitchens, private households and luxury superyachts, Chef Ivan Holmes brings exceptional craft directly to private homes and exclusive occasions.</p>
              <p>Every experience is personal: shaped through conversation, inspired by seasonal ingredients and delivered with an instinctive understanding of hospitality.</p>
            </div>
            <div className="mt-10">
              <ArrowLink href="#story">Meet Chef Ivan</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section id="private-dining" className="reveal-on-scroll border-y border-border bg-secondary/45">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-24 lg:px-14">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <Eyebrow>The private dining experience</Eyebrow>
              <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.035em] md:text-7xl">
                Your table.<br />
                Your guests.<br />
                <span className="italic">Your experience.</span>
              </h2>
            </div>
            <div className="flex items-end md:col-span-4 md:col-start-9">
              <p className="text-base leading-7 text-muted-foreground">
                From the first conversation to the last plate, every detail is considered around your occasion, your guests and the way you want to gather. Personal, unhurried and entirely yours.
              </p>
            </div>
          </div>
          <div className="mt-20 grid border-t border-border md:grid-cols-4">
            {['Bespoke menus', 'Exceptional ingredients', 'Personal service', 'Attention to every detail'].map((item, i) => (
              <div key={item} className="border-b border-border py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
                <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
                <p className="mt-5 font-serif text-2xl">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experiences" className="reveal-on-scroll mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-24 lg:px-14">
        <div className="flex items-end justify-between">
          <div>
            <Eyebrow>Ways to gather</Eyebrow>
            <h2 className="mt-5 font-serif text-5xl tracking-[-0.03em] md:text-7xl">
              Made for the <span className="italic">occasion.</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <ArrowLink>View all experiences</ArrowLink>
          </div>
        </div>
        <div className="mt-16 grid gap-x-6 gap-y-20 md:grid-cols-2">
          {services.map((service, i) => (
            <article key={service.title} className={`experience-card reveal-on-scroll ${i % 2 ? 'md:mt-20' : ''}`}>
              <div className="relative aspect-[5/4] overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.alt} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  className="object-cover transition-transform duration-700 hover:scale-105" 
                />
              </div>
              <div className="mt-6 max-w-md">
                <Eyebrow>{service.label}</Eyebrow>
                <h3 className="mt-3 font-serif text-4xl font-medium tracking-[-0.02em]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.copy}</p>
                <div className="mt-5">
                  <ArrowLink>Explore</ArrowLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="gallery" className="reveal-on-scroll premium-gallery editorial-dark-section px-6 py-24 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-end justify-between">
            <div>
              <Eyebrow>From the table</Eyebrow>
              <h2 className="mt-5 font-serif text-5xl tracking-[-0.03em] md:text-7xl">
                A taste of the <span className="italic">experience.</span>
              </h2>
            </div>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground md:block">
              @chefivanholmes
            </span>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-12 md:grid-rows-[300px_300px]">
            {gallery.map((image, i) => (
              <div 
                key={i} 
                className={`image-frame relative ${image.className} overflow-hidden shadow-2xl transition-all duration-700`}
              >
                <Image 
                  src={image.src} 
                  alt={image.alt}
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  className="object-cover transition-transform duration-1000 hover:scale-105" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="promise" className="reveal-on-scroll mx-auto grid max-w-[1440px] gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-24 lg:px-14">
        <div className="md:col-span-5">
          <Eyebrow>Why Table Private Dining</Eyebrow>
          <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.03em] md:text-7xl">
            More than<br />
            <span className="italic">a meal.</span>
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="max-w-xl font-serif text-3xl leading-tight md:text-4xl">
            Restaurant-level quality, personal service and the ease of being looked after — without leaving home.
          </p>
          <div className="mt-12 grid border-t border-border md:grid-cols-2">
            {[
              ['Bespoke menus', 'Created around your tastes, occasion and guests.'],
              ['Exceptional ingredients', 'Thoughtfully selected and prepared with care.'],
              ['Personal service', 'A calm, generous experience brought to your table.'],
              ['Every detail considered', 'From the first conversation to the final course.']
            ].map(([title, copy]) => (
              <div key={title} className="border-b border-primary-foreground/20 py-7 md:pr-8">
                <p className="font-serif text-2xl">{title}</p>
                <p className="mt-3 text-base leading-7">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-secondary border-border bg-surface py-24 md:py-32 reveal-on-scroll mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="site-shell max-w-5xl mx-auto text-center">
          <p className="eyebrow">The feeling that remains</p>
          <blockquote className="mt-10 !font-[300] text-4xl leading-tight md:text-6xl">
            “The pleasure of hosting, without ever having to leave your own table.”
          </blockquote>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            The Table Private Dining philosophy
          </p>
        </div>
      </section>
    </>
  )
}

export function Closing() {
  return (
    <>
      <section id="contact" className="reveal-on-scroll final-cta relative min-h-[640px] overflow-hidden bg-primary text-primary-foreground">
        <Image 
          src="/images/closing-kitchen.png" 
          alt="Chef Ivan Holmes serving guests at a private dining experience" 
          fill 
          sizes="100vw"
          quality={85}
          className="final-cta-image object-cover opacity-55" 
        />
        <div className="absolute inset-0 bg-primary/50" />
        <div className="relative z-10 mx-auto flex min-h-[640px] max-w-[1440px] flex-col justify-end px-6 py-20 md:px-10 md:py-28 lg:px-14">
          <Eyebrow>Begin the conversation</Eyebrow>
          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-[0.88] tracking-[-0.045em] md:text-8xl">
            Your next dining<br />
            <span className="italic">experience starts here.</span>
          </h2>
          <div className="mt-10 flex flex-col gap-7 border-t border-primary-foreground/25 pt-7 md:flex-row md:items-center md:justify-between">
            <p className="max-w-sm text-base leading-7 text-primary-foreground/75">
              Tell us about your occasion, your guests and the experience you&apos;re looking for.
            </p>
            <a 
              href="mailto:hello@tableprivatedining.com" 
              className="premium-solid-cta w-fit border border-primary-foreground/40 px-8 py-3 font-mono text-xs uppercase tracking-[0.16em] text-primary-foreground transition-all hover:border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              aria-label="Email to enquire about private dining"
            >
              Enquire now
            </a>
          </div>
        </div>
      </section>

      <footer className="premium-footer bg-primary px-6 py-16 text-primary-foreground md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-12 md:flex-row">
            <div>
              <a href="#top" className="brand-lockup" aria-label="Table Private Dining home">
                <span className="brand-wordmark">TABLE</span>
                <span className="brand-subline">IVAN HOLMES · COTSWOLDS</span>
              </a>
              <p className="mt-4 max-w-xs text-sm leading-6 text-primary-foreground/60">
                Private dining experiences by Chef Ivan Holmes. A considered table, wherever you gather.
              </p>
            </div>
            <div className="footer-nav grid grid-cols-2 gap-x-12 gap-y-5 font-mono text-xs uppercase tracking-[0.14em] text-primary-foreground/70">
              <a href="#private-dining">Private dining</a>
              <a href="#experiences">Experiences</a>
              <a href="#about">About</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact</a>
              <a href="https://instagram.com/chefivanholmes" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="text-sm leading-6 text-primary-foreground/60">
              <a className="block hover:text-primary-foreground" href="mailto:hello@tableprivatedining.com">
                hello@tableprivatedining.com
              </a>
              <a className="block hover:text-primary-foreground" href="tel:+440000000000">
                +44 (0) 000 000 0000
              </a>
            </div>
          </div>
          <div className="mt-16 flex justify-between border-t border-primary-foreground/15 pt-5 font-mono text-[9px] uppercase tracking-[0.14em] text-primary-foreground/45">
            <span>© 2026 Table Private Dining</span>
            <span>London · UK</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default function TableHomepage() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <MainSections />
      <Closing />
    </main>
  )
}