import { useContext } from "react";
import LightBox from "./LightBox";
import { LightBoxContent } from "../contexts/LightBoxContext";
function LightBoxWrapper() {
  const { toggleLightBox } = useContext(LightBoxContent);

  return (
    <div className="d-flex justify-content-center align-items-center h-100 w-100">
      <div className="lightBoxWrapper d-flex flex-column">
        <span
          className="icon icon-close align-self-end cursor-pointer"
          onClick={() => toggleLightBox(false)}
        ></span>
        <LightBox isSliderControlVisible={false}></LightBox>
      </div>
    </div>
  );
}

export default LightBoxWrapper;
