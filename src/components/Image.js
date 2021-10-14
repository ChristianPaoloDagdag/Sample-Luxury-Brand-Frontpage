import React from "react";
import gif from "../assets/gif1.gif";

function Image() {
  return (
    <div class="image1box">
      <img class="image1" src={gif} alt="cant load"></img>
      <div class="centered">Fall Winter 2021</div>
      <div class="centered1">New collection to discover.</div>
      <div class="centered2">
        <div class="button1">
          For Him
          <hr/>
        </div>

        <div class="button2">
          For Her
          <hr/>
        </div>
      </div>
    </div>
  );
}

export default Image;
