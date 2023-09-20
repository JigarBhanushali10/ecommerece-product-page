export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const REMOVE_ENTIRE_PRODUCT = "REMOVE_ENTIRE_PRODUCT";

const addProductToCart = (product: any, state: any) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id == product.id
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1, amount: product.price });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity++;
    updatedItem.amount = updatedItem.quantity * updatedItem.price;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId: any, state: any) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id == productId
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantity--;
  updatedItem.amount = updatedItem.quantity * updatedItem.price;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return { ...state, cart: updatedCart };
};

const removeEntireProduct = (productId: any, state: any) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id == productId
  );

  updatedCart.splice(updatedItemIndex, 1);
  return { ...state, cart: updatedCart };
};

export const useCartReducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    case REMOVE_ENTIRE_PRODUCT:
      return removeEntireProduct(action.productId, state);
    default:
      return state;
  }
};
