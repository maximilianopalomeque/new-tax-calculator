import NavBar from "../components/NavBar";
import About from "../components/About";
import InputSection from "../components/InputSection";
import HowIsCalculated from "../components/HowIsCalculated";
import Recent from "../components/Recent";

const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <About />
      <HowIsCalculated />
      <InputSection />
      <Recent />
    </>
  );
};

export default HomeScreen;
