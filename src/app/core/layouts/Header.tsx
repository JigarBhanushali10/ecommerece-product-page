import Image from "next/image";
import user from "../../../assets/images/image-avatar.png";
import Cart from "@/app/shared/components/Cart";
import { useState } from "react";

function Header() {
  const [isCartOpen, toggleCart] = useState(false);

  return (
    <header>
      <nav className="navbar navbar-expand-sm border-sm-1 border-bottom py-sm-4 ">
        <div className="container-fluid p-xxl-0">
          <div className="d-flex align-items-center">
            <span
              className="icon icon-menu d-block d-sm-none cursor-pointer mx-2"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            ></span>
            <span className="icon icon-logo fs-4 mx-1 mx-md-0"></span>
          </div>

          <div
            className="offcanvas offcanvas-start"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <span
                className=" icon icon-close cursor-pointer mx-2"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></span>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-start align-items-sm-center flex-grow-1">
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
              <a
                className="nav-link icon icon-shopping-cart position-relative"
                href="#"
                onClick={() => toggleCart(!isCartOpen)}
              >
                <span className="cart-badge position-absolute badge rounded-pill text-center py-1 px-2">
                  3
                </span>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link " href="#">
                <Image
                  src={user}
                  alt="user image"
                  className="user-avatar  rounded-circle"
                />
              </a>
            </li>
          </ul>
        </div>
        {isCartOpen && <Cart></Cart>}
      </nav>
    </header>
  );
}

export default Header;
