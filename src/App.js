
import "./style.css"
import Products from "./Components/Products"
import { useState } from "react";

function clickOnButton(){
  console.log("radi");
}

function App() {

  let [name,setName]=useState("Hello world");
  let [tax, setTax] = useState(0);

  const changeName = e => setName(e.target.value);
  const changeTax = e => setTax(e.target.value);


  return (
    <>
      <Products tax={tax}/>

      <button onClick={clickOnButton}>{ name }</button>

      <input type="text" onInput={changeName} />
        <input type="text" onInput={changeTax} />
    </>
  );
}

export default App;