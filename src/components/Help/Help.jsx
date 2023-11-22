import React from "react";
import classes from "./Help.module.css";

export default function () {
  return (
    <div className="mb-20">
      <h5 className={classes.helpHeading}>
        Need help? Contact our support team on
      </h5>
      <p className={classes.helpContext}>0330 123 4567</p>
    </div>
  );
}
