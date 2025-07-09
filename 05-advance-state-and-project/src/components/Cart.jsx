export default function Cart() {
  return (
    <div id="cart">
      <p>No item in cart!</p>
      <ul id="cart-items">
        <li>
          <div>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            </span>
            <span>$PRICE</span>
          </div>
          <div className="cart-item-actions">
            <button>-</button>
            <span>QUANTITY</span>
            <button>+</button>
          </div>
        </li>
        <li>
          <div>
            <span>Lorem, ipsum dolor sit amet</span>
            <span>$PRICE</span>
          </div>
          <div className="cart-item-actions">
            <button>-</button>
            <span>QUANTITY</span>
            <button>+</button>
          </div>
        </li>
      </ul>
      <p id="cart-total-price">Cart Total: $</p>
    </div>
  );
}
