import './App.css';
import { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Menu from './components/Menu';
import Checkout from './components/Checkout'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const totalItems = require('./data.json');
  const [cartItems, setCartItems] = useState([]);

  function addToCart(id){
    // console.log('addToCart Function Called');
    // console.log(product);
    // console.log(typeof());
    // console.log("line 1")
    // const productExist = cartItems.find((item)=> item.name === id);
    // if(!productExist) {
    //   setCartItems([...cartItems, {totalItems.find((item))}]);
    //   return;
    // }
    // const cartList = totalItems.filter((element) => element.name === id);
    // setCartItems((cartItems) => [...cartItems, cartList[0]]);

    // const productExist = cartItems.find((item)=> item.name === id)
    // if(productExist){
    //   setCartItems(cartItems.map((item)=> item.name === id ? {...productExist, qty: productExist.qty + 1 } : item ));
    // }
    // else{
      const cartList = totalItems.filter((element) => element.name === id);
    setCartItems((cartItems) => [...cartItems, cartList[0]]);
    // }
  }
  function removeFromCart(id){
    setCartItems(cartItems.filter((item)=> item.name !== id));
  }
  
  

  function handleIncreaseQuantity(id){
    const productExist = cartItems.find((item)=> item.name === id)
    if(productExist){
      setCartItems(cartItems.map((item)=> item.name === id ? {...productExist, qty: productExist.qty + 1 } : item ));
    }
    console.log(id + "incremented");
  }
  function handleDecreaseQuantity(id){
    const productExist = cartItems.find((item)=> item.name === id)
    if(productExist){
      setCartItems(cartItems.map((item)=> ((item.name === id) && (item.qty>=1) )? {...productExist, qty: productExist.qty - 1} : item ));
    }
    console.log(id + "decreamented");
  }

  
  return (
  <DndProvider backend={HTML5Backend}>
    <div className="App">
      <Router>
          <Fragment>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                  <Route exact path="/menu" element={<Menu 
                                                        totalItems={totalItems} 
                                                        addToCart={addToCart} 
                                                        cartItems={cartItems} 
                                                        removeFromCart={removeFromCart} 
                                                        handleIncreaseQuantity={handleIncreaseQuantity} 
                                                        handleDecreaseQuantity={handleDecreaseQuantity}
                                                      />}/>
                <Route exact path='/checkout' element={<Checkout/>}/>
            </Routes>
          </Fragment>
      </Router>
    </div>
                </DndProvider>
  );
}

export default App;
