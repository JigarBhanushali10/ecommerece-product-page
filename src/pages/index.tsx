import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container-xxl p-0 h-100">
      <div className="d-flex flex-column h-100">
        <nav className="navbar navbar-expand-sm   border-sm-1 border-bottom">
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
                  <li className="nav-item d-none d-sm-block ms-auto">
                    <a
                      className="nav-link icon icon-shopping-cart"
                      href="#"
                    ></a>
                  </li>
                  <li className="nav-item d-none d-sm-block">
                    <a className="nav-link rounded-circle " href="#">
                      <span className="icon icon-avatar"></span>
                      {/* todo show profile if login */}
                      <img src="" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <main className="flex-grow-1"></main>
      </div>
    </div>
  );
}
