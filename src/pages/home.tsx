import s from '@/styles/pages/home.module.scss';
import { NavLink } from 'react-router-dom';
import TravelCard from '@components/travelCard';
import { TravelsData } from '@data/data';
import type { ITravelData } from '../interfaces/ITravelData';

function Home() {
  return (
    <div className={s.home}>
      <div className={s.topContent}>
        <div className={s.topContentLeft}>
          <h1 className={s.title}>
            Partez loin,
            <span className={s.subtitle}>
            dépensez moins
            </span>
          </h1>
          <p className={s.description}>Découvrez nos offres exclusives vers plus de 100 destinations. Vol + hôtel à prix doux, garanties flexibles et assistances 24/7.</p>
        
          <div className={s.links}>
            <NavLink 
                className={s.linkToTravels}
                data-text="Voir les voyages"
                to={"/travels"}>
                Voir les voyages
              </NavLink>

              <a className={s.linkToDeals}>Meilleurs deals</a>
              <span className={s.cancelTravel}>Annuler flexible</span>
              <span className={s.securePay}>Paiement sécurisé</span>
            </div>
        </div>
        <div className={s.topContentRight}>
          <img src="/hero.png" alt="hero" />
        </div>
      </div>
      <div className={s.bottomContent}>
        <h2 className={s.dealsTitle}>Meilleurs deals du moment</h2>
        <p className={s.dealsDescription}>Profitez de réductions limitées sur une sélection de voyages populaires.</p>
        <div className={s.travelCards}>
          {TravelsData.map((travel: ITravelData) => (
            <TravelCard key={travel.id} data={travel} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home