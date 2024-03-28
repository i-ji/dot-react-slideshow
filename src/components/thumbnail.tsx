import { useDispatch } from "react-redux";
import { useSelector } from "../store/index";
import { changeMain } from "../store/slideSlice";

const Thumbnail: React.FC = () => {
  const thumbnailImg = useSelector((state) => state.slide.thumbnailImg);
  const dispatch = useDispatch();
  const selectThumbnails = (id: number) => {
    dispatch(changeMain(id));
  };

  return (
    <div className="flex justify-between">
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
    </div>
  );
};
export default Thumbnail;
