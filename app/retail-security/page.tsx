export default function RetailSecurity() {
  const services = [
    {
      title: "Retail Concierge & Customer Service",
      text: "Professional, approachable officers supporting customers, retailers and centre management while maintaining a visible security presence.",
      image: "/images/retail-concierge.jpg",
    },
    {
      title: "CCTV Monitoring & Loss Prevention",
      text: "Camera awareness, theft deterrence, retailer support and incident reporting to help reduce risk and stock loss.",
      image: "/images/retail-cctv.jpg",
    },
    {
      title: "Centre Patrols",
      text: "Highly visible patrols across malls, food courts, escalators, car parks, loading docks and shared retail areas.",
      image: "/images/retail-centre-patrols.jpg",
    },
    {
      title: "Incident & Emergency Response",
      text: "Experienced response to medical incidents, evacuations, anti-social behaviour, customer disturbances and urgent security concerns.",
      image: "/images/retail-incident-response.jpg",
    },
  ];

  const strengths = [
    {
      title: "Retail Operations Understanding",
      text: "Practical knowledge of customer flow, retailer needs, contractors, daily operations and centre expectations.",
    },
    {
      title: "Customer Experience Focus",
      text: "Security personnel who understand that presentation, communication and professionalism shape the customer experience.",
    },
    {
      title: "Incident Management Experience",
      text: "Calm response to medical incidents, difficult customers, emergencies, evacuations and operational concerns.",
    },
    {
      title: "Premium Centre Environment Knowledge",
      text: "Experience across luxury retail, flagship CBD centres, high-volume shopping precincts and premium customer environments.",
    },
  ];

  const operations = [
    {
      title: "Customer Experience",
      points: ["Front-of-house presence", "Wayfinding support", "Retailer assistance"],
    },
    {
      title: "Safety & Security",
      points: ["Incident response", "Emergency management", "Visible patrols"],
    },
    {
      title: "Centre Operations",
      points: ["Contractor management", "Loading dock awareness", "After-hours support"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#080A0D] text-white">
      {/* HERO */}
      <section
        className="relative min-h-[850px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/retail-security.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/85" />

        <div className="relative mx-auto flex min-h-[850px] max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-6 tracking-[0.35em] text-[#AEB6BE]">
              RETAIL SECURITY
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Security Professionals Who Understand Retail.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
              ABE Security delivers professional retail security solutions led
              by real operational experience across Sydney&apos;s busy retail
              environments, luxury precincts and customer-focused destinations.
            </p>

            <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-white/70">
              Built around customer service, loss prevention, centre operations,
              emergency response and professional presentation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/#quote"
                className="bg-white px-8 py-4 font-semibold text-black transition hover:bg-[#D8DDE2]"
              >
                Request a Quote
              </a>

              <a
                href="#services"
                className="border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDED BY EXPERIENCE */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 tracking-[0.3em] text-[#AEB6BE]">
            RETAIL EXPERIENCE
          </p>

          <h2 className="mb-8 text-5xl font-bold max-w-4xl">
            Built On Real Retail Security Experience
          </h2>

          <div className="max-w-4xl space-y-6 text-lg leading-8 text-white/80">
            <p>
              Before launching ABE Security, founder and Managing Director
              Billal Kadadi spent years managing security operations within
              some of Sydney&apos;s busiest and most recognised retail
              environments.
            </p>

            <p>
              That experience provided a practical understanding of customer
              service, retailer expectations, contractor management,
              emergency response, loss prevention and operational excellence.
            </p>

            <p>
              We understand that successful retail security is about more than
              standing at a doorway. It is about protecting people, assets,
              reputation and the customer experience.
            </p>

            <p>
              Through hands-on operational leadership, ABE Security understands
              the balance between visible security presence, retailer
              satisfaction and creating a safe, welcoming environment for
              customers.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 tracking-[0.3em] text-[#AEB6BE]">SERVICES</p>

          <h2 className="mb-6 text-4xl font-bold">
            Retail Security Solutions
          </h2>

          <p className="mb-12 max-w-3xl text-lg leading-8 text-white/70">
            From customer service and front-of-house support to CCTV awareness,
            centre patrols, loss prevention and emergency response, ABE Security
            delivers retail security solutions that support customers, retailers
            and centre management.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                </div>

                <div className="p-8">
                  <h3 className="mb-4 text-2xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="leading-7 text-white/70">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ABE */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 tracking-[0.3em] text-[#AEB6BE]">
            WHY ABE SECURITY
          </p>

          <h2 className="mb-6 text-4xl font-bold">
            Experience That Understands Retail.
          </h2>

          <p className="mb-12 max-w-3xl text-lg leading-8 text-white/70">
            Retail security requires the right balance between customer service,
            presentation, safety, loss prevention and operational control. ABE
            Security understands the retail environment because it is where our
            experience was built.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-8 transition hover:bg-white/[0.06]"
              >
                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="leading-7 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATIONAL EXPERIENCE */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 tracking-[0.3em] text-[#AEB6BE]">
            OPERATIONAL EXPERIENCE
          </p>

          <h2 className="mb-6 text-4xl font-bold">
            Security That Supports Daily Centre Operations.
          </h2>

          <p className="mb-12 max-w-3xl text-lg leading-8 text-white/70">
            Effective retail security supports more than safety. It supports the
            customer journey, retailer confidence, centre presentation and
            operational continuity.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {operations.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-8"
              >
                <h3 className="mb-5 text-xl font-semibold">{item.title}</h3>

                <ul className="space-y-3 text-white/70">
                  {item.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold">
            Looking For Professional Retail Security?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Whether you operate a shopping centre, retail precinct or standalone
            store, ABE Security can provide professional officers tailored to
            your environment.
          </p>

          <a
            href="/#quote"
            className="mt-10 inline-block bg-white px-8 py-4 font-semibold text-black transition hover:bg-[#D8DDE2]"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </main>
  );
}