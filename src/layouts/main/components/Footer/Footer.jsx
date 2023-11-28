import React from "react";
import classes from "./Footer.module.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h6>get in touch</h6>
            <ul>
              <li>FAQs</li>
              <li>Give us feedback</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h6>about movie star</h6>
            <ul>
              <li>FAQs</li>
              <li>Give us feedback</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h6>legal stuff</h6>
            <ul>
              <li>FAQs</li>
              <li>Give us feedback</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h6>connect with us</h6>
            <ul>
              <li>
                <div className="flex justify-start items-center">
                  <FaTwitter className="mr-4" /> Twitter
                </div>
              </li>
              <li>
                <div className="flex justify-start items-center">
                  <FaFacebookF className="mr-4" /> Facebook
                </div>
              </li>
              <li>
                <div className="flex justify-start items-center">
                  <FaGooglePlusG className="mr-4" /> Google +
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
