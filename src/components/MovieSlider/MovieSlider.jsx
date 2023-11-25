import React from "react";
import img from "../../assets/movie-3.jpg";
import img2 from "../../assets/movie-10.jpg";
import img3 from "../../assets/movie-12.jpg";
import img4 from "../../assets/movie-13.jpg";
import img5 from "../../assets/movie-14.jpg";
import img6 from "../../assets/movie-15.jpg";
import img7 from "../../assets/movie-16.jpg";
import classes from "./MovieSlider.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function MovieSlider() {
  return (
    <Splide
      options={{
        gap: "25px",
        perPage: "6",
      }}
      className="bg-[#0A0909] mb-[5rem] h-[25rem] py-[3rem] px-[5rem]"
      aria-label="My Favorite Images"
    >
      <SplideSlide className={classes.movieSlide}>
        <div className={classes.imgHover}></div>
        <img src={img} />
        <h2 className="text-center text-white mt-3 font-light">The Vendetta</h2>
        <p className="text-center text-white font-light">18 April 2019</p>
      </SplideSlide>
      <SplideSlide className={classes.movieSlide}>
        <div className={classes.imgHover}></div>
        <img src={img2} />
        <h2 className="text-center text-white mt-3 font-light">The soldier</h2>
        <p className="text-center text-white font-light">18 April 2019</p>
      </SplideSlide>
      <SplideSlide className={classes.movieSlide}>
        <div className={classes.imgHover}></div>
        <img src={img3} />
        <h2 className="text-center text-white mt-3 font-light">The planets</h2>
        <p className="text-center text-white font-light">18 April 2019</p>
      </SplideSlide>
      <SplideSlide className={classes.movieSlide}>
        <div className={classes.imgHover}></div>
        <img src={img4} />
        <h2 className="text-center text-white mt-3 font-light">
          Infinite vengeance
        </h2>
        <p className="text-center text-white font-light">18 April 2019</p>
      </SplideSlide>
      <SplideSlide className={classes.movieSlide}>
        <div className={classes.imgHover}></div>
        <img src={img5} />
        <h2 className="text-center text-white mt-3 font-light">
          Lurking in the dark
        </h2>
        <p className="text-center text-white font-light">18 April 2019</p>
      </SplideSlide>
      <SplideSlide className={classes.movieSlide}>
        <div className={classes.imgHover}></div>
        <img src={img6} />
        <h2 className="text-center text-white mt-3 font-light">
          The executioner
        </h2>
        <p className="text-center text-white font-light">18 April 2019</p>
      </SplideSlide>
      <SplideSlide className={classes.movieSlide}>
        <div className={classes.imgHover}></div>
        <img src={img7} />
        <h2 className="text-center text-white mt-3 font-light">Sudden death</h2>
        <p className="text-center text-white font-light">18 April 2019</p>
      </SplideSlide>
    </Splide>
  );
}
