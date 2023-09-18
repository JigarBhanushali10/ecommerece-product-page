import { Inter } from "next/font/google";
import Image from "next/image";
import productImg1 from "../assets/images/image-product-1.jpg";
import productThumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import productThumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import productThumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import productThumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";
import Header from "@/app/core/layouts/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container-xxl   p-0 h-100">
      <div className="d-flex flex-column h-100">
        <Header></Header>
        <main className="flex-grow-1 overflow-auto">
          <div className="product-page justify-content-center d-flex flex-wrap flex-md-nowrap p-sm-2 p-lg-5">
            <div className="product-preview ">
              <Image
                src={productImg1}
                alt="Picture of the shoes"
                className="product-img my-sm-4 img-fluid"
              />
              <div className="product-thumbnails  d-none d-sm-flex justify-content-between">
                <Image
                  src={productThumbnail1}
                  alt="Picture of the shoes"
                  className="product-thumbnail  pe-1  rounded-3 img-fluid"
                />
                <Image
                  src={productThumbnail2}
                  alt="Picture of the shoes"
                  className="product-thumbnail  px-1  rounded-3 img-fluid"
                />
                <Image
                  src={productThumbnail3}
                  alt="Picture of the shoes"
                  className="product-thumbnail  px-1  rounded-3 img-fluid"
                />
                <Image
                  src={productThumbnail4}
                  alt="Picture of the shoes"
                  className="product-thumbnail  ps-1 rounded-3 img-fluid"
                />
              </div>
            </div>
            {/* <div className="col-1"></div> */}
            <div className="product-info  d-flex flex-column px-4 p-sm-0 justify-content-center">
              <h6 className="text-uppercase fw-bold txt-primary">
                sneaker company
              </h6>
              <p className="fs-1 text-capitalize fw-bold">
                Fall limited edition sneakers
              </p>
              <p className="product-description">
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole,they'll
                withstand everything the weather can offer
              </p>
              <div className="d-flex flex-sm-column align-items-center align-items-sm-start justify-content-between mb-4">
                <div className="d-flex align-items-center">
                  <span className="fs-3 fw-bold me-3">$125.00</span>
                  <span className="discount-badge">50%</span>
                </div>
                <s className="original-price fw-bold">$250.00</s>
              </div>
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                <div className="col-12 col-lg-4">
                  <div className="quantity-counter d-flex justify-content-between align-items-center px-3 py-3 rounded-3 mb-3 mb-lg-0">
                    <span className="icon icon-minus "></span>
                    <span className="fw-bold">0</span>
                    <span className="icon icon-plus"></span>
                  </div>
                </div>
                <div className="col-12 col-lg-7">
                  <button className="btn btn-primary w-100 py-3 rounded-3 fw-bold">
                    <span className="icon icon-shopping-cart me-3"></span>
                    <span>Add to cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
