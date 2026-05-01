
import React from "react"
import {useState} from "react";

function Products(props){

    let [products, setProducts] = useState({
        "iPhone 14" : 1000,
        "iPhone15" : 1500,
        "Samsung s23 Ultra": 2300
    });

    let [newProductName, setNewProductName] = useState();
    let [newProductPrice, setNewProductPrice] = useState();

    function deleteProducts(e){
        setProducts({});
        e.target.remove();
    }

    function addProduct(e){
        e.target.closest("div").querySelectorAll("input").forEach(e=> e.value="");
        setProducts({
            ...products,
            [newProductName]: newProductPrice
        });
    }


    return (
        <>
            <button onClick={deleteProducts}>Delete products</button>
            {Object.entries(products).map( ([phone,price]) => {
                return <p key={phone}>{ phone } , price: ${ CalculateTax(price,props.tax) } </p>
            })}
            <div>
                <input onInput={e => setNewProductName(e.target.value)} placeholder="Unesite ime proizvoda" type="text"/>
                <input onInput={e => setNewProductPrice(e.target.value)} placeholder="Unesite cenu proizvoda" type="number"/>
                <button onClick={addProduct}>Add new product</button>
            </div>
        </>
    );
}

function CalculateTax(price, tax) {
    return (price * (1+(tax/100))).toFixed(2) ;
}

export default Products;