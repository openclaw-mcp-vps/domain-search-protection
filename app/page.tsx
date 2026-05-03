export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Domain Privacy
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Registrars From{" "}
          <span className="text-[#58a6ff]">Squatting Your Searches</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          DomainShield proxies your domain availability queries through anonymous endpoints so no registrar ever learns what you&apos;re planning to buy.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Private Access — $5/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">No registrar ever sees your search intent.</p>
      </section>

      {/* How it works — 3 steps */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { step: "01", title: "Authenticate", body: "Sign in with your account to access the private search API." },
          { step: "02", title: "Submit Query", body: "Send domain names through our encrypted proxy endpoints." },
          { step: "03", title: "Get Results", body: "Receive aggregated availability data — your intent stays hidden." }
        ].map(({ step, title, body }) => (
          <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] text-xs font-mono mb-2">{step}</div>
            <h3 className="text-white font-semibold mb-2">{title}</h3>
            <p className="text-sm text-[#8b949e]">{body}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-xs text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$5</div>
          <div className="text-sm text-[#8b949e] mb-6">per search / month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Anonymous proxy routing",
              "Aggregated WHOIS results",
              "No registrar tracking",
              "API access included",
              "Cancel anytime"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start Searching Privately
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does domain squatting during searches happen?",
              a: "Some registrars monitor search queries and register domains you look up before you can buy them, then resell at inflated prices. DomainShield routes your queries through rotating anonymous endpoints so no single registrar can correlate searches to your identity."
            },
            {
              q: "Which TLDs and registrars are supported?",
              a: "DomainShield aggregates results from multiple independent WHOIS and DNS sources, covering all major TLDs (.com, .net, .org, .io, and hundreds more) without routing through any single registrar's infrastructure."
            },
            {
              q: "Is my search data stored or logged?",
              a: "No. Queries are processed in-memory and discarded immediately after results are returned. We never persist your domain search history."
            }
          ].map(({ q, a }) => (
            <details key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 group">
              <summary className="cursor-pointer font-semibold text-white list-none flex justify-between items-center">
                {q}
                <span className="text-[#58a6ff] ml-4 text-lg group-open:rotate-45 transition-transform inline-block">+</span>
              </summary>
              <p className="mt-3 text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} DomainShield. All rights reserved.
      </footer>
    </main>
  );
}
