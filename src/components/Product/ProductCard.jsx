import axios from 'axios';
import "../Product/ProductCard.css"
import { useState } from 'react';

const ProductCard = (props) => {
  const [disable, setDisable] = useState(false);
  const [btnText,setBtnText]=useState("Agregar a carrito")
  const changeText = (text) => setBtnText(text);
    //console.log(props)
    const {productData} = props
    const {user} = props


    function createPurchase(userId, _id) {

        const openPurchase = user?.purchase.filter(filtrado => filtrado.isOpen === true)
        if (openPurchase.length > 0) {
            axios.put(`${process.env.REACT_APP_SERVER_URL}/purchase/asignProducts`, {_id, purchaseId: openPurchase[0]._id})
                .then((productPurchase) => {
                  axios.put(`${process.env.REACT_APP_SERVER_URL}/purchase/total`, {_id,purchaseId: productPurchase.data._id,total: productPurchase.data.total})
                    .then((valuePurchase) => {
                        //console.log(valuePurchase)
                        props.setUser({...props.user ,purchase: [valuePurchase.data]})
                        })
                })
        } else {

            axios.post(`${process.env.REACT_APP_SERVER_URL}/purchase/create`, {userId})
                .then((newPurchase) => {
                    axios.put(`${process.env.REACT_APP_SERVER_URL}/purchase/asignProducts`, {_id, purchaseId: newPurchase.data._id})
                        .then((productPurchase) => {
                            //console.log(productPurchase.data.total)
                            axios.put(`${process.env.REACT_APP_SERVER_URL}/purchase/total`, {_id, purchaseId: productPurchase.data._id, total: productPurchase.data.total})
                                .then((valuePurchase) => {
                                    props.setUser({...props.user ,purchase: [valuePurchase.data]})
                                })
                        })
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className='productCard'>
            <div className='productCardInfo'>
              <h3>{productData?.name}</h3>
              <img className='imgProduct' src={productData?.image} alt={productData?.name}></img>
              <p>{productData?.description}</p>
              <h4>Precio: <strong>{productData?.price}</strong> Tomy Pesos</h4>
              <button className='storeBtn' disabled={disable} onClick={() => {createPurchase(user?._id, productData._id); setDisable(true); setBtnText("Sólo puedes pedir uno")}}>{btnText}</button>
            </div>
        </div>
    );
};

export default ProductCard;