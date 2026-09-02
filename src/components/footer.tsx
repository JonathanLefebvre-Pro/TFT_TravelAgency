import  s from '@/styles/components/footer.module.scss';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Nova Travel</p>
      <span>—</span>
      <NavLink className={s.link}
          data-text="A propos"
          to={"/about"}>
          A propos
      </NavLink>
      <span>—</span>
      <NavLink className={s.link}
          data-text="Contact"
          to={"/contact"}>
          Contact
      </NavLink>
    </footer>
  )
}

export default Footer