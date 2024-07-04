
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import React, {useState}from "react";

function App() {
  const [mode,setIsMode] = useState(false)
  function handleClick(){
    setIsMode(!mode)
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = mode ? "App dark" : "App light"
 return (
    <div className={appClass}>


      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
        {mode ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
