import { useContext, useState } from "react";
import Image from "next/image";

import productImg1 from "../../../assets/images/image-product-1.jpg";
import productImg2 from "../../../assets/images/image-product-2.jpg";
import productImg3 from "../../../assets/images/image-product-3.jpg";
import productImg4 from "../../../assets/images/image-product-4.jpg";
import productThumbnail1 from "../../../assets/images/image-product-1-thumbnail.jpg";
import productThumbnail2 from "../../../assets/images/image-product-2-thumbnail.jpg";
import productThumbnail3 from "../../../assets/images/image-product-3-thumbnail.jpg";
import productThumbnail4 from "../../../assets/images/image-product-4-thumbnail.jpg";
import { GlobalStoreContext } from "../contexts/GlobalStore";
import { ProductType } from "../local database/db";
import QuantityCounter from "./QuantityCounter";
import { CartContext } from "../contexts/CartContext";

function ProductPage() {
  const products = useContext(GlobalStoreContext);

  const [quantity, setQuantity] = useState(0);

  const { addProductToCart } = useContext(CartContext);

  const [productImage, setProductImage] = useState({
    image: productImg1,
    key: 1,
  });

  const setMainProductImage = (key: number) => {
    switch (key) {
      case 1:
        setProductImage({ image: productImg1, key });
        break;
      case 2:
        setProductImage({ image: productImg2, key });
        break;
      case 3:
        setProductImage({ image: productImg3, key });
        break;
      case 4:
        setProductImage({ image: productImg4, key });
        break;
      default:
        setProductImage({ image: productImg1, key });
        break;
    }
  };

  const increaseQuantity = () => {
    setQuantity((pre) => {
      return pre + 1;
    });
  };
  const decreaseQuantity = () => {
    setQuantity((pre) => {
      return pre > 0 ? pre - 1 : 0;
    });
  };

  const addToCart = (product: ProductType) => {
    product.quantity = quantity;
    for (let index = 0; index < quantity; index++) {
      addProductToCart(product);
    }
  };

  return (
    <div className="product-page justify-content-center d-flex flex-wrap flex-md-nowrap p-sm-2 p-lg-5">
      <div className="product-preview ">
        <Image
          src={productImage.image}
          alt="Picture of the shoes"
          className="product-img my-sm-4 img-fluid"
        />
        <div className="product-thumbnails  d-none d-sm-flex justify-content-between">
          <div
            className={`${
              productImage.key === 1 && "active"
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
              productImage.key === 2 && "active"
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
              productImage.key === 3 && "active"
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
              productImage.key === 4 && "active"
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
      <div className="product-info  d-flex flex-column px-4 p-sm-0 justify-content-center">
        {products.map((product: ProductType) => {
          return (
            <div key={product.id}>
              <h6 className="text-uppercase fw-bold txt-primary">
                sneaker company
              </h6>
              <p className="fs-1 text-capitalize fw-bold">{product.name}</p>
              <p className="product-description">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole,they'll
                withstand everything the weather can offer.
              </p>
              <div className="d-flex flex-sm-column align-items-center align-items-sm-start justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <span className="fs-3 fw-bold me-3">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="discount-badge">50%</span>
                </div>
                <s className="original-price fw-bold">$250.00</s>
              </div>
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                <div className="col-12 col-lg-4">
                  <QuantityCounter
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                    quantity={quantity}
                  ></QuantityCounter>
                </div>
                <div className="col-12 col-lg-7">
                  <button
                    className="btn btn-primary w-100 py-3 rounded-3 fw-bold"
                    onClick={() => addToCart(product)}
                  >
                    <span className="icon icon-shopping-cart me-3"></span>
                    <span>Add to cart</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductPage;
