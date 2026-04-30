
import React from "react"


interface ProductInterface {
    [key:string]:number
}

const products:ProductInterface={
    "iPhone 14" : 1000,
    "iPhone15" : 1500,
    "Samsung s23 Ultra": 2300
};

function Products(props){
    //console.log(props.tax);
    return (
        <>
            {Object.entries(products).map( ([phone,price]) => {
                return <p>{ phone } , price: ${ CalculateTax(price,props.tax) } </p>
            })}
        </>
    );
}

function CalculateTax(price:number, tax:number):number {
    return Number( (price * (1+(tax/100))).toFixed(2) );
}

export default Products;