import { Link } from "../Link";

export function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src="https://w7.pngwing.com/pngs/647/460/png-transparent-computer-icons-open-person-family-icon-black-silhouette-black-white-people-thumbnail.png"
          alt="Foto de Martín"
        />
        <p>Hola me llamo Martín</p>
      </div>
      <Link to="/">Ir a la Home</Link>
    </>
  );
}
