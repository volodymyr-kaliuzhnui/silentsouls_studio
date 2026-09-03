import { NavLink } from 'react-router-dom'

import '../styles/header.css'

function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="header__logo">
        Silent Souls Studio
      </NavLink>

      <nav className="header__nav">
        <NavLink to="/">Головна</NavLink>
        <NavLink to="/cards">Карти Таро</NavLink>
        <NavLink to="/socials">Соціальні мережі</NavLink>
        <NavLink to="/contact">Контакти</NavLink>
      </nav>
    </header>
  )
}

export default Header