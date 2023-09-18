import { useEffect, useState } from "react";
type quantityCounterProps = {
  getQuantity: (quantity: number) => void;
};

function QuantityCounter(props: quantityCounterProps) {
  const [quantity, setQuantity] = useState(0);

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

  useEffect(() => {
    props.getQuantity(quantity);
  }, [quantity]);

  return (
    <div className="quantity-counter d-flex justify-content-between align-items-center px-3 py-3 rounded-3 mb-3 mb-lg-0">
      <span className="icon icon-minus" onClick={decreaseQuantity}></span>
      <span className="fw-bold">{quantity}</span>
      <span className="icon icon-plus" onClick={increaseQuantity}></span>
    </div>
  );
}

export default QuantityCounter;
