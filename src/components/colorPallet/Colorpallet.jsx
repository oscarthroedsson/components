import { useState } from "react";
import "./styleColorPallet.css";
import useConvertHexToHSL from "./useConvertHexToHsl";
import useColorPalletGenerator from "./useColorPalletGenerator";
import useConvertHslToHex from "./useConvertHSLToHex";

export default function Colorpallet() {
  const [color, setColor] = useState("#dedede");

  const HslColorCode = useConvertHexToHSL(color);
  const colorPalletHSL = useColorPalletGenerator(HslColorCode); //get correct colors and sorted
  const colorPalletHEX = useConvertHslToHex(colorPalletHSL); //converts the colors to HEX

  return (
    <>
      <section className="max-w-8xl mx-auto">
        <div className="py-24 w-full">
          <div className="flex flex-col justify-center items-center relative px-2">
            <div className="border-slate-200 border-2 bg-white drop-shadow-lg shadow-black flex justify-start gap-3 w-80 py-3 px-6 rounded-md sticky top-5 mb-10 z-10 sm:w-96">
              <input
                type="color"
                value={color}
                className={`inputColorCustomCss`}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Your hex code here"
                className="bg-transparent outline-none"
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />
            </div>
            <div className=" flex justify-around flex-col gap-2 w-full md:flex-wrap md:w-full md:flex-row lg:justify-center">
              {colorPalletHEX.map((color, index) => {
                return (
                  <div
                    className="relative border-2 rounded-md p-1 md:w-72 lg:w-82 xl:w-32"
                    key={index}
                  >
                    <div
                      key={index}
                      className={`w-full h-10 rounded-sm `}
                      style={{ backgroundColor: color }}
                      value={color}
                    >
                      <div
                        className={`absolute top-5 left-2 text-[12px] ${
                          index >= 5 ? "text-white" : "text-slate-900"
                        } pl-2`}
                      >
                        {color}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
