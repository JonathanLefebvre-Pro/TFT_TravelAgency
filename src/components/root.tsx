import  s from '@/styles/components/root.module.scss';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

function Root() {
  return (
    <div className={s.root}>
      <Header />
      <div className={s.outlet}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Root