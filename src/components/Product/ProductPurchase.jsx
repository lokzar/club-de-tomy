import axios from 'axios';
import "../Product/ProductCard.css"

const ProductCardPurchase = (props) => {
    //console.log(props)
    const {productData} = props

    return (
        <div className='productCardPurchase'>
            <div className='productCardInfo'>
                <h3>{productData?.name}</h3>
                <img className='imgProduct' src={productData?.image} alt={productData?.name}></img>
                <p>{productData?.description}</p>
                <h4>Precio: <strong>{productData?.price}</strong> Tomy Pesos</h4>
                <button className='changeProductBtn'>Eliminar del carrito</button>
            </div>
        </div>
    );
};

export default ProductCardPurchase;