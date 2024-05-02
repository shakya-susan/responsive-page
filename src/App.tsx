import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { card } from "./data/cardData";

const bgColor = "#1A1B1E";
const bgRed = "#FF0000";
const bgGreen = "#00FF00";
const bgBlue = "#0000FF";

const App = () => {
  const [colors, setColors] = useState(bgColor);

  // const [black, setBlack] = useState(true);
  // const [red, setRed] = useState(false);
  // const [green, setgreen] = useState(false);
  // const [blue, setblue] = useState(false);

  return (
    <div
      className={`w-full  h-full lg:h-screen   flex flex-col items-center justify-center gap-12 sm:gap-14 lg:gap-16 text-[#ffffff] `}
      style={{ backgroundColor: colors }}
    >
      <div className="w-full  flex justify-center  flex-col items-center text-[#ffffff] gap-6 sm:gap-10 lg:gap-12 pt-4 sm:pt-2">
        {/* this is the text wrapper container */}
        <div className="flex justify-center items-center flex-col gap-2 sm:gap-3 lg:gap-4">
          <div>
            <h1 className=" text-lg sm:text-2xl lg:text-4xl text-center sm:leading-[45px] font-extrabold">
              Turn collaboration into innovation
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2 w-full text-center ">
            <p className="  text-[10px] sm:text-sm lg:text-lg text-[#3F83F8] leading-[27px] font-[500] text-center">
              Learn more about inner source
            </p>
            <FaArrowRightLong
              height="15px"
              width="20px"
              className="text-[#3F83F8] "
            />
          </div>
        </div>

        {/* this is the card wrapper container */}
        <div className="flex gap-12  flex-col lg:flex-row items-center justify-center w-full ">
          {card.map((data) => (
            <div className="flex flex-col w-48 sm:w-[15rem]  lg:w-[19.5rem] h-full gap-4 rounded-lg">
              <img
                src={data.img}
                alt="img"
                className="w-full  h-56 sm:h-64 lg:h-72 "
              />
              <div className=" flex flex-col gap-2.5 w-full">
                <h1 className="text-base lg:text-xl leading-6 font-bold">
                  {" "}
                  {data.h1}
                </h1>
                <p className="text-xs lg:text-base text-gray-400 font-normal">
                  {" "}
                  {data.p}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* this is the button wrapper div
       */}
      <div className="flex gap-2 sm:gap-7 flex-col  sm:flex-row items-center w-full justify-center  sm:pb-3 lg:pb-2">
        <button
          className="  w-full sm:w-16 lg:w-20  p-1.5 sm:p-2 border border-white  rounded-sm sm:rounded-lg flex items-center justify-center  gap-1"
          onClick={() => {
            setColors(bgColor);
          }}
        >
          <img src="/Vector.png" alt="icon" className="w-[12px] h-[12px]" />
          <span className="text-[10px]  lg:text-xs font-medium leading-18px ">
            Black
          </span>
        </button>
        {/* button red */}
        <button
          className="  w-full sm:w-16 lg:w-20  p-1.5 sm:p-2 border border-white  rounded-sm sm:rounded-lg flex items-center justify-center  gap-1"
          onClick={() => {
            setColors(bgRed);
          }}
        >
          <img src="/Vector.png" alt="icon" className="w-[12px] h-[12px]" />
          <span className="text-[10px]  lg:text-xs font-medium leading-18px ">
            Red
          </span>
        </button>
        {/* button green */}
        <button
          className="  w-full sm:w-16 lg:w-20 p-1.5 sm:p-2 border border-white  rounded-sm sm:rounded-lg flex items-center justify-center  gap-1"
          onClick={() => {
            setColors(bgGreen);
          }}
        >
          <img src="/Vector.png" alt="icon" className="w-[12px] h-[12px]" />
          <span className="text-[10px]  lg:text-xs font-medium leading-18px ">
            Green
          </span>
        </button>
        {/* button blue */}
        <button
          className="  w-full sm:w-16 lg:w-20   p-1.5 sm:p-2 border border-white  rounded-sm sm:rounded-lg flex items-center justify-center  gap-1"
          onClick={() => {
            setColors(bgBlue);
          }}
        >
          <img src="/Vector.png" alt="icon" className="w-[12px] h-[12px]" />
          <span className="text-[10px]  lg:text-xs font-medium leading-18px ">
            Blue
          </span>
        </button>
      </div>
    </div>
  );
};

export default App;
