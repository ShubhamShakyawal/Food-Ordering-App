import React from 'react'
import styled from 'styled-components';

const CartOverview = (props) => {
    const {name,img,price,qty,removeFromCart,handleIncreaseQuantity,handleDecreaseQuantity} = props;
    // const [quantity, setQuantity] = useState(qty);

    return (
        <Order>
            <Image>
                <img src={img} alt ="" />
            </Image>
            <Name>
                <span>{name}</span>
            </Name>
            <Quantity>
                <div>
                    <button  onClick={()=>handleDecreaseQuantity(name)}>-</button>
                    <span>{qty}</span>
                    <button onClick={()=>handleIncreaseQuantity(name)}>+</button>
                </div>
            </Quantity>
            <Price>₹ {price * qty}</Price>
            <Cancel>
                <i className="fa-solid fa-xmark"  onClick={()=>{removeFromCart(name)}}></i>
            </Cancel>
        </Order>
    )
}

const Order = styled.div`
    border-radius: 20px;
    font-family: 'Arima', 'cursive';
    /* background-color: rgba(200,200,200,0.5); */
    background-color: #ff7f5040;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px 7px;
    width: 400px;
    /* margin: 0 3px; */
`;

const Image = styled.div`
    height: 40px;
    padding: 5px;
    img{
        height: 40px;
        border-radius: 10px;
    }
`;

const Name = styled.div`
    /* font-weight: 600; */
`;

const Quantity = styled.div`
    div{
        display: flex;
        justify-content: space-between;
        border-radius: 12px;
        border: 1px solid aqua;
        box-sizing: content-box;
        button{
            padding: 0 3px;
            background-color: transparent;
            border: none;
            margin: 2px 4px;
            cursor: pointer;
            
        }
        span{
            margin: 0 5px;
        }
    }   
`;

const Price = styled.div`
`;

const Cancel = styled.div`
    i{
        cursor: pointer;
    }
    i:hover{
        color: #cb1313;
    }
`;
export default CartOverview;