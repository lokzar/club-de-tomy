import axios from "axios";
import React from "react";
import ProductCard from "../components/Product/ProductCard";
import {useState, useEffect} from "react";

const ProtectedPage = (props) => {
    const[products,setProducts]=useState([])
    useEffect(() => {
        axios
            .get("http://localhost:5005/api/product/list")
            .then(products => {setProducts(products.data)})
            .catch(console.log)
    }, [])
    return (
        <div>
            <h1>Tiendita</h1>
            
            {products.map(product=>
                <ProductCard key={product._id} productData={product}/>
            )}
            

        </div>
    );
};

export default ProtectedPage;