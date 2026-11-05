const base = ['Get a fully designed website.', 'Webflow development', 'Limited support']
const plans = [
  { name: 'Basic', price: '$499', features: base, cta: 'Get started', btn: 'btn btn-out' },
  { name: 'Pro', price: '$499', popular: true, features: [...base, 'Standard integrations', 'Email support'], cta: 'Get started', btn: 'btn' },
  { name: 'Enterprise', price: '$999', features: [...base, 'Standard integrations', 'Email support', 'Priority support', 'Dedicated manager'], cta: 'Contact us', btn: 'btn btn-lime' },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-10 text-center md:py-14">
      <div className="w">
        <span className="tag">Pricing</span>
        <h2 className="mb-3 text-[clamp(30px,4.4vw,44px)] font-medium tracking-[-0.02em]">Find the right plan</h2>
        <p className="mx-auto max-w-[620px] text-mut">Invest in your company’s future with our comprehensive financial solution. Contact us for pricing details and see how we can help you streamline your finances and reach your business goals.</p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className="relative flex flex-col items-center rounded-[22px] border border-line bg-card px-9 pb-10 pt-14">
              {p.popular && <span className="absolute right-[22px] top-[22px] rounded-full border border-line bg-soft px-3 py-[3px] text-xs">Popular</span>}
              <h3 className={'text-[26px] font-medium ' + (p.popular ? 'text-[#6fa51a]' : '')}>{p.name}</h3>
              <p className="mb-6 mt-1.5 text-sm text-mut">Get a professional website designed according to your needs.</p>
              <div className="text-[34px] font-medium">{p.price}<small className="text-xs font-normal text-mut">/month</small></div>
              <ul className="mb-9 mt-7 grid w-full flex-1 list-none gap-2 border-t border-line p-0 pt-7 text-left text-sm text-mut">
                {p.features.map((f) => <li key={f} className="before:mr-2.5 before:text-fg before:content-['✓']">{f}</li>)}
              </ul>
              <a href="#" className={p.btn + ' w-full'}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}