import axios from 'axios';
import "../Product/ProductCard.css"

const ProductCard = (props) => {
    //console.log(props)
    const {productData} = props
    const {user} = props

    function createPurchase(userId, _id) {
        //console.log(productData)
        //console.log(user)
        const openPurchase = user?.purchase.filter(filtrado => filtrado.isOpen === true)
        if (openPurchase.length > 0) {
            //console.log(openPurchase)
            console.log("hay que actualizar")
            axios.put("http://localhost:5005/api/purchase/asignProducts", {_id, purchaseId: openPurchase[0]._id})
                .then((productPurchase) => {
                  console.log(productPurchase)
                  axios.put("http://localhost:5005/api/purchase/total", {_id,purchaseId: productPurchase.data._id,total: productPurchase.data.total})
                    .then((valuePurchase) => {
                        console.log(valuePurchase)
/*                      const updatePurchase = props.user?.purchase
                        .filter(filtrado => filtrado._id !== _id)
                        console.log(updatePurchase)
                        props.setUser({...props.user,purchase: updatePurchase}) */
                        })
                })
        } else {
            console.log("se crea un nuevo purchase")
            axios.post("http://localhost:5005/api/purchase/create", {userId})
                .then((newPurchase) => {
                    //console.log(newPurchase)
                    axios.put("http://localhost:5005/api/purchase/asignProducts", {_id, purchaseId: newPurchase.data._id})
                        .then((productPurchase) => {
                            //console.log(productPurchase.data.total)
                            axios.put("http://localhost:5005/api/purchase/total", {_id, purchaseId: productPurchase.data._id, total: productPurchase.data.total})
                                .then((valuePurchase) => {
                                    console.log(valuePurchase)
/*                                      const updatePurchase = props.user?.purchase.filter(filtrado => filtrado._id !== _id)
                                    //console.log(updatePurchase)
                                    props.setUser({...props.user,purchase: updatePurchase
                                    }) */
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
              <button className='changeProductBtn' onClick={() => createPurchase(user?._id, productData._id)}>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ProductCard;