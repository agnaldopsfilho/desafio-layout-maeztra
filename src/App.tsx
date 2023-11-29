import React from "react";
import "./App.css";
import { HeaderDesktop, HeaderMobile } from "./components/Header";
import useIsMobile from "./hooks/device";
import Modal from "./components/Modal";

function App() {
  const isMobile = useIsMobile();

  return (
    <>
      <Modal />
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
    </>
  );
}

export default App;
