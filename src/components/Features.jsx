import Avatar from './Avatar'

const card = 'overflow-hidden rounded-[22px] border border-line bg-card p-7 text-sm text-mut'
const invoices = [['John Client_download.pdf', 'bg-lime'], ['Michele Leos_download.pdf', 'bg-[#6b7de8]'], ['John Smith_download.pdf', 'bg-[#9be05a]']]

export default function Features() {
  return (
    <section id="features" className="py-10 md:py-14">
      <div className="w grid gap-4 md:grid-cols-[1fr_2fr_1fr]">
        <div className={card + ' text-center'}>
          <p>Make informed decisions backed by data through our analytics tools.</p>
          <div className="mb-2.5 mt-[22px] inline-flex items-center gap-2 text-xs text-fg"><i className="block size-[22px] rounded-full bg-ink" />14.12%</div>
          <svg className="block h-auto w-full" viewBox="0 0 260 120" role="img" aria-label="Analytics growth chart">
            <path d="M0 100 C40 95 60 40 100 55 S150 90 190 40 S240 20 260 10 V120 H0Z" fill="#a8e02b" opacity=".25" />
            <path d="M0 100 C40 95 60 40 100 55 S150 90 190 40 S240 20 260 10" fill="none" stroke="#7fb61a" strokeWidth="2.5" />
          </svg>
        </div>

        <div className={card + ' text-center'}>
          <p>Bring harmony to team expenses with budget limits and real-time monitoring. Freedom for your staff. Peace of mind for you.</p>
          <svg className="mt-5 block h-auto w-full" viewBox="0 0 560 200" role="img" aria-label="Monthly limit chart">
           <rect width="560" height="200" rx="12" style={{ fill: 'var(--soft)' }} />
            <path d="M20 140 L80 120 L140 150 L200 90 L260 110 L320 60 L380 100 L440 50 L540 70" fill="none" stroke="#3b52e0" strokeWidth="2" />
           <path d="M20 170 L80 150 L140 175 L200 140 L260 160 L320 125 L380 150 L440 120 L540 135" fill="none" style={{ stroke: 'var(--mut)' }} strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>
           </div>

        <div className={card + ' text-center'}>
          <p>Seamlessly collaborate with your team members like never before.</p>
          <div className="mx-auto mt-6 grid aspect-square w-[220px] max-w-full place-items-center rounded-full bg-[#e4e8dc]">
            <div className="flex">{[0, 1, 2, 3, 4].map((i) => <Avatar key={i} i={i} className="-ml-3 size-11 border-2 border-white" />)}</div>
          </div>
        </div>

        <div className={card + ' md:col-span-2'}>
          <p className="max-w-[520px]">Take the pain out of bookkeeping! Wave goodbye to mountains of paperwork and endless email reminders. There’s now a new way of accounting.</p>
          <div className="mt-5 grid gap-2.5 rounded-[14px] bg-soft p-4 text-xs text-fg">
            <b className="font-medium">Monthly Invoice</b>
            {invoices.map(([name, dot]) => (
              <div key={name} className="flex items-center gap-2.5"><i className={'size-[26px] rounded-full ' + dot} />{name}</div>
            ))}
          </div>
        </div>

        <div className={card + ' flex flex-col items-start justify-center !p-9'}>
          <h2 className="mb-3.5 text-[clamp(28px,3.4vw,40px)] font-medium leading-[1.15] tracking-[-0.02em] text-fg">Optimise expense management as a team</h2>
          <p className="mb-6 text-[15px]">Bring harmony to team expenses with budget limits and real-time monitoring. Freedom for your staff. Peace of mind for you.</p>
          <a className="btn" href="#pricing">Explore more</a>
        </div>
      </div>
    </section>
  )
}