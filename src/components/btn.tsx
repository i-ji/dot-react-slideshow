import { useDispatch } from "react-redux";
import { useSelector } from "../store/index";
import { changeMain } from "../store/slideSlice";

const Btn: React.FC = () => {
  const mainImg = useSelector((state) => state.slide.mainImg);
  const thumbnailImg = useSelector((state) => state.slide.thumbnailImg);
  const dispatch = useDispatch();

  let activeIndex = mainImg.id;
  const prevImg = () => {
    activeIndex--;
    if (activeIndex < 0) {
      activeIndex = thumbnailImg.length - 1;
    }
    dispatch(changeMain(activeIndex));
  };

  const nextImg = () => {
    activeIndex++;
    if (activeIndex > thumbnailImg.length - 1) {
      activeIndex = 0;
    }
    dispatch(changeMain(activeIndex));
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
