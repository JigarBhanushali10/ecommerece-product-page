import { useContext, useEffect, useState } from "react";
import { GlobalStoreContext } from "../contexts/GlobalStore";
import { ProductType } from "../local database/db";
import QuantityCounter from "./QuantityCounter";
import { CartContext } from "../contexts/CartContext";
import LightBox from "./LightBox";
import ModalPortal from "@/app/core/layouts/ModalPortal";
import { LightBoxContent } from "../contexts/LightBoxContext";
import LightBoxWrapper from "./LightBoxWrapper";

function ProductPage() {
  const products = useContext(GlobalStoreContext);

  const [quantity, setQuantity] = useState(0);

  const { addProductToCart } = useContext(CartContext);
  const { isLightBoxVisible, toggleLightBox } = useContext(LightBoxContent);

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

  const forceCloseLightBox = () => {
    if (window.innerWidth < 576) {
      toggleLightBox(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", forceCloseLightBox);
    return () => {
      window.removeEventListener("resize", forceCloseLightBox);
    };
  }, []);

  return (
    <div className="product-page justify-content-center d-flex flex-wrap flex-md-nowrap p-sm-2 p-lg-5">
      <div className="product-preview">
        {isLightBoxVisible && (
          <ModalPortal>
            <LightBoxWrapper></LightBoxWrapper>
          </ModalPortal>
        )}
        <LightBox isSliderControlVisible={true}></LightBox>
      </div>
      <div className="product-info  d-flex flex-column px-4 p-sm-0 pt-md-4 justify-content-center">
        {products.map((product: ProductType) => {
          return (
            <div key={product.id}>
              <h6 className="text-uppercase product-brand fw-bold txt-primary mt-lg-4">
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
              <div className="d-flex flex-wrap justify-content-between align-items-center mt-3 mt-lg-5">
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
