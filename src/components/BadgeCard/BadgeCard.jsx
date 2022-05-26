import "../BadgeCard/BadgeCard.css"

const BadgeCard = (props) => {
    const {badgeData}=props
    return (
      <div className='badgeCard'>
        <div className='badgeCardInfo'>
        <h3>{badgeData?.name}</h3>
        <img className='imgBadge' src={badgeData?.avatar} alt="Medalla"></img>
        <p>{badgeData?.description}</p>
        </div>
      </div>
    );
  };
  
  export default BadgeCard;