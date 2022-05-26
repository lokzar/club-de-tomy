import React from "react";
import "./PurchaseResumee.css"
import { useNavigate } from "react-router-dom";
import * as PATHS from "../utils/paths";
import ProductClosedCard from "../components/Product/ProductClosedPurchase";


const PurchaseResumee = (props) => {
    const navigate = useNavigate();
    const navigateLandingPage=()=>{
        navigate(`/:${props.user?._id}`)
    }
    const{user}=props
    console.log("user", user)
    const pendingPurchase = user?.purchase.filter(filtrado => filtrado.isPending === true && filtrado.isOpen===false)
    console.log("pendingPurchase", pendingPurchase)
    const sortPendig=pendingPurchase.sort(function compare(a, b) {
        var dateA = new Date(a.createdAt);
        var dateB = new Date(b.createdAt);
        return dateB - dateA;
        });


    return (
    <div className="purchaseResumee">
        <h1>Genial!</h1>
        <h2>Ya puedes recoger tus productos en recepción</h2>
        <h3>Muestra tu compra pendiente para que te entreguen tus artículos</h3>
        <div>
            <h3>Orden de Compra:</h3>
            <h4>{sortPendig[0]?._id}</h4>
            <div>
            {sortPendig[0]?.product.map((product,index)=>
                <ProductClosedCard key={index} productData={product} user={props.user} setUser={props.setUser} />
            )}
            </div>
            <button onClick={navigateLandingPage}>Regresar a tu perfil</button>
        </div>
    </div>
    );
    };
    
    export default PurchaseResumee;