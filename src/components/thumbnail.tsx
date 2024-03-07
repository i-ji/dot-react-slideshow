import { Images } from "./slideshow";

type Thumbnail = {
  thumbnailImg: Images[];
  changeMain: (num: number) => void;
};

const Thumbnail: React.FC<Thumbnail> = ({ thumbnailImg, changeMain }) => {
  const selectThumbnails = (id: number) => {
    changeMain(id);
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
