// import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";


function MovieCard({movie}){
      return (
        <div>
          {/* <Card style={{ width: '18rem', backgroundColor:'white'}}>
      <Card.Img variant="top" src={movie.posterurl}/>
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
      </Card.Body>
      <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
    edit={false}
    value={movie.rating}
  
  /> 
  </div>
  */}

  <div class='carte'>
    <img src={movie.posterurl} alt="mov"/>
    <br></br><br></br>
    <h2>{movie.name}</h2>
    <p>{movie.description}</p>
    <span style={{ margin:" 0 auto "}}>
    <ReactStars
    style={{zIndex:1}}
    count={5}
    size={24}
    activeColor="#ffd700"
    edit={false}
    value={movie.rating}
  /> 
   </span>
  </div>
        </div>
      ) 
    }
export default MovieCard