import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div class="footer">
      <div class="finalCName">
        <Link to="/">A L A I U</Link>
      </div>
      <div class="lower">
        <div class="lowerbox location">
          <LocationOnOutlinedIcon
            class="locationIcon"
            style={{ fill: "white" }}
          />
          Philippines
        </div>
        <div class="lowerbox two">Newsletter</div>
        <div class="lowerbox three">Contact</div>
        <div class="lowerbox four">Apps</div>
        <div class="lowerbox five">Follow Us</div>
        <div class="lowerbox six">Legal &amp; Privacy</div>
        <div class="lowerbox seven">Cookies</div>
        <div class="lowerbox eight">Jobs</div>
        <div class="lowerbox nine">Sitemap</div>
      </div>
      <div class="copyright">
        Copyright &copy; {new Date().getFullYear()}{" "}
        {/* Dynamic year using js */} Paolo Dagdag
      </div>
    </div>
  );
}

export default Footer;
