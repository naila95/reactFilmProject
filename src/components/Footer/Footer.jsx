import React from "react";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h6>get in touch</h6>
          </div>
          <div>
            <h6>about movie star</h6>
          </div>
          <div>
            <h6>legal stuff</h6>
          </div>
          <div>
            <h6>connect with us</h6>
          </div>
        </div>
      </div>
    </footer>
  );
}
