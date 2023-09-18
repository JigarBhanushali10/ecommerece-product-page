import Image from "next/image";
import productThumbnail4 from "../../../assets/images/image-product-4-thumbnail.jpg";

function Cart() {
  return (
    <div className="cart shadow rounded-3">
      <div className="border-1 border-bottom px-3 py-4 fw-bold">Cart</div>
      <div className="px-3 py-4">
        <div className="d-flex align-items-center gap-4 mb-4">
          <Image
            src={productThumbnail4}
            alt="Picture of the shoes"
            className="cart-thumbnail  rounded-3 img-fluid"
          />
          <div className="item-description d-flex flex-column">
            <p className="mb-1 ">
              Fall Limited Edition Sneakers <br />
              $125.00 x 3 <span className="fw-bold text-dark"> $375.00</span>
            </p>
          </div>
          <span className="icon icon-delete cursor-pointer"></span>
        </div>
        <button className="btn btn-primary w-100 py-3 rounded-3 fw-bold shadow-none">
          <span>Checkout</span>
        </button>
      </div>
    </div>
  );
}

export default Cart;
