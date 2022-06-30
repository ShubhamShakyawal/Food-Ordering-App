import './App.css';
import { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Menu from './components/Menu';
import Checkout from './components/Checkout'

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="App">
      <Router>
          <Fragment>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/menu" element={<Menu/>}/>
                <Route exact path='/checkout' element={<Checkout/>}/>
            </Routes>
          </Fragment>
      </Router>
    </div>
  );
}

export default App;
