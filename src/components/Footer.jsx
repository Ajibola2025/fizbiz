const columns = [
  ['Company', ['Service', 'Resources', 'About us']],
  ['Help', ['Customer Support', 'Terms & Conditions', 'Privacy Policy']],
]

export default function Footer() {
  return (
    <footer className="mt-14 bg-foot pb-7 pt-16 text-sm">
      <div className="w">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-[2fr_1fr_1fr_2fr]">
          <div className="col-span-2 md:col-auto">
            <a className="flex items-center gap-2 font-bold" href="#top"><i className="block size-[18px] rounded-md bg-lime" />FinBiz</a>
            <p className="mt-[18px] max-w-[320px] text-mut">Data analysis software is a type of software tool used for data analysis and reporting.</p>
          </div>

          {columns.map(([title, items]) => (
            <div key={title}>
              <h4 className="mb-[18px] font-medium">{title}</h4>
              <ul className="p-0">{items.map((i) => <li key={i} className="mb-3.5 list-none text-mut">{i}</li>)}</ul>
            </div>
          ))}

          <div className="col-span-2 md:col-auto">
            <h4 className="mb-[18px] font-medium">Subscribe to Newsletter</h4>
            <form onSubmit={(e) => e.preventDefault()} className="flex overflow-hidden rounded-lg bg-card">
              <input type="email" placeholder="Enter email address" aria-label="Email address" className="min-w-0 flex-1 bg-transparent p-4 text-fg outline-none" />
              <button type="submit" className="bg-lime px-9 font-medium text-[#161816]">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-line pt-6 text-center text-xs text-mut">© Copyright 2024, All Rights Reserved by FinBiz</div>
      </div>
    </footer>
  )
}