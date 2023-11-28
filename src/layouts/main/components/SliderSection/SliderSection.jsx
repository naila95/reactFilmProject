import React from "react";
import { Carousel } from "antd";
import classes from "./SliderSection.module.css";

export default function SliderSection() {
  return (
    <div>
      <Carousel autoplay>
        <div className={classes.slider1}>
          <h4 className={classes.action}>ACTION, ADVENTURE, COMEDY</h4>
          <h1 className={classes.heading}>Up in smoke: The remake</h1>
          <p className={classes.content}>
            Claritas est etiam processus dynamicus, qui sequitur mutationem
            consuetudium lectorum. Mirum est <br /> notare quam littera gothica,
            quam nunc putamus parum claram, anteposuerit litterarum formas
            <br />
            humanitatis per seacula quarta decima et quinta decima.
          </p>
          <a href="" className={classes.btnPlay}>
            play trailer
          </a>
        </div>
        <div className={classes.slider2}>
          <h4 className={classes.action}>ACTION, ADVENTURE, COMEDY</h4>
          <h1 className={classes.heading}>Fight club: Round 2</h1>
          <p className={classes.content}>
            Claritas est etiam processus dynamicus, qui sequitur mutationem
            consuetudium lectorum. Mirum est <br /> notare quam littera gothica,
            quam nunc putamus parum claram, anteposuerit litterarum formas
            <br />
            humanitatis per seacula quarta decima et quinta decima.
          </p>
          <a href="" className={classes.btnPlay}>
            play trailer
          </a>
        </div>
        <div className={classes.slider3}>
          <h4 className={classes.action}>ACTION, ADVENTURE, COMEDY</h4>
          <h1 className={classes.heading}>Behind enemy lines</h1>
          <p className={classes.content}>
            Claritas est etiam processus dynamicus, qui sequitur mutationem
            consuetudium lectorum. Mirum est <br /> notare quam littera gothica,
            quam nunc putamus parum claram, anteposuerit litterarum formas
            <br />
            humanitatis per seacula quarta decima et quinta decima.
          </p>
          <a href="" className={classes.btnPlay}>
            play trailer
          </a>
        </div>
      </Carousel>
    </div>
  );
}
