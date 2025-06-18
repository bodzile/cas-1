
import "./style.css"
import siteLogo from "./logo.svg"

const name="Bogdan";
const paragraphColor="green";
let theme="dark-mode";

function getTime(){
  let date=new Date();
  let time=date.getHours();
  
  if(time >12){
    theme="dark-mode";
  }
  else{
    theme="light-mode";
  }
}

function App() {
  getTime();
  return (
    <div className={theme}>
      <h1>Pozdrav ja sam {name}</h1>
      <img alt="random" src={siteLogo}/>
      <p style={{color: paragraphColor}}>Ovo je moj prvi react app</p>
    </div>
  );
}

export default App;