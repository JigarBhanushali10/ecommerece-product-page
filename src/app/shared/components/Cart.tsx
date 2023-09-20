import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ProductType } from "../local database/db";

function Cart() {
  const { cart, removeEntireProduct } = useContext(CartContext);

  function removeEntireProductFromCart(productId: number) {
    removeEntireProduct(productId);
  }

  return (
    <div className="cart shadow rounded-3">
      <div className="border-1 border-bottom px-3 py-4 fw-bold">Cart</div>
      <div className="px-3 py-4">
        {cart.map((product: ProductType) => {
          return (
            <div
              className="d-flex align-items-center gap-4 mb-4"
              key={product.id}
            >
              <Image
                src={product.image}
                alt="Picture of the shoes"
                className="cart-thumbnail  rounded-3 img-fluid"
              />
              <div className="item-description d-flex flex-column">
                <p className="mb-1">
                  {product.name} <br />${product.price.toFixed(2)} x{" "}
                  {product.quantity}
                  <span className="ms-2 fw-bold text-dark">
                    ${(product.price * product.quantity).toFixed(2)}
                  </span>
                </p>
              </div>
              <span
                className="icon icon-delete cursor-pointer"
                onClick={() => removeEntireProductFromCart(product.id)}
              ></span>
            </div>
          );
        })}

        {cart.length > 0 ? (
          <button className="btn btn-primary w-100 py-3 rounded-3 fw-bold shadow-none">
            <span>Checkout</span>
          </button>
        ) : (
          <div className="empty-cart fw-bold d-flex justify-content-center align-items-center">
            <p className="product-description">Your cart is empty</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
