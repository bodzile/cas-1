
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Products from "./Components/Products"
import { useState } from "react";


function App() {

  let [tax, setTax] = useState(0);

  const changeTax = e => setTax(e.target.value);


  return (
    <>
      <Products tax={tax}/>
        <div className="p-3">
            <h4>Unesite taksu: </h4>
            <input placeholder='taksa' className="form-control w-25" type="text" onInput={changeTax} />
        </div>

    </>
  );
}

export default App;