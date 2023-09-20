import { createContext, useState } from "react";

export const LightBoxContent = createContext({
  isLightBoxVisible: false,
  toggleLightBox: (visiblity: boolean): any => {},
});

function LightBoxContextProvider({ children }: any) {
  const [isLightBoxVisible, toggleLightBox] = useState(false);

  return (
    <LightBoxContent.Provider
      value={{ isLightBoxVisible, toggleLightBox } as any}
    >
      {children}
    </LightBoxContent.Provider>
  );
}

export default LightBoxContextProvider;
