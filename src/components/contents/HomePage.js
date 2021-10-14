import React from "react";
import Image from "../Image";
import NavBar from "../NavBar";
import gif from "../../assets/gif1.gif";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/colorful.jpg";
import img6 from "../../assets/yellow1.jpg";
import img7 from "../../assets/yellow2.jpg";
import img8 from "../../assets/yellow3.jpg";

/* rfce */
function HomePage() {
  return (
    <div>
      <NavBar />

      <div class="imageBoxOne">
        <div class="imageBoxOneOuter">
          <div class="imageBoxOneContainer">
            <img class="image1" src={gif} alt="cant load"></img>
            <div class="centered">Fall Winter 2021</div>
            <div class="centered1">New collection to discover.</div>
            <div class="centered2">
              <div class="button1">
                <button class="for">For Him</button>
              </div>

              <div class="button2">
                <button class="for">For Her</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="imageBoxTwo">
        <div class="imageBoxTwoContainer">
          <img class="image2" src={img2} alt="cant load"></img>
          <img class="image2" src={img3} alt="cant load"></img>
          <img class="image2" src={img4} alt="cant load"></img>
        </div>
      </div>

      <div class="imageBoxThree">
        <div class="imageBoxThreeContainer">
          <img class="image3" src={img5} alt="cant load"></img>
        </div>
      </div>

      <div class="imageBoxFour">
        <div class="imageBoxFourContainer">
          <img class="image2" src={img6} alt="cant load"></img>
          <img class="image2" src={img7} alt="cant load"></img>
          <img class="image2" src={img8} alt="cant load"></img>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
