import { useState } from "react";
import "../styles/movieadd.css";

function MovieAdd({ setShow, setMovies, show, movies }) {
  const addMovie = (movie) => {
    setMovies([movie, ...movies]);
  };
  const [edit, setEdit] = useState({
    name: "",
    posterurl: "",
    description: "",
    rating: 0,
  });
  return (
    <div className="add">
      <form>
        <input
          type="text"
          placeholder="Entrer le nom du film"
          onChange={(e) => {
            setEdit({ ...edit, name: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Entrer l'url de l'image "
          onChange={(e) => {
            setEdit({ ...edit, posterurl: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Entrer la description du film"
          onChange={(e) => {
            setEdit({ ...edit, description: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Rating"
          onChange={(e) => {
            setEdit({ ...edit, rating: e.target.value });
          }}
        />
        <button onClick={() => setShow(!show)}> x</button>

        <button
          onClick={(e) => {
            e.preventDefault();
            addMovie(edit);
          }}
          style={{ backgroundColor: "gray", borderRadius: "5px" }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default MovieAdd;
