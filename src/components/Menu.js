import React from 'react'
import styled from 'styled-components';
import FoodCard from './FoodCard';
import {Data} from '../Data';
import Orders from './Orders';
import Cart from './Cart';
const Menu = () => {
    
    return (
        <Container>
            <Navigation>
                <div className='div1'></div>
                <div className='div2'>
                <MenuBar>
                        <div>
                            <i className="fa-solid fa-bars"></i>
                            <span>Menu</span>
                        </div>
                </MenuBar>
                    </div>
                <div className='div3'></div>
            </Navigation>
            <Box>
                <Filter>
                <div>
                    <span>
                        <i className="fa-solid fa-filter"></i>
                        Filter
                    </span>
                    
                </div>
                </Filter>
                <Content>
            
                {  Data.map((element)=>{
                    return <FoodCard key={element.name}
                    name={element.name}
                    price={element.price}
                    rating={element.rating}
                    like={element.like}
                    category={element.cateogry}
                    img={element.img}
                    />
                    
                    })
                }
                </Content>
            </Box>
            <OrderList>
                <Orders name = "chowmein" img = "/images/chowmein.jpg" price = "150" qty = "2" />
                <Orders name = "chowmein" img = "/images/chowmein.jpg" price = "150" qty = "2" />
                <Orders name = "chowmein" img = "/images/chowmein.jpg" price = "150" qty = "2" />
                <Orders name = "chowmein" img = "/images/chowmein.jpg" price = "150" qty = "2" />
            </OrderList>
        </Container>
    )
}

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
    .div1{
        height: 150px;
        background-color: #49d893;
        border-radius: 0 0 15px 0 ;
    }
    .div2{
        background-color: #49d893;
        width: 260px;
        height: 40px;
    }
    .div3{
        height: 435px;
        background-color:#49d893;
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
        i{
            margin: 0 20px 0 40px;
        }
`;

const Box = styled.div`
position: relative;
left: 270px;
width:720px;
`;

const Filter = styled.div`
    div{
        span{
            position: relative;
            left: 600px;
            padding: 5px 10px;
            background-color: rgba(0, 255, 255,0.5);
            border-radius: 5px;
            i{
                margin-right: 6px;
            }
            font-weight: 500;
            font-family: 'Arima', 'cursive';
            font-size: 15px;
            cursor: pointer;
        }
    }
    margin: 20px;
`;

const Content = styled.div`
        /* border: 1px solid black; */
        /* padding-top: 30px; */
        margin-top: 10px;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-row-gap: 35px;
        place-items: center;
`;

const OrderList = styled.div`
        /* border: 1px dashed black; */
        position: relative;
        left: 269px;
        width: 360px;
        background-color: rgb(250, 250, 250, 0.5);;
`;

export default Menu;
