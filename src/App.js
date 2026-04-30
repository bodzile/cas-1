
import "./style.css"
import Products from "./Components/Products"
import { useState } from "react";

let name="Bogdan";

function clickOnButton(){
  console.log("radi");
}



function App() {

  let [name,setName]=useState("Hello world");

  function changeName(e){
    setName(e.target.value);
  }

  return (
    <>
      <Products tax="25"/>
      <Products tax="10"/>
      <Products tax="30"/>

      <button onClick={clickOnButton}>{ name }</button>

      <input type="text" onInput={changeName} />
    </>
  );
}

export default App;