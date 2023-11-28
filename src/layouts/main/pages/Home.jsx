import React from "react";
import { getData } from "../../../services/products";
import { useState, useEffect } from "react";
import NewSection from "../components/NewSection/NewSection";
import ComingSoon from "../components/ComingSoon/ComingSoon";
import MovieSlider from "../components/MovieSlider/MovieSlider";
import Help from "../components/Help/Help";
import { baseUrl } from "../../../utils/generateUrl";

export default function Home() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const fecthData = (params = "") => {
    getData(params, page).then(({ results }) => {
      setData(results);
    });
  };

  useEffect(() => {
    fecthData();
  }, []);

  useEffect(() => {
    fecthData(query);
  }, [query, page]);
  return (
    <>
      <NewSection />
      <ComingSoon
        setPage={setPage}
        data={data}
        query={query}
        setQuery={setQuery}
      />
      <MovieSlider />
      <Help />
    </>
  );
}
