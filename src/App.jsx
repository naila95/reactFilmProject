import Header from "./components/Header/Header";
import SliderSection from "./components/SliderSection/SliderSection";
import NewSection from "./components/NewSection/NewSection";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import MovieSlider from "./components/MovieSlider/MovieSlider";
import Help from "./components/Help/Help";
import Footer from "./components/Footer/Footer";
import "@splidejs/react-splide/css";
import { getData } from "./services/products";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [oldData, setOldData] = useState([]);
  useEffect(() => {
    getData().then(({ results }) => {
      console.log(results);
      setData(results);
      setOldData(results);
    });
  }, []);

  useEffect(() => {
    console.log(oldData);
    setData(
      oldData.filter((item) => {
        if (item.title.toLowerCase().includes(query.toLowerCase())) {
          return item;
        }
      })
    );
  }, [query]);

  return (
    <>
      <Header></Header>
      <SliderSection />
      <NewSection></NewSection>
      <ComingSoon data={data} query={query} setQuery={setQuery}></ComingSoon>
      <MovieSlider></MovieSlider>
      <Help></Help>
      <Footer></Footer>
    </>
  );
}

export default App;
