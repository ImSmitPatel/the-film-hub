import { NavLink } from 'react-router-dom';
import logo from '../assets/tfh-logo.png';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/movies', label: 'Movies' },
  { path: '/tv', label: 'TV Shows' },
  { path: '/watchlist', label: 'Watchlist' },
];

function NavBar() {
  return (
    <header className="p-4">
      <nav className='flex items-center justify-between bg-black w-full mx-auto p-4 rounded-xl shadow-lg'>

        <NavLink to="/">
          <img className='w-20' src={logo} alt="The Film Hub Home" />
        </NavLink>

        <ul className="flex items-center space-x-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-300
                   ${isActive ? 'text-[#FE000C]' : 'text-white hover:text-gray-300'}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;