import logoImg from "../assets/amazon-river.jpg";
export default function Places({ title, fallbackText }) {
  return (
    <section className="places-category">
      <h2>{title}</h2>
      <p className="fallback-text">{fallbackText}</p>
      <ul className="places">
        <li className="place-item">
          <button>
            <img src={logoImg} alt="" />
            <h3>places title</h3>
          </button>
        </li>
        <li className="place-item">
          <button>
            <img src={logoImg} alt="" />
            <h3>places title</h3>
          </button>
        </li>
        <li className="place-item">
          <button>
            <img src={logoImg} alt="" />
            <h3>places title</h3>
          </button>
        </li>
      </ul>
    </section>
  );
}
