import { MemoriedCardDetails, MemoriedCardDisplay } from "./components";
import { IconClose, MainBg } from "./assets";

function App() {
  const backdrop = `${MainBg}`;
  const hero_background = {
    background: `url(${backdrop}`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className="w-full flex justify-center items-center min-h-screen"
      style={hero_background}
    >
      <div className="w-[75%] min-h-[600px] mt-[1rem] lg:mt-0  bg-[#fff] overflow-auto">
        <div className="flex justify-between">
          <div className=""></div>
          <div className="w-[60px] h-[60px] bg-[#f9fbfc] flex justify-center cursor-pointer items-center">
            <IconClose />
          </div>
        </div>
        <div className="lg:my-[2rem] my-[1rem] mx-[5rem] flex items-start lg:gap-[3rem] gap-[1rem] ">
          <div className="flex-[2]">
            <MemoriedCardDetails />
          </div>
          <MemoriedCardDisplay />
        </div>
      </div>
    </div>
  );
}

export default App;
