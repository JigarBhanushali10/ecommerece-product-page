import { createContext, useReducer } from "react";
import { ProductType } from "../local database/db";
import {
  ADD_PRODUCT,
  REMOVE_ENTIRE_PRODUCT,
  REMOVE_PRODUCT,
  useCartReducer,
} from "../hooks/CartReducer";

export const CartContext = createContext({
  cart: [],
  addProductToCart: (product: ProductType) => {},
  removeProductFromCart: (productId: number) => {},
  removeEntireProduct: (productId: number) => {},
});

function CartContextProvider({ children }: any) {
  const [cartState, dispatch] = useReducer(useCartReducer, { cart: [] });

  const addProductToCart = (product: any) => {
    dispatch({ type: ADD_PRODUCT, product });
  };

  const removeProductFromCart = (productId: number) => {
    dispatch({ type: REMOVE_PRODUCT, productId });
  };

  const removeEntireProduct = (productId: number) => {
    dispatch({ type: REMOVE_ENTIRE_PRODUCT, productId });
  };

  const cartProviderValue = {
    addProductToCart,
    removeEntireProduct,
    removeProductFromCart,
    cart: cartState.cart,
  };

  return (
    <CartContext.Provider value={cartProviderValue}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
