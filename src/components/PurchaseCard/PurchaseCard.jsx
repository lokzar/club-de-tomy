import axios from 'axios';
import ProductCardPurchase from "../Product/ProductPurchase"
import "../BadgeCard/BadgeCard.css"
import "../PurchaseCard/PurchaseCard.css"

    const PurchaseCard = (props) => {
        //console.log(props)
        const {purchaseData}=props
        const {user}=props
        function closePurchase(_id, balance){
            axios.put(`${process.env.REACT_APP_SERVER_URL}/purchase/closed`,{_id, balance})
                .then((closedPurchase)=>{
                    console.log(closedPurchase)
                    props.setUser({...props.user, user:closedPurchase})
                    console.log(user)
                })
                .catch(err=>console.log(err))
        }
        return (
        <div>
            {(props.purchaseData[0]?.isOpen===true && props.purchaseData[0].product.length>0)?(
        <div className='purchaseCard'>
            <div>
            <h2>Orden de compra: </h2>
            <h3>{purchaseData[0]?._id}</h3>
            <div className="productCart">    
                {purchaseData[0]?.product.map((product,index)=>
                <ProductCardPurchase key={index} productData={product} purchaseData={purchaseData[0]} setPurchase={props.setPurchase}/>
                )}
            </div>
            <h3 className='total'>Total: {purchaseData[0]?.total} Tomy Pesos</h3>
            <button className='purchaseBtn' onClick={()=>closePurchase(purchaseData[0]?._id, user?.balance)}>Comprar!</button>
            </div>
        </div>):(
            <>
            <h2>Aún no hay artículos en tu carrito</h2>
            <img className='shoppingCart' src='https://res.cloudinary.com/dz29bpftp/image/upload/v1653541085/Club-Tomy/pngaaa.com-1171984_1_lcfiez.png' alt="shopping Car"></img>
            </>
        )}
        </div>
        );
    };
    
export default PurchaseCard;