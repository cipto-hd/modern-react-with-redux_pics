import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map(({ id, urls, alt_description }) => (
        <ImageCard key={id} {...{ urls, alt_description }} />
      ))}
    </div>
  );
};

export default ImageList;
