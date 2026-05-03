
import React from "react"
import {useState} from "react";

function Products(props){

    let [products, setProducts] = useState({
        "iPhone 14" : 1000,
        "iPhone 15" : 1500,
        "Samsung s23 Ultra": 2300
    });

    let [newProductName, setNewProductName] = useState("");
    let [newProductPrice, setNewProductPrice] = useState("");

    let [infoMessage, setInfoMessage] = useState("");

    function deleteProducts(e){
        setProducts({});
        e.target.remove();
    }

    function addProduct(e){

        if(newProductName === "" || newProductPrice === "")
            return;

        e.target.closest("div").querySelectorAll("input").forEach(e=> e.value="");

        setProducts(old => ({
            ...old,
            [newProductName]: newProductPrice
        }));
    }

    function search(e){

        const searchTerm = e.target.value.toLowerCase();
        let productNames = Object.keys(products);

        for(let product in productNames){
            let productName = productNames[product].toLowerCase();
            if(searchTerm === productName){
                setInfoMessage("Postoji proizvod");
                return;
            }
        }
        setInfoMessage("Ne postoji proizvod");

    }

    return (
        <div className="p-3">
            <h2>All products</h2>
            <button className="btn btn-danger" onClick={deleteProducts}>Delete products</button>
            <div className="d-flex m-2 gap-3 ">
                {Object.entries(products).map( ([phone,price]) => (
                    <div>
                        <h3>{phone}</h3>
                        <p>${ CalculateTax(price,props.tax) }</p>
                    </div>
                ))}
            </div>
            <p>{infoMessage}</p>
            <div>
                <input className="w-25 form-control" onInput={search} type="text" placeholder="Unesite ime za pretragu"/>
            </div>
            <div className="mt-3 w-25 d-flex flex-column gap-2">
                <h3>Dodavanje proizvoda</h3>
                <div>
                    <label className="form-label" htmlFor="">Ime proizvoda:</label>
                    <input className="form-control" onInput={e => setNewProductName(e.target.value)} placeholder="Unesite ime proizvoda" type="text"/>
                </div>
                <div>
                    <label className="form-label" htmlFor="">Cena proizvoda:</label>
                    <input className="form-control" onInput={e => setNewProductPrice(e.target.value)} placeholder="Unesite cenu proizvoda" type="number"/>
                </div>
                <button className="btn btn-success" onClick={addProduct}>Add new product</button>
            </div>
        </div>
    );
}

function CalculateTax(price, tax) {
    return (price * (1+(tax/100))).toFixed(2) ;
}

export default Products;