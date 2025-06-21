import React, { useEffect, useState } from "react";
import dividerPhone from "./assets/pattern-divider-mobile.svg";
import diceIcon from "../public/icon-dice.svg";

const App = () => {
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    try {
      const data = await fetch("https://api.adviceslip.com/advice");
      const response = await data.json();
      setAdvice(response.slip);
      console.log(advice);
    } catch (error) {
      setAdvice(`Failed to fetch advice - ${error}, please try again later`);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="bg-[#4F5D74]/40 mx-auto max-w-[343px] h-[314px] rounded-[10px] text-center px-6 py-8 relative">
      <p className="text-[#53FFAA] text-[13px] leading-[1.35] tracking-[4px] font-extrabold mb-4">
        ADVICE #{advice.id}
      </p>
      <p className="text-[#CEE3E9] text-2xl leading-[1.35] font-extrabold tracking-[-0.3px]">
        {advice.advice}
      </p>
      <img src={dividerPhone} alt="deco image." className="mt-6" />
      <button
        className="bg-[#53FFAA] w-[64px] h-[64px] align-center rounded-4xl absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-1/2 hover:shadow-[0px_0px_32px_10px_rgba(83,255,170,0.4)] cursor-pointer"
        onClick={getAdvice}
      >
        <img src={diceIcon} alt="icon." className="mx-auto" />
      </button>
    </div>
  );
};

export default App;
