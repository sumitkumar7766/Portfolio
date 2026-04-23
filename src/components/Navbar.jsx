import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-4 md:px-8">
        <p className="text-lg font-bold text-orange-600">Sumit Kumar</p>
        <ul className="flex flex-wrap items-center justify-end gap-2 md:gap-3">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-orange-500 text-white'
                      : 'text-neutral-700 hover:bg-orange-100 hover:text-orange-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
