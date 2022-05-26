import NavBar from "../components/NavBar";
import About from "../components/About";
import InputSection from "../components/InputSection";
import HowIsCalculated from "../components/HowIsCalculated";

import { Divider } from "@mui/material";

const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <About />
      <HowIsCalculated />
      <InputSection />
      <Divider />
    </>
  );
};

export default HomeScreen;
