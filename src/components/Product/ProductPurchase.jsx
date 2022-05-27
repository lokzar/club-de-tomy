import axios from 'axios';
import "../Product/ProductCard.css"

const ProductCardPurchase = (props) => {
    const {productData} = props
    const {purchaseData} = props

    function unAssignProduct(_id, purchaseId, total){
        axios.put(`${process.env.REACT_APP_SERVER_URL}/purchase/totalDiscount`,{_id, purchaseId, total})
        .then((newTotal)=>{
            const updatedTotal = props.purchaseData?.product.filter(filtrado=>filtrado._id===_id)
            axios.put(`${process.env.REACT_APP_SERVER_URL}/purchase/unasignProducts`,{_id, purchaseId})
            .then(products=>{
            const updatedProduct = props.purchaseData?.product.filter(filtrados=>filtrados._id!==_id)
            const total = props.purchaseData?.total - updatedTotal[0].price;
            props.setPurchase([{...props.purchaseData, product:updatedProduct, total}])
            })
        })
    .catch(err=>console.log(err))
    }


    return (
        <div className='productCardPurchase'>
            <div className='productCardInfo'>
                <h3>{productData?.name}</h3>
                <img className='imgProduct' src={productData?.image} alt={productData?.name}></img>
                <p>{productData?.description}</p>
                <h4>Precio: <strong>{productData?.price}</strong> Tomy Pesos</h4>
                <button className='cartBtn' onClick={()=>unAssignProduct(productData?._id, purchaseData?._id, purchaseData?.total)}>Eliminar del carrito</button>
            </div>
        </div>
    );
};

export default ProductCardPurchase;