import axios from "axios";
import React from "react";
import PurchaseCard from "../components/PurchaseCard/PurchaseCard";
import {useState, useEffect} from "react";
import "./Carrito.css"

const Carrito = (props) => {
    const[purchase,setPurchase]=useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/purchase/list`)
            .then(purchase => {setPurchase(purchase.data)})
            .catch(console.log)
    }, [])
    return (
        <div className="carrito">
            <h1>Carrito</h1>
        <div className="purchase">    
                <PurchaseCard  purchaseData={purchase} setPurchase={setPurchase} user={props.user} setUser={props.setUser}/>
            </div>
        </div>
    );
};

export default Carrito;