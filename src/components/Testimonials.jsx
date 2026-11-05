import { useRef } from 'react'
import Avatar from './Avatar'

const quotes = [
  { text: 'I really like the system at this management, I love recommending this software to you guys', av: 1 },
  { text: '“We align our success with the success of our customers, which is why our offering transcends our software.”', av: 3 },
  { text: 'I really like the system at this management, I love recommending this software to you guys', av: 2 },
]

export default function Testimonials() {
  const track = useRef(null)
  const go = (dir) => {
    const el = track.current
    el.scrollBy({ left: dir * (el.firstElementChild.offsetWidth + 18), behavior: 'smooth' })
  }

  return (
    <section id="reviews" className="py-10 text-center md:py-14">
      <div className="w">
        <span className="tag">Testimonials</span>
        <h2 className="mb-3 text-[clamp(30px,4.4vw,44px)] font-medium tracking-[-0.02em]">What are people saying</h2>
        <p className="mx-auto max-w-[620px] text-mut">Thank you for your trust in FinBiz! We are grateful for your feedback and are committed to providing the best products and services. Read what our clients have to say about their experience with us.</p>
      </div>

      <div ref={track} tabIndex={0} aria-label="Customer testimonials"
        className="mt-10 flex snap-x snap-mandatory gap-[18px] overflow-x-auto px-5 pb-3 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {quotes.map((q, i) => (
          <div key={i} className="relative flex min-h-[290px] shrink-0 basis-[min(560px,86vw)] snap-center flex-col justify-between gap-9 rounded-[18px] bg-card p-[34px] text-left text-[22px] leading-[1.35] after:absolute after:bottom-1.5 after:right-7 after:text-[90px] after:leading-none after:text-bar after:content-['”']">
            {q.text}
            <div className="flex items-center gap-3 text-sm">
              <Avatar i={q.av} className="size-12" />
              <span className="text-xs tracking-[2px] text-[#f2a900]">★★★★★</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-3">
        <button onClick={() => go(-1)} aria-label="Previous testimonial" className="size-12 rounded-full bg-card text-lg text-fg">←</button>
        <button onClick={() => go(1)} aria-label="Next testimonial" className="size-12 rounded-full bg-lime text-lg text-[#161816]">→</button>
      </div>
    </section>
  )
}