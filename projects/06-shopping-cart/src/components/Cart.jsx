import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import "./Cart.css";

export function Cart() {
  const cartCheckboxID = useId();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxID}>
        <CartIcon />
      </label>
      <input id={cartCheckboxID} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          <li>
            <img src="https://dummyjson.com/image/150" alt="telefono" />
            <div>
              <strong>Telefono</strong> - $13.000
            </div>

            <footer>
              <small>Cantidad: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
