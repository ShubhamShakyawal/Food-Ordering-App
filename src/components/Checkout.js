import React ,{useRef}from 'react'
import styled from 'styled-components';
import CartOverview from './CartOverview';

const Checkout = ({cartItems,removeFromCart,handleIncreaseQuantity,handleDecreaseQuantity,totalBill}) => {
    // const [toggleDisplay,setToggle]
    const refDisplay = useRef(null);
    const handleAlert = ()=>{
        const ele = refDisplay.current;
        ele.style.display = 'block';
            
        setTimeout(() => {
            ele.style.display = 'none';
        }, 3000);
    }
    window.onclick = e => {
        if(e.target.id === "span1" || e.target.id === "span2" ||e.target.id === "span3" ){

            const ele = document.getElementsByClassName('selected');
            // console.log(e.target.id);  // to get the element
            // console.log(e.target.tagName);  // to get the element tag name alone
            const remove = ele[0];
            remove.classList.remove('selected');
            const element = e.target;
            element.classList.add('selected');
        } 
    } 
    return (
        <Container>
            <Alert ref={refDisplay} > 
                <div>Order placed</div>
                <div>Thanks for Ordering</div>
            </Alert>
            <Heading>
                <h1><img src="/images/shopping.png" alt="" /> Cart - Overview</h1>
            </Heading>
            <Contents>
                <div className='orders'>
                    {
                    cartItems.map((element)=>{
                        return(
                            <CartOverview 
                            key={element.name}
                            name={element.name}
                            img={element.img}
                            price={element.price}
                            qty={element.qty}
                            removeFromCart = {removeFromCart}
                            handleIncreaseQuantity={handleIncreaseQuantity}
                            handleDecreaseQuantity={handleDecreaseQuantity}
                            />
                            )
                        })
                    }
                </div>
                
                <div className='payments'>
                    <h2>Select payment method</h2>
                    <div>
                        <span id="span1" className='selected' ><img src="/images/cash.png" alt="" /> Cash</span>
                        <span id="span2"  ><img src="/images/card.png" alt="" /> Credit/ Debit Card</span>
                        <span id="span3" ><img src="/images/upi.png" alt="" /> UPI</span>
                    
                    </div>
                </div>
            </Contents>
            <Footer>
                <Total>
                    <span>Total</span>
                    <span>₹ {totalBill}.00</span>
                </Total>
                <PayBtn onClick={()=>handleAlert()}>
                    <span>Pay</span>
                </PayBtn>
            </Footer>
        </Container>
    )
}

const Alert = styled.div`
    height: 150px;
    width: 800px;
    background-color: rgba(197 ,243 ,197,1);
    border: 2px solid rgba(139 ,231 ,139,1);
    margin-top:20px;
    border-radius: 5px;
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center; */
    text-align: center;
    font-size: 30px;
    font-weight: 100;
    position: absolute;
    top: 100px;
    z-index: 100;
    display: none;
    padding-top: 30px;
`;

const Container = styled.div`

    font-family: "Arima", "cursive";
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(237, 246, 245,1);
    height: 100vh;
    
`;

const Heading = styled.div`
    width: 100%;
    /* position: absolute; */
    /* top:10px; */
    h1{
        text-align: center;
        /* margin: 10px; */
        letter-spacing: 3px;
        img{
            height: 30px;
        }
    }
`;

const Contents = styled.div`
    /* background-color: rgba(255 ,127 ,80,0.6) ; */
    /* background-color: #c9c9c9; */
    /* position: absolute; */
    box-sizing: content-box;
    background-color: rgba(255, 255 ,255,1);
    margin-top: 50px;
    width: 800px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    border-radius: 10px;
    padding: 30px 0;
    .orders{
        margin-right:20px;
        display: flex;
        flex-direction:column;
        align-items: flex-start;
        justify-content: center;
        /* background-color: yellowgreen; */
        overflow-y: visible;
        /* margin-top: 50px ; */
    }
    .payments{
        padding-top: 50px;
        

            display: flex;
            flex-direction: column;
            justify-content: center;
        
        /* align-items: center; */
        margin-left:20px;
        /* background-color: gray; */
        h2{
            /* padding: 40px 30px 20px 30px; */
        }
        /* border-left: 1px solid black; */
        div{
            height: 300px;
            display: flex;
            flex-direction: column;
            /* justify-content: center; */
            align-items: center;
            span{
                background-color: whitesmoke;
                width: 260px;
                height: 30px;
                margin: 10px;
                /* border: 1px solid rgb(100,100,100); */
                /* font-weight: 600; */
                font-size: 18px;
                padding: 5px;
                display: flex;
                justify-content: start;
                align-items: center;
                border-radius: 4px;
                :hover{
                    background-color: aliceblue;
                    cursor: pointer;
                }
                img{
                    height: 22px;
                    margin: 0 20px;
                }
            }
            .selected{
                background-color: rgba(186, 237, 186,1) !important;
                border: 2px solid black;
            }
        }
    }
`;

const Total = styled.div`
    display: flex;
    justify-content: space-around;
    /* align-items: center; */
    /* flex-direction: column; */
    /* margin: 0 0 30px 0; */
    font-family: "Arima", "cursive";
    font-size: 20px;
    font-weight: 800;
    color: black;
    width: 300px;
`;
const Footer = styled.div`
    margin-top: 20px;
    height: 60px;
    width: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;
const PayBtn = styled.div`
    :hover{
        cursor: pointer ;
    }
    width: 150px;
    height: 50px;
    background-color: rgba(19 ,12 ,51,1);
    color: white;
    border-radius: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    right: 50px;
    letter-spacing: 3px;
    /* bottom: 10px; */
    span{
        font-size: 25px;
        font-weight: 500;
    }
`;
export default Checkout;