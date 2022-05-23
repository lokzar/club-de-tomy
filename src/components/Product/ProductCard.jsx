import {link} from 'react-router-dom'

const ProductCard = (props) => {
    const {productData}=props
    return (
      <div>
        <h3>{productData?.name}</h3>
        <img src={productData?.image}></img>
        <p>{productData?.description}</p>
        <h4>Precio: <strong>{productData?.price}</strong> Tomy Pesos</h4>
        <button> Agregar al carrito </button>
      </div>
    );
  };
  
  export default ProductCard;