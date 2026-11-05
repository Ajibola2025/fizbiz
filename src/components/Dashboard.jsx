const stats = [
  { label: 'Total Profit',  value: '$350.240', change: '+18.23', text: 'text-[#2c9a45]', bar: 'bg-lime',      bars: [45, 80, 60, 100] },
  { label: 'Total revenue', value: '$400.690', change: '+28.35', text: 'text-[#d03b3b]', bar: 'bg-[#e25b5b]', bars: [55, 90, 40, 75] },
  { label: 'Product sold',  value: '$200.000', change: '+28.35', text: 'text-[#3b4fd0]', bar: 'bg-[#5a6be0]', bars: [50, 100, 70, 85] },
]
const groups = ['Employee', 'Independent Contractor', 'Contracted Employee', 'Stakeholders']

function StatCard({ label, value, change, text, bar, bars }) {
  return (
    <div className="panel">
      <span className={'float-right text-[11px] ' + text}>{change}</span>
      <div className="flex items-end justify-between">
        <div>
          <small className="block text-sm text-mut">{label}</small>
          <b className="text-[clamp(28px,3.4vw,42px)] font-medium tracking-tight">{value}</b>
        </div>
        <div className="flex h-9 items-end gap-1">
          {bars.map((h, i) => <i key={i} className={'w-[5px] rounded-[3px] ' + bar} style={{ height: h + '%' }} />)}
        </div>
      </div>
    </div>
  )
}

const Big = ({ children }) => <span className="mb-2.5 mt-0.5 block text-[34px] font-medium tracking-tight text-fg">{children}</span>

export default function Dashboard() {
  return (
    <div id="dashboard" className="grid gap-3.5 rounded-[28px] bg-soft p-5 text-left shadow-[0_30px_60px_-30px_rgba(0,0,0,.25)] md:grid-cols-[260px_1fr_250px]">
      <div className="grid gap-3.5 md:col-span-full md:grid-cols-3">
        {stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>

      <div className="panel text-sm text-mut">
        <small>Total Balance</small><Big>$350.0</Big>
        <a href="#pricing" className="block w-full rounded-lg bg-ink p-2 text-center text-[13px] text-on-ink">Transfer</a>
        <hr className="my-3.5 border-line" />
        <small>Total Income</small><Big>$320.0</Big>
        <hr className="my-3.5 border-line" />
        <small>Total Expense <b className="float-right text-[11px] font-normal">92%</b></small><Big>$220.0</Big>
      </div>

      <div className="panel">
        <div className="flex flex-wrap items-center justify-between gap-2.5 text-[15px]">
          <b className="font-medium">Spend Overview</b>
          <div className="text-[13px] text-mut">
            <span className="ml-3 text-fg">Daily</span><span className="ml-3">Weekly</span>
            <span className="ml-3">Monthly</span><span className="ml-3">Yearly</span>
          </div>
        </div>
        <svg className="block h-auto w-full" viewBox="0 0 600 300" role="img" aria-label="Spend overview line chart">
          <g className="stroke-line"><path d="M40 40H590M40 90H590M40 140H590M40 190H590M40 240H590" /></g>
          <g className="fill-mut" fontSize="11">
            <text x="0" y="44">6,000</text><text x="0" y="94">5,000</text><text x="0" y="144">4,000</text>
            <text x="0" y="194">3,000</text><text x="0" y="244">2,000</text>
            <text x="75" y="280">12:00AM</text><text x="255" y="280">04:00AM</text><text x="435" y="280">08:00AM</text>
          </g>
          <path d="M60 230 C100 230 120 120 170 120 S230 215 270 200 S330 60 380 60 S440 170 480 150 S540 80 580 40 V240 H60Z" fill="#7fd9a8" opacity=".18" />
          <path d="M60 230 C100 230 120 120 170 120 S230 215 270 200 S330 60 380 60 S440 170 480 150 S540 80 580 40" fill="none" stroke="#5fcf94" strokeWidth="2.5" />
        </svg>
      </div>

      <div className="panel grid content-start gap-[18px] text-[15px]">
        {groups.map((g) => (
          <div key={g} className="grid gap-2">{g}<i className="h-3 w-full rounded-md bg-bar" /><i className="h-3 w-1/2 rounded-md bg-bar" /></div>
        ))}
      </div>
    </div>
  )
}