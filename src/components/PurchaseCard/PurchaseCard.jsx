import {link} from 'react-router-dom'
import ProductCardPurchase from "../Product/ProductPurchase"
import "../BadgeCard/BadgeCard.css"

    const PurchaseCard = (props) => {
        //console.log(props)
        const {purchaseData}=props
        console.log(purchaseData)
        return (
        <div className='purchaseCard'>
            <div className='purchaseCardInfo'>
            <h3>Orden de compra: </h3>
            <h4>{purchaseData[0]?._id}</h4>
            <div className="products">    
                {purchaseData[0]?.product.map(product=>
                <ProductCardPurchase key={product._id} productData={product}/>
                )}
            </div>
            <p>Total: {purchaseData[0]?.total} Tomy Pesos</p>
            <button>Comprar!</button>
            </div>
        </div>
        );
    };
    
export default PurchaseCard;