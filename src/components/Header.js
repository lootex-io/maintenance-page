import Logo from './Logo'

import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
    </header>
  )
}

export default Header
