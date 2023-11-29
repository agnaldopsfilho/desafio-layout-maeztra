import React from "react";
import "./App.css";
import { HeaderDesktop, HeaderMobile } from "./components/Header";
import useIsMobile from "./hooks/device";

function App() {
  const isMobile = useIsMobile();
  return <>{isMobile ? <HeaderMobile /> : <HeaderDesktop />}</>;
}

export default App;
