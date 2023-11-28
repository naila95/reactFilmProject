import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SliderSection from "./components/SliderSection/SliderSection";

export default function MainLayout() {
  return (
    <>
      <Header />
      <SliderSection />

      <Outlet />

      <Footer />
    </>
  );
}
