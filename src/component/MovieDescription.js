import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const MovieDescription = ({ movies, setMovies }) => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <div>
      {movies
        .filter((el) => parseInt(id) === el.id)
        .map((movie, i) => (
          <div>
            {show ? (
              <h2 key={i} className="full-title">
                {movie.name}
              </h2>
            ) : (
              !show
            )}
            ,
            {show && (
              <h2 key={i} className="full-one">
                {movie.description}
              </h2>
            )}
            <button
              className="btn1"
              onMouseEnter={() => setShow(true)}
              onMouseOut={() => setShow(false)}
            ></button>
            
          </div>
        ))}
      {/* <button className='btn-back' onClick={() => { navigate("/"); }}>BACK TO HOME PAGE</button> */}
    </div>
  );
};

export default MovieDescription;
