import React, { useRef } from "react";
import classes from "./ComingSoon.module.css";
import { Link } from "react-router-dom";
import { Pagination } from "antd";

export default function ComingSoon({ data, setQuery, setPage }) {
  const inpRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    setQuery(inpRef.current.value);
  };
  const onPaginate = (pageNumber) => {
    setPage(pageNumber);
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
        {data.map((movie) => {
          if (movie.backdrop_path) {
            return (
              <div key={movie.id} className="flex mt-[20px]">
                <Link to={`/home/${movie.id}`} className="w-[300px]">
                  <img
                    className={classes.productImg}
                    src={
                      "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
                    }
                  />
                </Link>
                <div className="ml-4 w-[70%]">
                  <h3 className={classes.genre}></h3>
                  <h1 className={classes.movieName}>{movie.title}</h1>
                  <p className={classes.movieInfo}>{movie.overview}</p>
                  <p className={classes.movieLan}>
                    LANGUAGE:
                    <span className={classes.time}>
                      {movie.original_language}
                    </span>
                  </p>
                  <p className={classes.movieLan}>
                    DATE:
                    <span className={classes.time}>{movie.release_date}</span>
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="flex justify-center">
        <Pagination
          defaultPageSize={20}
          onChange={onPaginate}
          className="mt-8"
          defaultCurrent={1}
          total={10000}
          showSizeChanger={false}
        />
      </div>
    </section>
  );
}
