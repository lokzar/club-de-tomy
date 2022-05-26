import axios from "axios";
import React from "react";
import ProductCard from "../components/Product/ProductCard";
import {useState, useEffect} from "react";

const Tiendita = (props) => {
    const[products,setProducts]=useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/product/list`)
            .then(products => {setProducts(products.data)})
            .catch(console.log)
    }, [])
    return (
        <div>
            <h1>Tiendita</h1>
        <div className="products">    
            {products.map(product=>
                <ProductCard key={product._id} productData={product} user={props.user} setUser={props.setUser}/>
            )}
            </div>
        </div>
    );
};

export default Tiendita;