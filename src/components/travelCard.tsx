import s from '@styles/components/travelCard.module.scss';
import type { ITravelData } from '@interfaces/ITravelData';

function TravelCard({data}: 
    {data: ITravelData}) {
  return (
    <div className={s.travelCard}>
      <div className={s.imageContainer}>
        <img src={data.imageUrl} alt={data.destination} />
      </div>

      <div className={s.content}>
        <div className={s.titleAndPrice}>
          <h2 className={s.title}>{data.description}</h2>
          <span className={s.price}>{data.price}</span>
          <span className={s.reducedPrice}>{data.reducedPrice}</span>
        </div>

        <div className={s.details}>
          <p>{data.duration}</p>
          <p>{data.description}</p>
          {data.details ? <p>{data.details}</p> : null}
        </div>

        <button>Voir l'offre</button>
      </div>
    </div>
  );
}

export default TravelCard;