
import "./style.css"
import siteLogo from "./logo.svg"
import Products from "./Components/Products"

function App() {
  return (
    <>
      <Products tax="25"/>
      <Products tax="10"/>
      <Products tax="30"/>
    </>
  );
}

export default App;