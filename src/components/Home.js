import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
    return (
        <Homepage>  
            <div class="pimg1">
                <div class="ptext">
                <span class="border">Welcome to Mumma's Kitchen</span>
                </div>
            </div>

            <section class="section section-light ">
                <h2>Authenticity</h2>
                <p>
                  Restro with the most Authentic Recipes.
                </p>
            </section>

            <div class="pimg2">
                <div class="ptext">
                    <span class="border trans"> </span>
                </div>
            </div>

            <section class="section section-dark">
                <h2>Walk in or Order online</h2>

            </section>

            <div class="pimg3">
                <div class="ptext">
                    <span class="border trans"> </span>
                </div>
            </div>
            <section class="section section-light">
                <h2>Check out our menu
                <Link  to="/menu"><img id='menu' src="/images/menuImage.png" alt="" /></Link>
                <img id='arrow' src="/images/arrow.png" alt="" />
                </h2>
            </section>
            
        </Homepage>
    )
}

const Homepage = styled.div`
height: 100%;
  margin: 0;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  line-height: 1.8em;
  color: #666;

.pimg1,
.pimg2,
.pimg3,
.pimg4 {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* 
        fixed = parallax
        scroll = normal
    */
  background-attachment: fixed;
}

.pimg1 {
  background-image: url("/images/kitchenFrontImage.jpg");
  height: 600px;
  min-height: 100%;
  width: 100%
  ;
}
.pimg2 {
  background-image: url("/images/foodTable.jpg");
  min-height: 400px;
}
.pimg3 {
  background-image: url("/images/table.jpg");
  min-height: 400px;
}
.pimg4{
    background-image: url("/images/27.jpg");
  /* min-height: 400px; */
  height: 200px;
}
.section {
  text-align: center;
  padding: 50px 80px;
}
.section-light {
    height: 200px;
  background-color: #f4f4f4;
  color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    font-family: 'Kaushan Script', 'cursive';
    margin: 20px;
    #menu{
        height: 200px;
        margin-left: 100px;
        border: 3px solid rgba(68, 67, 65,0.2);
        /* box-shadow: 2px 2px 2px 2px aqua; */
        border-radius: 50%;
        :hover{
            border: 3px solid rgba(68, 67, 65,0.7);
            cursor: pointer;
        }
    }
}
p{
  margin: 10px;
  font-family: 'Kaushan Script', 'cursive';
  word-spacing: 5px;
  letter-spacing: 4px;

}
}
#arrow{
    position: absolute;
    height: 150px;
    /* background-color: pink; */
    border: none;
    border-radius: 0;
    right: 100px;
    
    /* bottom:50px; */
}
.section-dark {
  background-color: #282e34;
  color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px;
  h2{
    font-size: 50px;
    font-family: 'Kaushan Script', 'cursive';
    margin: 20px;
    word-spacing: 30px;
  } 
}
.ptext {
  width: 100%;
  text-align: center;
  color: #000;
  font-size: 27px;
  letter-spacing: 8px;
  /* text-transform: uppercase; */
}
.border {
  /* background-color: #111; */
  color: #fff;
  padding: 20px;
  font-family: 'The Nautigal', 'cursive';
  /* font-weight: 700; */
  letter-spacing: 0;
  font-size: 150px;
  text-shadow: 2px 2px #ff0000;
}
.trans {
  background-color: transparent;
}

`;


export default Home;