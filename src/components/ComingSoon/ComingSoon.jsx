import React, { useRef } from "react";
import classes from "./ComingSoon.module.css";

export default function ComingSoon({ data, query, setQuery }) {
  const inpRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    setQuery(inpRef.current.value);
  };

  return (
    <section className={classes.comingSoonSection}>
      <div className={classes.sectionHeading}>
        <div>
          <h3 className={classes.comingSoonSectionHeading}>Popular Movies</h3>
        </div>
        <div className="flex justify-between align-center">
          <form onSubmit={submitHandler}>
            <input ref={inpRef} className={classes.inp} type="text" />
            <button className={classes.btn} type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {data.map((product) => {
          if (product.backdrop_path) {
            return (
              <div className="flex mt-[20px]">
                <img
                  className={classes.productImg}
                  src={
                    "https://image.tmdb.org/t/p/w500" + product.backdrop_path
                  }
                  alt=""
                />
                <div className="ml-4">
                  <h3 className={classes.genre}></h3>
                  <h1 className={classes.movieName}>{product.title}</h1>
                  <p className={classes.movieInfo}>{product.overview}</p>
                  <p className={classes.movieLan}>
                    LANGUAGE:
                    <span className={classes.time}>
                      {product.original_language}
                    </span>
                  </p>
                  <p className={classes.movieLan}>
                    DATE:
                    <span className={classes.time}>{product.release_date}</span>
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
