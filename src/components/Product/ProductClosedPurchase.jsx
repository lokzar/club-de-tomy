
const ProductClosedCard = (props) => {
    const {productData}=props
    return (
      <div className='badgeCard'>
        <div className='badgeCardInfo'>
        <h3>{productData?.name}</h3>
        <img className='imgBadge' src={productData?.image} alt="Medalla"></img>
        <p>{productData?.description}</p>
        </div>
      </div>
    );
  };
  
  export default ProductClosedCard;

