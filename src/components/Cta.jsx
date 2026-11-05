export default function Cta() {
  return (
    <div className="w">
      <div className="grid items-center gap-7 overflow-hidden rounded-[32px] bg-card p-7 md:grid-cols-[1.15fr_1fr] md:p-14">
        <div>
          <h2 className="mb-7 text-[clamp(34px,5vw,56px)] font-medium leading-[1.08] tracking-[-0.025em]">Let’s Upgrade your finances experience by using FinBiz</h2>
          <div className="flex flex-wrap gap-3.5">
            <a className="btn btn-lime" href="#top">Request Demo</a>
            <a className="btn" href="#dashboard">Watch Video</a>
          </div>
        </div>
        <div role="img" aria-label="Person studying planning notes on a wall"
          className="relative aspect-[589/562] overflow-hidden rounded-[30px] bg-gradient-to-br from-[#dcdcd8] to-[#b9b9b3]">
          <div className="absolute left-1/2 top-[28%] aspect-square w-[38%] -translate-x-1/2 rounded-full bg-[#4a3a2e]" />
          <div className="absolute -bottom-[20%] left-1/2 h-[48%] w-[84%] -translate-x-1/2 rounded-t-[50%] bg-[#8a8a88]" />
        </div>
      </div>
    </div>
  )
}