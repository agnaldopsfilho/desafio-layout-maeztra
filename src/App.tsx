import React from "react";
import "./App.css";
import { HeaderDesktop, HeaderMobile } from "./components/Header";
import useIsMobile from "./hooks/device";
import Modal from "./components/Modal";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const isMobile = useIsMobile();

  return (
    <>
      <Modal />
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
      <Home />
      <Footer />
    </>
  );
}

export default App;
