import axios from 'axios';
import "../Product/ProductCard.css"

const ProductCardPurchase = (props) => {
    const {productData} = props
    //console.log(productData._id)
    const {purchaseData} = props
    //console.log(purchaseData)
    function unAssignProduct(_id, purchaseId, total){
        axios.put(`http://localhost:5005/api/purchase/totalDiscount`,{_id, purchaseId, total})
        .then((newTotal)=>{
            //console.log(newTotal)
            const updatedTotal = props.purchaseData?.product.filter(filtrado=>filtrado._id===_id)
            //console.log(updatedBadge)
            axios.put(`http://localhost:5005/api/purchase/unasignProducts`,{_id, purchaseId})
            .then(products=>{
            //console.log(products)
            const updatedProduct = props.purchaseData?.product.filter(filtrados=>filtrados._id!==_id)
            //console.log(updatedProduct)
            const total = props.purchaseData?.total - updatedTotal[0].price;
            //console.log({...props.purchaseData, product:updatedProduct, total})
            props.setPurchase([{...props.purchaseData, product:updatedProduct, total}])
            })
        }
        )
    .catch(err=>console.log(err))
    }


    return (
        <div className='productCardPurchase'>
            <div className='productCardInfo'>
                <h3>{productData?.name}</h3>
                <img className='imgProduct' src={productData?.image} alt={productData?.name}></img>
                <p>{productData?.description}</p>
                <h4>Precio: <strong>{productData?.price}</strong> Tomy Pesos</h4>
                <button className='changeProductBtn' onClick={()=>unAssignProduct(productData?._id, purchaseData?._id, purchaseData?.total)}>Eliminar del carrito</button>
            </div>
        </div>
    );
};

export default ProductCardPurchase;