import  s from '@/styles/components/header.module.scss';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className={s.headerTitle}>Nova Travel</div>
      <div className={s.headerLinks}>
        <NavLink className={s.headerLink}
            data-text="Acceuil"
            to={"/"}>
            Acceuil
        </NavLink>
        <NavLink className={s.headerLink}
            data-text="Voyages"
            to={"/travels"}>
            Voyages
        </NavLink>
        <NavLink className={s.headerLink}
            data-text="A propos"
            to={"/about"}>
            A propos
        </NavLink>
      </div>
    </header>
  )
}

export default Header