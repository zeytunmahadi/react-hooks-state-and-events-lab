import React ,{useState}from "react";

function Item({ name, category }) {
  const [add , setIsAdd]=useState(false)
  function handleClick(){
    setIsAdd(!add)
    
  }
  const appClass = add ? "in-cart" : ""
  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className ={ add ? "add" : "remove"} onClick={handleClick}>
        {add ?   "Add To Cart" :"Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
