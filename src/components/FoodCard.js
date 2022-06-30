import React,{useState} from 'react'
import styled from 'styled-components';

// name, price, rating, weight, like,
// category
// const color = ['#ffe9f7','#fff3ea','#e8fffe','#e8f7ff','#e8f7ff','#ecf1ff','#ffe9ea','#fffde9'];
const FoodCard = (props) => {
    const {name,price,rating,like,category,img} = props;
    const [toggleLike, setToggleLike] = useState(false);   //// initial value should be like
    const handleToggleLike = like =>{
        if(like === true){
            return setToggleLike(false);
        }
        if(like === false ) setToggleLike(true);
    }
    return (
        <Card >
            <div className='header'>
                <Rating><i className="fa-solid fa-star"/>{rating}</Rating>
                <Like><i className="fa-solid fa-heart" style={toggleLike ? {color : "#bf0606"} : {color : "#e6e4e3"}} onClick={()=>{handleToggleLike(toggleLike)}}></i></Like>
            </div>
            <div>
                <Image><img src={img} alt="" /></Image>
            </div>
            <div className='footer'>
                <Name>{name}</Name>
                <Symbol> 
                    <img src={category === "veg" ? "/images/veg.png" : "/images/non_veg.png"} alt="" />
                </Symbol> 
                <Price>₹{price}</Price>
            </div>
        </Card>
    )
}
const Card = styled.div`
    height: 200px;
    width: 200px;
    background-color: #fffde9;
    border-radius: 10px;
    padding: 5px 5px;
    display: flex; 
    flex-direction: column;
    justify-content:space-between;
    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .footer{
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;

const Rating = styled.div`
    
    background-color: black;
    color: white;
    border-radius: 30px;
    padding: 3px 4px 0;
    height: 20px;
    width: 40px;
    box-sizing: content-box;
    
    & i{
        color: yellow;
        margin-right: 2px;
    }
`;

const Like = styled.div`
    border-radius: 50%;
    background-color: white;
    height: 25px;
    width: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    i{
        height: 15px;
        width: 15px;
        /* color: #bf0606; */
    }
`;

const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 120px;
        border-radius: 10px;
    }
`;

const Name = styled.div`
    font-family: 'Arima', 'cursive';
    font-weight: 600;
`;

const Price = styled.div`
    font-family: 'Arima', 'cursive';
    font-weight: 900;
`;

const Symbol = styled.div`
    height: 15px;
    margin: 0;
    img{
        height: 15px;
        position: relative;
        top:5px;
    }
`;

export default FoodCard;