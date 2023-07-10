import { useEffect, useState } from "react";
import "../styles/Preview.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

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

  return (
    <div id="preview-container">
      <div id="close" onClick={closePreview}>
        <AiOutlineCloseCircle />
      </div>
      <div
        id="current"
        style={{ backgroundImage: `url(${currentImage})` }}
      ></div>
      <div id="thumbnails">
        {previews.length > 0 &&
          previews.map((preview) => (
            <img
              src={preview}
              key={preview}
              onClick={() => setCurrentImage(preview)}
            />
          ))}
      </div>
    </div>
  );
}

export default Preview;
