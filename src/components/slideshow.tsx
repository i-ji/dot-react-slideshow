// import { useState } from "react";
import Thumbnail from "./thumbnail";
import Btn from "./btn";
import { useSelector } from "../store/index";

export type Images = {
  id: number;
  png: string;
  isMain: boolean;
};

const Slideshow = () => {
  const mainImg = useSelector((state) => state.slide.mainImg);

  return (
    <main className=" w-64 mx-auto mt-4">
      <img
        src={`../../public/MySlideshow/${mainImg.png}`}
        width="256"
        height="192"
      />

      <Btn />
      <Thumbnail />
    </main>
  );
};
export default Slideshow;
