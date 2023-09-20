import { useContext, useState } from "react";

import Image from "next/image";

import productImage1 from "../../../assets/images/image-product-1.jpg";
import productImage2 from "../../../assets/images/image-product-2.jpg";
import productImage3 from "../../../assets/images/image-product-3.jpg";
import productImage4 from "../../../assets/images/image-product-4.jpg";
import productThumbnail1 from "../../../assets/images/image-product-1-thumbnail.jpg";
import productThumbnail2 from "../../../assets/images/image-product-2-thumbnail.jpg";
import productThumbnail3 from "../../../assets/images/image-product-3-thumbnail.jpg";
import productThumbnail4 from "../../../assets/images/image-product-4-thumbnail.jpg";
import { LightBoxContent } from "../contexts/LightBoxContext";

function LightBox({ isSliderControlVisible }: any) {
  const { isLightBoxVisible, toggleLightBox } = useContext(LightBoxContent);
  const [sliderTranslateX, setSliderTranslateX] = useState(0);

  const [productImage, setProductImage] = useState({
    image: productImage1,
    key: 1,
  });

  const nextImage = () => {
    if (productImage.key < 4) {
      let tempKey = productImage.key + 1;
      setMainProductImage(tempKey);
    }
  };
  const previousImage = () => {
    if (productImage.key > 1) {
      let tempKey = productImage.key - 1;
      setMainProductImage(tempKey);
    }
  };

  const setMainProductImage = (key: number) => {
    switch (key) {
      case 2:
        setSliderTranslateX(-100);
        setProductImage({ image: productImage2, key });
        break;
      case 3:
        setSliderTranslateX(-200);
        setProductImage({ image: productImage3, key });
        break;
      case 4:
        setSliderTranslateX(-300);
        setProductImage({ image: productImage4, key });
        break;
      case 1:
      default:
        setSliderTranslateX(0);
        setProductImage({ image: productImage1, key });
        break;
    }
  };

  const toggleLightBoxView = () => {
    if (isSliderControlVisible) {
      toggleLightBox(!isLightBoxVisible);
    }
  };

  return (
    <div className="position-relative">
      <div className=" overflow-hidden">
        <span
          className={`${isSliderControlVisible ? "d-sm-none" : ""} ${
            !isSliderControlVisible ? "start-0" : ""
          }
          icon-previous-container  position-absolute translate-middle`}
          onClick={() => previousImage()}
        >
          <span className="icon icon-previous"></span>
        </span>

        <div
          className={"slider d-flex cursor-pointer "}
          style={
            {
              "--slider-translateX": sliderTranslateX + "%",
            } as any
          }
          onClick={() => toggleLightBoxView()}
        >
          <Image
            src={productImage1}
            alt="Picture of the shoes"
            className="product-img my-sm-4 img-fluid"
          />
          <Image
            src={productImage2}
            alt="Picture of the shoes"
            className="product-img my-sm-4 img-fluid"
          />
          <Image
            src={productImage3}
            alt="Picture of the shoes"
            className="product-img my-sm-4 img-fluid"
          />
          <Image
            src={productImage4}
            alt="Picture of the shoes"
            className="product-img my-sm-4 img-fluid"
          />
        </div>

        <span
          className={`${isSliderControlVisible ? "d-sm-none" : ""} ${
            !isSliderControlVisible ? "start-100" : ""
          }
          icon-next-container  position-absolute translate-middle`}
          onClick={() => nextImage()}
        >
          <span className="icon icon-next "></span>
        </span>
      </div>
      <div className="product-thumbnails d-none d-sm-flex justify-content-between">
        <div
          className={`${
            productImage.key === 1 ? "active" : ""
          } productImage product-thumbnail me-1  rounded-3 overflow-hidden`}
          onClick={() => setMainProductImage(1)}
        >
          <Image
            src={productThumbnail1}
            alt="Picture of the shoes"
            className="img-fluid"
          />
        </div>
        <div
          className={`${
            productImage.key === 2 ? "active" : ""
          } productImage product-thumbnail mx-1  rounded-3 overflow-hidden`}
          onClick={() => setMainProductImage(2)}
        >
          <Image
            src={productThumbnail2}
            alt="Picture of the shoes"
            className="img-fluid"
          />
        </div>
        <div
          className={`${
            productImage.key === 3 ? "active" : ""
          } productImage product-thumbnail mx-1  rounded-3 overflow-hidden`}
          onClick={() => setMainProductImage(3)}
        >
          <Image
            src={productThumbnail3}
            alt="Picture of the shoes"
            className="img-fluid"
          />
        </div>
        <div
          className={`${
            productImage.key === 4 ? "active" : ""
          } productImage product-thumbnail ms-1  rounded-3 overflow-hidden`}
          onClick={() => setMainProductImage(4)}
        >
          <Image
            src={productThumbnail4}
            alt="Picture of the shoes"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default LightBox;
