import { Images } from "./slideshow";

type Btn = {
  thumbnailImg: Images[];
  changeMain: (num: number) => void;
  activeIndex: number;
};

const Btn: React.FC<Btn> = ({ changeMain, activeIndex, thumbnailImg }) => {
  const prevImg = () => {
    activeIndex--;
    if (activeIndex < 0) {
      activeIndex = thumbnailImg.length - 1;
    }
    changeMain(activeIndex);
  };

  const nextImg = () => {
    activeIndex++;
    if (activeIndex > thumbnailImg.length - 1) {
      activeIndex = 0;
    }
    changeMain(activeIndex);
  };
  return (
    <div className="flex gap-2 my-2">
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
    </div>
  );
};
export default Btn;
