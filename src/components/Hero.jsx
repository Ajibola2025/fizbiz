import Avatar from './Avatar'
import Dashboard from './Dashboard'



export default function Hero() {
  return (
    <div className="w pb-2 pt-14 text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card py-1 pl-[5px] pr-3.5 text-xs">
        <b className="rounded-full bg-lime px-[9px] font-medium text-[#161816]">New</b>
        Introducing AI Automation ›
      </span>

      <h1 className="mx-auto mb-[18px] mt-[22px] max-w-[720px] text-[clamp(38px,6vw,64px)] font-medium leading-[1.08] tracking-[-0.03em]">
        The Finance Solutions For Your Business
      </h1>
      <p className="mx-auto mb-7 max-w-[560px] text-mut">
        Empower your finance team. The one-stop platform for all financial management of small and medium-sized businesses.
      </p>

      <form onSubmit={(e) => e.preventDefault()} className="mx-auto flex max-w-[640px] flex-col gap-2 rounded-3xl bg-card p-1.5 md:flex-row md:rounded-full">
        <input type="email" placeholder="Enter your email address" aria-label="Email address"
          className="min-w-0 flex-1 bg-transparent px-5 py-3.5 text-fg outline-none md:py-0" />
        <button type="submit" className="btn">Book a Demo</button>
      </form>

      <div className="mb-7 mt-9 flex flex-col items-center gap-1.5 text-xs text-mut">
        <div className="flex">
          {[0, 1, 2, 3].map((i) => <Avatar key={i} i={i} className="-ml-2 size-8 border-2 border-bg" />)}
        </div>
        1,200+ reviews (4.9 of 5)
      </div>

      <Dashboard />

      
    </div>
  )
}