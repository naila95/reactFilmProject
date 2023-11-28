import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleData } from "../../../services/products";
import img from "../../../assets/thumb1-270x340.jpg";
import { useEffect } from "react";
import { getPath } from "../../../utils/getDynamicImgPath";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  const getData = () => {
    getSingleData(movieId)
      .then((res) => {
        setMovie(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="container px-[8rem] py-[2rem]">
        <h3 className="text-[#ec7532] font-light text-[18px] uppercase tracking-[1.7px]">
          {movie.title}
        </h3>
        <div className="flex justify-start">
          <div className="w-[24%] my-5">
            <img src={getPath(movie.backdrop_path)} className="rounded-md" />
          </div>
          <div className="w-[40%]">
            <h1 className="my-5 text-2xl text-color-[#101010] font-thin">
              The plot
            </h1>
            <p className="text-base text-color-[#717171]">{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
