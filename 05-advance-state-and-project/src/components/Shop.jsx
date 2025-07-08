import Product from "./Product";
export default function Shop() {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>
      <ul id="products">
        <li>
          <Product></Product>
          <Product></Product>
        </li>
      </ul>
    </section>
  );
}
