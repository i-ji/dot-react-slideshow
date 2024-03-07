import { useState } from "react";
import Thumbnail from "./thumbnail";
import Btn from "./btn";

export type Images = {
  id: number;
  png: string;
  isMain: boolean;
};

const Slideshow = () => {
  const initialImg: Images[] = [
    { id: 0, png: "pic0.png", isMain: true },
    { id: 1, png: "pic1.png", isMain: false },
    { id: 2, png: "pic2.png", isMain: false },
  ];
  const [thumbnailImg, setThumbnailImg] = useState(initialImg);
  const [mainImg, setMainImg] = useState(thumbnailImg[0]);
  const activeIndex = mainImg.id;

  const changeMain = (num: number) => {
    const newImages = [...thumbnailImg];
    newImages.forEach((image) => {
      image.isMain = false;
    });
    newImages[num].isMain = true;

    setMainImg(newImages[num]);
    setThumbnailImg(newImages);
  };

  // const selectThumbnails = (id: number) => {
  //   changeMain(id);
  // };

  //   const prevImg = () => {
  //     activeIndex--;
  //     if (activeIndex < 0) {
  //       activeIndex = thumbnailImg.length - 1;
  //     }
  //     changeMain(activeIndex);
  //   };

  //   const nextImg = () => {
  //     activeIndex++;
  //     if (activeIndex > thumbnailImg.length - 1) {
  //       activeIndex = 0;
  //     }
  //     changeMain(activeIndex);
  //   };

  return (
    <main className=" w-64 mx-auto mt-4">
      <img
        src={`../../public/MySlideshow/${mainImg.png}`}
        width="256"
        height="192"
      />

      {/* <div className="flex gap-2 my-2">
        <button
          className="w-[124px] border border-gray-300 rounded-[4px] box-border py-1"
          onClick={prevImg}
        >
          ←
        </button>
        <button
          className="w-[124px] border border-gray-300 rounded-[4px] box-border py-1"
          onClick={nextImg}
        >
          →
        </button>
      </div> */}

      {/* <div className="flex justify-between">
        {thumbnailImg.map((img) => {
          return (
            <img
              key={img.id}
              src={`../../public/MySlideshow/${img.png}`}
              width="80"
              height="60"
              className={`cursor-pointer ${
                img.isMain ? "opacity-100" : "opacity-40"
              } `}
              onClick={() => selectThumbnails(img.id)}
            />
          );
        })}
      </div> */}
      <Btn
        changeMain={changeMain}
        activeIndex={activeIndex}
        thumbnailImg={thumbnailImg}
      />
      <Thumbnail thumbnailImg={thumbnailImg} changeMain={changeMain} />
    </main>
  );
};
export default Slideshow;
