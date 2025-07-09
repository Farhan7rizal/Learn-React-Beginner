import { useRef } from "react";
import CartModal from "./CartModal";

export default function Header() {
  const modal = useRef();
  function handleOpenCartClick() {
    modal.current.open();
  }

  return (
    <>
      <CartModal ref={modal} />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegent model" />
          <h1>Elegant Context</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart (0)</button>
        </p>
      </header>
    </>
  );
}
