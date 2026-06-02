export default function ResidentialSecurity(): import("react/jsx-runtime").JSX.Element {
  const services = [
    {
      title: "Residential Concierge",
      text: "Professional front of house personnel who support residents, visitors, contractors and building management.",
      image: "/images/residential-concierge.jpg",
    },
    {
      title: "Building Patrols",
      text: "Regular patrols of common areas, car parks, entries, lifts and shared facilities.",
      image: "/images/building-patrols.jpg",
    },
    {
      title: "Access Control & Visitor Management",
      text: "Managing access points, visitors, deliveries and contractors with a professional and secure approach.",
      image: "/images/access-control.jpg",
    },
    {
      title: "CCTV Monitoring & Incident Response",
      text: "Monitoring cameras, reporting concerns and responding quickly to incidents, emergencies and resident requests.",
      image: "/images/cctv-monitoring.jpg",
    },
  ];

  const differences = [
    {
      title: "Professional Personnel",
      text: "Well presented, approachable and licensed security professionals.",
    },
    {
      title: "Concierge & Front of House",
      text: "Creating a welcoming environment while maintaining security standards.",
    },
    {
      title: "Detailed Reporting",
      text: "Clear communication, incident reporting and site accountability.",
    },
    {
      title: "Rapid Response",
      text: "Prompt action when incidents, concerns or resident requests arise.",
    },
    {
      title: "Tailored Solutions",
      text: "Security services customised to each building and community.",
    },
    {
      title: "Sydney Wide Coverage",
      text: "Supporting residential communities across Sydney with reliable security services.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#080A0D] text-white">
      {/* HERO */}
<section
  className="relative h-[80vh] min-h-[700px] bg-cover"
  style={{
    backgroundImage: "url('/images/hero-sydney.jpg')",
    backgroundPosition: "center 70%",
  }}
>
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-start px-6 pt-24">
          <div className="max-w-3xl">
            <p className="mb-6 tracking-[0.35em] text-[#AEB6BE]">
              RESIDENTIAL SECURITY
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              Security for the place people call home.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
              Professional residential security for apartment buildings, strata
              communities and premium residential properties across Sydney.
            </p>

            <a
              href="/#quote"
              className="mt-10 inline-block bg-white px-8 py-4 font-semibold text-black transition hover:bg-[#D8DDE2]"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      {/* WHY ABE */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 tracking-[0.3em] text-[#AEB6BE]">
            WHY ABE SECURITY
          </p>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 md:p-14">
            <h2 className="mb-8 text-4xl font-bold">
              This is more than just a building.
            </h2>

            <div className="space-y-6 text-lg leading-8 text-white/80">
              <p>
                At ABE Security, we understand that this is more than just a
                building. It is your home.
              </p>

              <p>
                The people who live here are not just residents. They are
                families, neighbours, professionals and members of a community.
                They deserve to feel safe, respected and comfortable where they
                live.
              </p>

              <p>
                We understand the trust that comes with protecting a residential
                community. Our personnel take a professional, respectful and
                approachable approach on every site.
              </p>

              <p>
                Security is not just about standing at a desk or walking a
                patrol. It is about helping residents feel safe, welcoming
                visitors properly and giving building management confidence
                that the property is being looked after.
              </p>

              <p className="pt-4 text-xl font-semibold text-white">
                We do not just protect buildings.
                <br />
                We protect the people who call them home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 tracking-[0.3em] text-[#AEB6BE]">SERVICES</p>

          <h2 className="mb-6 text-4xl font-bold">
            Security Built Around Residents
          </h2>

          <p className="mb-12 max-w-3xl text-lg leading-8 text-white/70">
            From concierge services and visitor management to patrols and
            incident response, ABE Security delivers professional residential
            security solutions that help residents feel safe and building
            managers stay confident.
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
  <div className="absolute inset-0 bg-black/30" />
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

      {/* THE ABE DIFFERENCE */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 tracking-[0.3em] text-[#AEB6BE]">
            THE ABE DIFFERENCE
          </p>

          <h2 className="mb-6 text-4xl font-bold">
            Why residents, building managers and communities trust ABE
          </h2>

          <p className="mb-12 max-w-3xl text-lg leading-8 text-white/70">
            We combine professional presentation, responsive service and
            practical security experience to deliver solutions that help people
            feel safe where they live.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {differences.map((item) => (
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

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold">Need Residential Security?</h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Speak with ABE Security about a tailored solution for your building,
            strata community or residential development.
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