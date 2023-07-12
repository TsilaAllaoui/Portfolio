import { useEffect, useState } from "react";
import "../styles/Preview.scss";
import { IoMdClose } from "react-icons/io";

function Preview({
  previews,
  setCurrentPrieviewItem,
}: {
  previews: string[];
  setCurrentPrieviewItem: (value: string) => void;
}) {
  const closePreview = () => {
    const element = document.querySelector(
      "#preview-container"
    ) as HTMLDivElement;
    element.style.visibility = "hidden";
    setCurrentPrieviewItem("");
  };

  const [currentImage, setCurrentImage] = useState(previews[0]);

  const updateThumbnail = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    preview: string
  ) => {
    const images: NodeListOf<HTMLImageElement> =
      document.querySelectorAll("#thumbnails > img");
    images.forEach((image) => (image.style.border = "none"));
    e.currentTarget.style.border = "solid 2px red";
    setCurrentImage(preview);
  };

  useEffect(() => {
    const images: NodeListOf<HTMLImageElement> =
      document.querySelectorAll("#thumbnails > img");
    images[0].style.border = "solid 2px red";
  }, []);

  return (
    <div id="preview-container">
      <div id="close" onClick={closePreview}>
        <IoMdClose />
      </div>
      <div
        id="current"
        style={{ backgroundImage: `url(${currentImage})` }}
      ></div>
      <div id="thumbnails">
        {previews.length > 0 &&
          previews.map((preview, index) => (
            <img
              src={preview}
              key={preview}
              onClick={(e) => updateThumbnail(e, preview)}
            />
          ))}
      </div>
    </div>
  );
}

export default Preview;
