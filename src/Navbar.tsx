import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="px-4">
      <nav className="fixed left-1/2 top-3 z-50 w-[min(100%-2rem,72rem)] -translate-x-1/2 rounded-3xl border border-white/10 bg-orange-300/20 px-4 py-2 shadow-lg backdrop-blur-md sm:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="shrink-0" onClick={() => setIsOpen(false)}>
            <img
              src="logo.png"
              alt="Arisavo logo"
              className="h-10 w-24 object-contain sm:h-12 sm:w-28 md:h-20 md:w-32"
            />
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/70 text-slate-900 transition hover:bg-white md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>

          <ul className="hidden items-center gap-6 text-sm text-black md:flex md:text-lg">
            <li>
              <Link to="/" className="font-bold transition-colors hover:text-orange-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/nutrition" className="font-bold transition-colors hover:text-orange-600">
                Nutrition
              </Link>
            </li>
            <li>
              <Link to="/life" className="font-bold transition-colors hover:text-orange-600">
                Life
              </Link>
            </li>
            <li>
              <Link to="/workout" className="font-bold transition-colors hover:text-orange-600">
                Workout
              </Link>
            </li>
            <li>
              <Link to="/login" className="rounded-full bg-orange-500 px-4 py-2 font-bold text-white transition-colors hover:bg-orange-600">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {isOpen && (
          <ul className="mt-4 flex flex-col gap-3 border-t border-white/20 pt-4 text-sm text-black md:hidden">
            <li>
              <Link to="/" className="block font-semibold transition-colors hover:text-orange-600" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/nutrition" className="block font-semibold transition-colors hover:text-orange-600" onClick={() => setIsOpen(false)}>
                Nutrition
              </Link>
            </li>
            <li>
              <Link to="/life" className="block font-semibold transition-colors hover:text-orange-600" onClick={() => setIsOpen(false)}>
                Life
              </Link>
            </li>
            <li>
              <Link to="/workout" className="block font-semibold transition-colors hover:text-orange-600" onClick={() => setIsOpen(false)}>
                Workout
              </Link>
            </li>
            <li>
              <Link to="/login" className="inline-block rounded-full bg-orange-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-orange-600" onClick={() => setIsOpen(false)}>
                Login
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  )
}

export default Navbar
