const grads = [
  ['#c9a27a', '#6b4b36'],
  ['#7aa6c9', '#364f6b'],
  ['#d6c06a', '#7a6a1f'],
  ['#9c7ac9', '#4b366b'],
]

export default function Avatar({ i = 0, className = '' }) {
  const [a, b] = grads[i % grads.length]
  return <i className={'block rounded-full ' + className} style={{ background: `linear-gradient(135deg,${a},${b})` }} />
}