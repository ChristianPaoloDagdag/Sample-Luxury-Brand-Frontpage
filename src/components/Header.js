import React from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from 'react-router-dom';

/* rfce + enter for shortcut components */
function Header() {
  return (
    <div class="header">
      <div class="top">
        <div class="location">
          <LocationOnOutlinedIcon class="locationIcon" />
          Philippines
        </div>

        <div class="customerService">
          <LocalPhoneOutlinedIcon class="customerServiceIcon" />
          Customer Service
        </div>

        <div class="center"></div>

        <div class="searchButton">
          <SearchOutlinedIcon class="searchButtonIcon" />
        </div>
      </div>

      <div class="companyName">
          <h1><Link to="/">A L A I U</Link></h1>
      </div>
    </div>
  );
}

export default Header;
