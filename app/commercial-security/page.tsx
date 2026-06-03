export default function CommercialSecurity() {
  return (
    <main className="min-h-screen bg-[#080A0D] text-white">
      {/* HERO */}
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/commercial-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <p className="mb-6 tracking-[0.35em] text-[#AEB6BE]">
              COMMERCIAL SECURITY
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Security Professionals Who Understand Commercial Assets.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
              ABE Security delivers professional commercial security services
              across premium office towers, corporate facilities, mixed-use
              developments and managed commercial assets throughout Sydney.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/#quote"
                className="bg-white px-8 py-4 font-semibold text-black"
              >
                Request a Quote
              </a>

              <a
                href="#services"
                className="border border-white/30 px-8 py-4 font-semibold text-white"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL EXPERIENCE */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 tracking-[0.3em] text-[#AEB6BE]">
            COMMERCIAL EXPERIENCE
          </p>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-12 md:p-16">
            <h2 className="mb-8 text-4xl font-bold">
              Commercial Security Built Around Real Property & Facilities Management Experience.
            </h2>

            <div className="space-y-6 text-lg leading-8 text-white/80">
              <p>
                ABE Security understands that successful commercial security is
                about more than simply guarding a building.
              </p>

              <p>
  We support facilities managers, property managers, asset
  managers and building operations teams through professional
  security, concierge, access control and daily operational
  support.
</p>

<p>
  Our teams work alongside facilities management and building
  operations personnel, supporting access control systems,
  contractor management, BMS procedures, loading dock
  operations and day-to-day building requirements.
</p>

              <p>
                Our officers understand visitor management, contractor control,
                loading dock operations, access control systems and emergency
                response procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 tracking-[0.3em] text-[#AEB6BE]">
            SERVICES
          </p>

          <h2 className="mb-12 text-4xl font-bold">
            Commercial Security Solutions
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img
                src="/images/commercial-concierge.jpg"
                alt="Concierge & Tenant Services"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="mb-4 text-2xl font-semibold">
                  Concierge & Tenant Services
                </h3>

                <p className="text-white/70">
                  Professional concierge and front-of-house officers delivering exceptional tenant, visitor and contractor experiences while maintaining a strong security presence.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img
                src="/images/commercial-access-control.jpg"
                alt="Access Control & Asset Protection"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="mb-4 text-2xl font-semibold">
                  Access Control & Asset Protection
                </h3>

                <p className="text-white/70">
                  Visitor management, access control systems, tenant access, after-hours security and asset protection across commercial properties.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img
                src="/images/commercial-loading-dock.jpg"
                alt="Loading Dock"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="mb-4 text-2xl font-semibold">
                  Loading Dock Operations
                </h3>

                <p className="text-white/70">
                  Supporting loading dock operations, contractor management, deliveries, logistics movements and daily building operations.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img
                src="/images/commercial-reception.jpg"
                alt="Reception"
                className="h-72 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="mb-4 text-2xl font-semibold">
                  Reception & Corporate Security
                </h3>

                <p className="text-white/70">
                  Professional officers supporting premium commercial buildings
                  and corporate environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY ABE */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 tracking-[0.3em] text-[#AEB6BE]">
            WHY ABE SECURITY
          </p>

          <h2 className="mb-12 text-4xl font-bold">
            Experience That Understands Commercial Operations.
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="mb-3 text-xl font-semibold">
                Facilities Management Understanding
              </h3>

              <p className="text-white/70">
                Supporting facilities managers, property managers and asset
                managers.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="mb-3 text-xl font-semibold">
                Building Operations Knowledge
              </h3>

              <p className="text-white/70">
                Understanding contractor management, loading docks and building
                operations.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="mb-3 text-xl font-semibold">
                Tenant & Visitor Experience
              </h3>

              <p className="text-white/70">
                Professional officers who understand presentation and customer
                service.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="mb-3 text-xl font-semibold">
                Emergency Response
              </h3>

              <p className="text-white/70">
                Prepared to respond to incidents, alarms and emergency events.
              </p>
            </div>
          </div>

          {/* WORKING ALONGSIDE COMMERCIAL OPERATIONS TEAMS */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-10">
            <p className="mb-6 tracking-[0.3em] text-[#AEB6BE]">
              WORKING ALONGSIDE COMMERCIAL OPERATIONS TEAMS
            </p>
            <p className="mt-3 mb-6 text-white/70">
              Working alongside the teams responsible for keeping commercial assets secure, compliant and operating efficiently.
            </p>

            <div className="grid gap-4 md:grid-cols-3 text-white/80">
              <div>Facilities Managers</div>
              <div>Property Managers</div>
              <div>Asset Managers</div>
              <div>Building Operations Teams</div>
              <div>Operations Managers</div>
              <div>Building Service Contractors</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold">
            Looking For Professional Commercial Security?
          </h2>

          <p className="mt-6 text-lg text-white/70">
            ABE Security provides professional commercial security services
            tailored to office towers, corporate assets and managed properties.
          </p>

          <a
            href="/#quote"
            className="mt-10 inline-block bg-white px-8 py-4 font-semibold text-black"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </main>
  );
}