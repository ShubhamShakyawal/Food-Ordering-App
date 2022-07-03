import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import FoodCard from "./FoodCard";
import Orders from "./Orders";
import { useDrop } from "react-dnd";

const Menu = ({ totalItems, addToCart, cartItems, removeFromCart,handleIncreaseQuantity,handleDecreaseQuantity, handleToggleLike }) => {
    // const [myOrders, setMyOrders] = useState();
    const [totalBill, setTotalBill] = useState(0);
    // const [totalItemsLeft, setTotalItemLeft] = useState([]);
    const [category,setCategory] = useState('all');
    const uniqueCategories = ['all','veg','non-veg'];
    useEffect(() => {
    let i = 0;
    cartItems.forEach((element) => {
      i += element.price * element.qty;
    });
    setTotalBill(i);
    // return () => {
    // }
    }, [cartItems]);

    // const element;
    // const [isOver, drop] = useDrop(() => ({
    //     accept: "image",
    //     drop: (element) => addToCart(element.name),
    //     collect: (monitor) => ({
    //         isOver: !!monitor.isOver(),
    //     }),
    // }));

    const [, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addToCart(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));
    
    //   function addImageToBoard(id){
    //     console.log(id);
    //     console.log(typeof(id));
    //   }
    
    function handleChangeCategory(event) {
        console.log(event.target.value);
        console.log(typeof(event.target.value));
        setCategory(event.target.value);
    }
    const refSelect = useRef(null);
    const toggleVisibility = ()=>{
            const ele = refSelect.current;
            if(ele.style.visibility === 'visible'){
                ele.style.visibility = 'hidden';
            }
            else{
                ele.style.visibility = 'visible';
            }
    }
    
    return (
    <Container>
        <Navigation>
        <div className="div1"></div>
        <div className="div2">
            <MenuBar>
            <div>
                <i className="fa-solid fa-bars"></i>
                <span>Menu</span>
            </div>
            </MenuBar>
        </div>
        <div className="div3"></div>
        </Navigation>
        

            <Box>
            <Filter>
                <div>
                <span onClick={()=>toggleVisibility()}>
                    <i className="fa-solid fa-filter"></i>
                    Filter
                </span>
                <select 
                    ref={refSelect}
                    value={category}
                    onChange={handleChangeCategory} 
                    >
                    {uniqueCategories.map(element => (
                        <option key={element} value={element}>
                        {element}
                        </option>
                    ))}
                </select>
                </div>
            </Filter>
            <Content>
                {totalItems.map((element) => {
                    
                return ( ( (category === "all")||(element.category === category)) ?
                    <FoodCard
                        key={element.name}
                        name={element.name}
                        price={element.price}
                        rating={element.rating}
                        like={element.like}
                        category={element.category}
                        img={element.img}
                        handleToggleLike={handleToggleLike}
                        bgColor = {element.color}
                    />
                    : null
                );
                })}
        
            </Content>
            </Box>
            <OrderList  >
                
                < div className="list" >
                    <span className="heading">My Order</span>
                    
                    { cartItems.map((element) => {
                    return (
                        <Orders 
                            key={element.name}
                            name={element.name}
                            img={element.img}
                            price={element.price}
                            qty={element.qty}
                            cartItems = {cartItems}
                            removeFromCart = {removeFromCart}
                            handleIncreaseQuantity={handleIncreaseQuantity}
                            handleDecreaseQuantity={handleDecreaseQuantity}
                        />
                    );
                    })}
                    
                    <DragAndDrop ref={drop}>
                        <span>Drag and Drop</span>
                    </DragAndDrop>
                </div>
                <Total>
                    <span>Total</span>
                    <span>₹ {totalBill}.00</span>
                </Total>
                <CheckoutBtn>
                    <div className="checkout">CheckOut</div>
                </CheckoutBtn>
            </OrderList>
        
    </Container>
    );
};

const Container = styled.div`
    /* height:625px;
    width: 1366px; */
    display: flex;
    flex-direction: row;
`;

const Navigation = styled.div`
    position: fixed;
    width: 260px;
    background-color: white;
    .div1 {
    height: 150px;
    background-color: #49d893;
    border-radius: 0 0 15px 0;
    }
    .div2 {
    background-color: #49d893;
    width: 260px;
    height: 40px;
    }
    .div3 {
    height: 435px;
    background-color: #49d893;
    border-radius: 0 15px 0 0;
    }
`;

const MenuBar = styled.div`
    width: 220px;
    height: 40px;
    background-color: white;
    color: #49d893;
    border-radius: 30px 0 0 30px;
    position: relative;
    left: 40px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    i {
    margin: 0 20px 0 40px;
    }
    font-family: "Arima", "cursive";
    font-weight: 700;
    letter-spacing: 3px;
`;

const Box = styled.div`
    position: relative;
    left: 270px;
    width: 720px;
`;

const Filter = styled.div`
    div {
        span {
            position: relative;
            left: 600px;
            padding: 5px 10px;
            background-color: rgba(0, 255, 255, 0.5);
            border-radius: 5px;
            i {
            margin-right: 6px;
            }
            font-weight: 500;
            font-family: "Arima", "cursive";
            font-size: 15px;
            cursor: pointer;
        }
        select{
            border: none;
            padding: 5px 10px;
            /* text-align: right; */
            background-color: rgba(127, 255 ,254 ,0.3);
            font-family: "Arima", "cursive";
            font-size: 13px;
            border-radius: 5px;
            visibility: hidden;
            position: relative;
            left:400px;
            /* font-weight: 600; */
        }
        
    }
    margin: 20px;
`;

const Content = styled.div`
  /* border: 1px solid black; */
  /* padding-top: 30px; */
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 35px;
    place-items: center;
`;

const OrderList = styled.div`
  /* border: 1px dashed black; */
  /* border-left: 1px solid rgba(0,0,0,0.1); */
  position: relative;
  left: 276px;
    width: 353px;
  /* background-color: rgb(250, 250, 250, 0.3); */
  /* background-color: coral; */
    height: 700px;
    box-sizing: content-box;
    /* position: fixed; */
    /* overflow-y: scroll; */
    /* left: 276px; */
    overflow-y: auto;
    .list {
        margin-top: 40px;
    }
    .heading {
    /* position: relative;
            top:100px */
    font-size: 22px;
    font-weight: 600;
    font-family: "Arima", "cursive";
    display: flex;
    justify-content: center;
    text-align: center;
    }
`;

const DragAndDrop = styled.div`
  /* background-color:aqua; */
    height: 50px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 85px;
    margin-top: 35px;
    border-radius: 7px;
    border: 2px dashed #49d893;
    color: #49d893;
    font-family: "Arima", "cursive";
    font-size: 20px;
`;

const Total = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    font-family: "Arima", "cursive";
    font-size: 18px;
    font-weight: 800;
    color: black;
`;

const CheckoutBtn = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
        /* text-align: center; */
        display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 5px;
    height: 40px;
    /* padding: 10px; */
    background-color: #49d893;
    width: 170px;
    border-radius: 9px;
    font-family: "Arima", "cursive";
    font-size: 18px;
    font-weight: 800;
    cursor: pointer;
    /* color: rgba(255, 255 ,255, 0.9); */
    }
`;

export default Menu;
