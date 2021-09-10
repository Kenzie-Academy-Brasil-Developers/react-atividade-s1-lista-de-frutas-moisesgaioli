import './App.css';
import { useState } from "react";
import FruitList from "./components/FruitList"

function App() {

  const [fruits, setFruits] = useState([ 
    {
      name: "banana", 
      color: "yellow", 
      price: 2,
    },
    {
      name: "cherry",
      color: "red",
      price: 3,
    },
    {
      name: "strawberry", 
      color: "red", 
      price: 4,
    },
  ])

  const filterRedFruits = () => {

    setFruits(fruits.filter(item => item.color === "red"))
  }

  const totalPrice = fruits.reduce((acc, elem) => acc + elem.price, 0)
  
  return (
    <div className="App">

    <h3 className="title">Preço total = {totalPrice}</h3>
    
    <FruitList fruits={fruits} />

    <button className="button" onClick={filterRedFruits}> Filtrar frutas vermelhas </button>

    </div>
  );
}

export default App;
