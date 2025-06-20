import React from "react";
import dividerPhone from "./assets/pattern-divider-mobile.svg";
import diceIcon from "../public/icon-dice.svg";

const App = () => {
  return (
    <div className="bg-[#4F5D74]/40 mx-auto max-w-[343px] h-[314px] rounded-[10px] text-center px-6 py-8 relative">
      <p className="text-[#53FFAA] text-[13px] leading-[1.35] tracking-[4px] font-extrabold mb-4">
        ADVICE #117
      </p>
      <p className="text-[#CEE3E9] text-2xl leading-[1.35] font-extrabold tracking-[-0.3px]">
        “It is easy to sit up and take notice, what's difficult is getting up
        and taking action.”
      </p>
      <img src={dividerPhone} alt="deco image." className="mt-6" />
      <button className="bg-[#53FFAA] w-[64px] h-[64px] align-center rounded-4xl absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-1/2">
        <img src={diceIcon} alt="icon." className="mx-auto" />
      </button>
    </div>
  );
};

export default App;
