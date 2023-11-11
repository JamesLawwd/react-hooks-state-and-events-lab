import react,{useState} from "react";


const items = [
  { id: 1, name: "Yogurt", category: "Dairy" },
  { id: 2, name: "Pomegranate", category: "Produce" },
  { id: 3, name: "Lettuce", category: "Produce" },
  { id: 4, name: "String Cheese", category: "Dairy" },
  { id: 5, name: "Cookies", category: "Dessert" },
];

function Item({ name, category }) {
  const[isincart,setincart]=useState(false)
  const[action,setAction]=useState(true)

  function handleAddToCart(){
    setincart(!isincart)
    setAction(!action)
  }
  return (
    <li className={isincart? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{action?"Add to Cart":"Remove from Cart"}</button>
    </li>
  );
}


export default items;