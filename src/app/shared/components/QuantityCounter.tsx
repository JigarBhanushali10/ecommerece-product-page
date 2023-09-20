type quantityCounterProps = {
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  quantity: number;
};

function QuantityCounter({
  quantity,
  increaseQuantity,
  decreaseQuantity,
}: quantityCounterProps) {
  return (
    <div className="quantity-counter d-flex justify-content-between align-items-center px-3 py-3 rounded-3 mb-3 mb-lg-0">
      <span className="icon icon-minus" onClick={decreaseQuantity}></span>
      <span className="fw-bold">{quantity}</span>
      <span className="icon icon-plus" onClick={increaseQuantity}></span>
    </div>
  );
}

export default QuantityCounter;
