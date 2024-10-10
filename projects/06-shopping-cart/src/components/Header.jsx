/* eslint-disable react/prop-types */
import { Filters } from "./Filters.jsx";

export function Header({ changeFilters }) {
  return (
    <header className="header">
      <h3>React Shop🛒</h3>
      <Filters onChange={changeFilters} />
    </header>
  );
}
