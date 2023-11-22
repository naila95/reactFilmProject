import "./App.css";
import Header from "./components/Header/Header";
import SliderSection from "./components/SliderSection/SliderSection";
import NewSection from "./components/NewSection/NewSection";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import MovieSlider from "./components/MovieSlider/MovieSlider";
import Help from "./components/Help/Help";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <SliderSection></SliderSection>
      <NewSection></NewSection>
      <ComingSoon></ComingSoon>
      {/* <MovieSlider></MovieSlider> */}
      <Help></Help>
      <Footer></Footer>
    </>
  );
}

export default App;
