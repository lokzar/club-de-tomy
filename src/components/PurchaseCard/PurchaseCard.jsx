import axios from 'axios';
import ProductCardPurchase from "../Product/ProductPurchase"
import "../BadgeCard/BadgeCard.css"

    const PurchaseCard = (props) => {
        //console.log(props)
        const {purchaseData}=props
        const {user}=props
        //console.log(purchaseData)
        function closePurchase(_id, balance){
            axios.put(`http://localhost:5005/api/purchase/closed`,{_id, balance})
                .then((closedPurchase)=>{
                    console.log(closedPurchase)
                axios.get("http://localhost:5005/api/purchase/listClose")
                    .then((getPurchase)=>{
                        console.log(getPurchase)
                    })
                })
        }


        return (
        <div className='purchaseCard'>
            <div className='purchaseCardInfo'>
            <h3>Orden de compra: </h3>
            <h4>{purchaseData[0]?._id}</h4>
            <div className="products">    
                {purchaseData[0]?.product.map((product,index)=>
                <ProductCardPurchase key={index} productData={product} purchaseData={purchaseData[0]} setPurchase={props.setPurchase}/>
                )}
            </div>
            <p>Total: {purchaseData[0]?.total} Tomy Pesos</p>
            <button onClick={()=>closePurchase(purchaseData[0]?._id, user?.balance)}>Comprar!</button>
            </div>
        </div>
        );
    };
    
export default PurchaseCard;