import {link} from 'react-router-dom'
import "../BadgeCard/BadgeCard.css"

const BadgeCard = (props) => {
    const {badgeData}=props
    return (
      <div className='badgeCard'>
        <div className='badgeCardInfo'>
        <h3>{badgeData?.name}</h3>
        <img className='imgBadge' src={badgeData?.avatar}></img>
        <p>{badgeData?.description}</p>
        <h4>Valor: <strong>{badgeData?.value}</strong> Tomy Pesos</h4>
        </div>
      </div>
    );
  };
  
  export default BadgeCard;