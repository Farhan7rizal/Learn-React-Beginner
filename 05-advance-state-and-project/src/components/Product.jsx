export default function Product() {
  return (
    <article className="product">
      <img src="../src/assets/rain-jacket.jpg" alt="" />
      <div className="product-content">
        <h3>Baju Kuning CP2077</h3>
        <p className="product-price">$200</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eius
          quibusdam commodi in magna senpai
        </p>
      </div>
      <p className="product-actions">
        <button>Add to Cart</button>
      </p>
    </article>
  );
}
