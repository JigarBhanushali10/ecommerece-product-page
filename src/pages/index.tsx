import { Inter } from "next/font/google";
import Image from "next/image";
import productImg1 from "../assets/images/image-product-1.jpg";
import productThumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import productThumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import productThumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import productThumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container-xxl p-0 h-100">
      <div className="d-flex flex-column h-100">
        <nav className="navbar navbar-expand-sm border-sm-1 border-bottom py-4">
          <div className="container-fluid p-0">
            <span
              className="navbar-toggler-icon d-block d-sm-none cursor-pointer"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            ></span>

            <div
              className="offcanvas offcanvas-start"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <span
                  className="icon-close cursor-pointer"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></span>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-start align-items-sm-center flex-grow-1">
                  <li className="nav-item me-5 d-none d-sm-block">
                    <h2 className="fw-bold">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        sneakers
                      </a>
                    </h2>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Collection
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Men
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Women
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="navbar-nav flex-row align-items-center">
              <li className="nav-item">
                <a className="nav-link icon icon-shopping-cart" href="#"></a>
              </li>
              <li className="nav-item ">
                <a className="nav-link rounded-circle " href="#">
                  <span className="icon icon-avatar"></span>
                  {/* todo show profile if login */}
                  <img src="" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main className="flex-grow-1 overflow-auto">
          <div className="product-page justify-content-center d-flex flex-wrap flex-md-nowrap p-sm-2 p-lg-5">
            <div className="product-preview ">
              <Image
                src={productImg1}
                alt="Picture of the shoes"
                className="product-img my-4 img-fluid"
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
              <h6 className="text-uppercase fw-bold">sneaker company</h6>
              <p className="fs-1 text-capitalize fw-bold">
                Fall limited edition sneakers
              </p>
              <p>
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole,they'll
                withstand everything the weather can offer
              </p>
              <div className="d-flex flex-column mb-3">
                <div>
                  <span className="fs-3 fw-bold">$125.00</span>
                  <span>50%</span>
                </div>
                <s className="fw-bold">$250</s>
              </div>
              <div className="d-flex flex-wrap justify-content-between align-items-center ">
                <div className="col-12 col-lg-4">
                  <div className="quantity-counter d-flex justify-content-between px-3 py-3 bg-body-tertiary  rounded-3 mb-3 mb-lg-0">
                    <span className="txt-primary">-</span>
                    <span className="fw-bold">0</span>
                    <span className="txt-primary">+</span>
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
