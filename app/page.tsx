"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
 const services = [
  [
    "Residential Security",
    "Professional security presence for residential buildings, private property...",
    "/residential-security",
  ],

  [
    "Retail Security",
    "Visible, customer-aware security for retail stores, shopping environments and loss prevention support.",
    "/retail-security",
  ],

  [
    "Commercial Security",
    "Reliable security services for offices, warehouses, business premises and corporate environments.",
    "/commercial-security",
  ],

  [
    "Mobile Patrols",
    "Random and scheduled patrols, lock-ups, unlocks, alarm responses and welfare checks for residential and commercial properties.",
    "/mobile-patrols",
  ],
];

  return (
    <main className="min-h-screen bg-[#080A0D] text-white">
      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#080A0D]/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <button
  className="md:hidden text-white text-3xl"
  onClick={() => setMenuOpen(!menuOpen)}>
  ☰
</button>
{menuOpen && (
  <div className="absolute top-20 left-0 w-full bg-[#080A0D] border-t border-white/10 p-6 md:hidden">
    <div className="flex flex-col gap-4 text-lg">
      <a href="#services">Services</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>

      <button className="mt-4 rounded-xl bg-[#1B2A41] px-5 py-3 font-semibold">
        Request Quote
      </button>
    </div>
  </div>
)}
</div>
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3
          ">
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
  <a href="#services" className="hover:text-[#AEB6BE] transition">
    Services
  </a>

  <a href="#about" className="hover:text-[#AEB6BE] transition">
    About
  </a>

  <a href="#contact" className="hover:text-[#AEB6BE] transition">
    Contact
  </a>
</div>
 <Image
  src="/ABE logo.png"
  
  alt="ABE Security"
  width={160}
  height={45}
  className="object-contain"
  priority
/>

          </div>

          <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#quote">Quote</a>
            <a href="tel:0405209017">0405 209 017</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-52">
       <div className="absolute inset-0 bg-[linear-gradient(120deg,#050608_0%,#0A0F1C_45%,#111827_100%)]" />

<div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(82,97,107,0.28)_0%,transparent_35%)]" />

<div className="absolute right-0 top-0 hidden h-full w-[55%] border-l border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.01)_45%,transparent_100%)] md:block" />

<div className="absolute right-20 top-36 hidden h-80 w-80 rounded-full bg-[#1B2A41]/20 blur-3xl md:block" />

<div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#080A0D] to-transparent" />
 <div className="relative mx-auto max-w-7xl">

          <p className="mb-5 tracking-[0.35em] text-[#AEB6BE]">
            LICENSED. PROFESSIONAL. RELIABLE.
          </p>

<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="max-w-4xl text-4xl md:text-6xl font-bold leading-tight"
>
  ABE
  <span className="block text-[#B8BDC3] mt-4 text-2xl md:text-4xl font-medium">
    Your Security Is Our Business.
  </span>
</motion.h1>
<p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
  Reliable security services across commercial, construction, retail and event environments.
</p>

<div className="mt-10 flex flex-col gap-4 sm:flex-row">
  <a
    href="#quote"
    className="bg-[#D8DDE2] px-8 py-4 text-center font-semibold text-black transition hover:bg-white"
  >
    Request a Quote
  </a>

  <a
    href="tel:0405209017"
    className="border border-white/25 px-8 py-4 text-center font-semibold text-white transition hover:bg-white/10"
  >
    Call 0405 209 017
  </a>
</div>
          </div>
        </section>

      <section id="services" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 tracking-[0.3em] text-[#AEB6BE]">OUR SERVICES</p>
          <h2 className="mb-12 text-4xl font-bold">Security Solutions You Can Count On</h2>

          <div className="grid gap-6 md:grid-cols-4">
            {services.map(([title, text, link], index) => (
<div
  key={title}
  onClick={() => {
  if (title !== "Mobile Patrols" && link) {
  window.location.href = link;
} else {
  setExpandedCard(expandedCard === index ? null : index);
}
}}
  className="cursor-pointer border border-white/10 bg-white/[0.03] p-8">

   {expandedCard === index && (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    transition={{ duration: 0.3 }}
    className="mt-4 border-t border-white/10 pt-4 text-sm text-gray-300"
  >
    {title === "Residential Security" && (
      <p>
        We prioritise your safety with reliable, professional residential
        security solutions tailored to your home and family. Your home is our
        home.
      </p>
    )}

    {title === "Retail Security" && (
      <p>
        Customer-focused retail security designed to protect staff, customers,
        stock and shopping environments while maintaining a professional
        presence.
      </p>
    )}

    {title === "Commercial Security" && (
      <p>
        Reliable commercial security solutions for offices, warehouses and
        business premises with a strong focus on professionalism, safety and
        incident prevention.
      </p>
    )}

    {title === "Mobile Patrols" && (
      <p>
        Flexible mobile patrol services including scheduled patrols, lock-ups,
        alarm responses and after-hours site checks across New South Wales.
      </p>
    )}
  </motion.div>
)}
                <div className="mb-6 flex gap-1">
                 <Image
  src="/ABE logo.png"
  alt="ABE Security"
  width={95}
  height={30}
/>
                </div>
                <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
                <p className="leading-7 text-white/60">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + QUOTE */}
      <section className="grid border-t border-white/10 md:grid-cols-2">
        <div id="about" className="px-6 py-24 md:px-16">
          <p className="mb-3 tracking-[0.3em] text-[#AEB6BE]">ABOUT ABE SECURITY</p>
          <h2 className="mb-8 text-4xl font-bold">
            Trusted. Structured. Professional.
          </h2>
          <p className="max-w-xl leading-8 text-white/65">
            ABE Security operates with a corporate, reliable and scalable approach
            to security services. Our focus is professional presentation, strong
            communication and dependable service delivery.
          </p>

          <div className="mt-10 border-l border-[#C7CDD1] pl-6 text-white/70">
            Master Licence: <span className="text-white">000111023</span>
          </div>
        </div>

        <div id="quote" className="border-l border-white/10 bg-white/[0.03] px-6 py-24 md:px-16">
          <p className="mb-3 tracking-[0.3em] text-[#AEB6BE]">GET IN TOUCH</p>
          <h2 className="mb-8 text-4xl font-bold">Request a Quote</h2>

          <form
  action="https://formspree.io/f/mjgzyjpj"
  method="POST"
  className="grid gap-4"
>
  <input
  name="name"
  className="border border-white/10 bg-black/30 p-4"
  placeholder="Full Name"
/>

<input
  name="email"
  className="border border-white/10 bg-black/30 p-4"
  placeholder="Email Address"
/>

<input
  name="phone"
  className="border border-white/10 bg-black/30 p-4"
  placeholder="Phone Number"
/>

<input
  name="company"
  className="border border-white/10 bg-black/30 p-4"
  placeholder="Company"
/>

<textarea
  name="message"
  className="h-36 border border-white/10 bg-black/30 p-4"
  placeholder="Tell us about your security requirements"
/>
            <button className="bg-[#D8DDE2] p-4 font-semibold text-black transition hover:bg-white">
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row">
          <div>
            <div className="text-2xl font-bold tracking-[0.18em]">ABE</div>
            <div className="text-xs tracking-[0.35em] text-white/60">SECURITY</div>
          </div>
        </div>
      </footer>
</main>
  );
}