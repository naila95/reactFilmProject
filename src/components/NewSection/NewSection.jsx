import React from "react";
import classes from "./NewSection.module.css";
import img from "../../assets/movie-7-270x340.jpg";
import img2 from "../../assets/thumb1-270x340.jpg";
import img3 from "../../assets/thumb2-270x340.jpg";
import { useState } from "react";
import { Space, Rate } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function NewSection() {
  const [value, setValue] = useState(3);
  return (
    <section className={classes.newSection}>
      <h2 className={classes.newSectionHeading}>new in</h2>
      <div className={classes.sectionMain}>
        <div className="w-1/5 me-7">
          <img className="rounded-lg" src={img} />
          <h4 className={classes.filmName}>Daylight</h4>
          <div className="text-center">
            <Space>
              <Rate tooltips={desc} onChange={setValue} value={value} />
            </Space>
          </div>
        </div>
        <div className="w-1/5 me-7">
          <img className="rounded-lg" src={img2} />
          <h4 className={classes.filmName}>The end of days</h4>
          <div className="text-center">
            <Space>
              <Rate tooltips={desc} onChange={setValue} value={value} />
            </Space>
          </div>
        </div>
        <div className="w-1/5 me-7">
          <img className="rounded-lg" src={img3} />
          <h4 className={classes.filmName}>Locked in</h4>
          <div className="text-center">
            <Space>
              <Rate tooltips={desc} onChange={setValue} value={value} />
            </Space>
          </div>
        </div>
      </div>
    </section>
  );
}
