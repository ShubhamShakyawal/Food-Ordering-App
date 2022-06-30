import React,{useState} from 'react'
import styled from 'styled-components';

const Orders = (props) => {
    const {name,img,price,qty} = props;
    const [quantity, setQuantity] = useState(qty);
    
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
                    <button >-</button>
                    <span>{quantity}</span>
                    <button >+</button>
                </div>
            </Quantity>
            <Price>₹ {price * quantity}</Price>
            <Cancel>
                <i className="fa-solid fa-xmark" ></i>
            </Cancel>
        </Order>
    )
}

const Order = styled.div`
    font-family: 'Arima', 'cursive';
    background-color: beige;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px 0;
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
export default Orders;