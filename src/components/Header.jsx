import { useEffect } from 'react'

const links = [
  ['Product', '#dashboard'],
  ['Integrations', '#features'],
  ['Blog', '#reviews'],
  ['Pricing', '#pricing'],
]

function toggleTheme() {
  const root = document.documentElement
  const current = root.getAttribute('data-theme')
  const isDark = current
    ? current === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches
  const next = isDark ? 'light' : 'dark'
  root.setAttribute('data-theme', next)
  localStorage.setItem('theme', next)
}

export default function Header() {
  // apply the saved choice when the page loads
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved) document.documentElement.setAttribute('data-theme', saved)
  }, [])

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg">
      <div className="w flex h-[72px] items-center justify-between">
        <a className="flex items-center gap-2 font-bold" href="#top">
          <i className="block size-[18px] rounded-md bg-lime" />FinBiz
        </a>
        <nav className="hidden gap-[26px] text-sm md:flex">
          {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button type="button" onClick={toggleTheme} aria-label="Switch light or dark theme" className="btn btn-out size-[38px] !p-0">◐</button>
          <a className="btn btn-out !px-[22px] !py-[9px] !text-sm" href="#pricing">Get started</a>
        </div>
      </div>
    </header>
  )
}