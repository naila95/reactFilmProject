import React from "react";
import classes from "../Header/Header.module.css";
export default function Header() {
  return (
    <div className={classes.container}>
      <header>
        <div className={classes.logo}>
          <span className={classes.letterS}>S</span>
          <h3>specto</h3>
        </div>
        <div className={classes.links}>
          <ul>
            <li>
              <a className={classes.home} href="">
                home
              </a>
            </li>
            <li>
              <a href="" className={classes.news}>
                what's on
              </a>
            </li>
            <li>
              <a href="" className={classes.news}>
                news
              </a>
            </li>
            <li>
              <a href="" className={classes.news}>
                shortcodes
              </a>
            </li>
            <li>
              <a href="" className={classes.news}>
                contact us
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
