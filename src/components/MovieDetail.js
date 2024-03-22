import PropType from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function MovieDetail({
  coverImg,
  title,
  year,
  rating,
  runtime,
  genres,
  description_full,
}) {
  return (
    <div>
      <h3>
        <Link to={`/`}> Back to the Home</Link>
      </h3>
      <div className={styles.detail__coverImg}>
        <img src={coverImg} alt={title} />
      </div>
      <div className={styles.detail__container}>
        <h2>Title: {title}</h2>
        <h3>Year: {year}</h3>
        <h3>Rating: {rating}</h3>
        <h3>Runtime: {runtime}</h3>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <h3>{description_full}</h3>
      </div>
    </div>
  );
}

MovieDetail.PropType = {
  title: PropType.string.isRequired,
  rating: PropType.string.isRequired,
  year: PropType.string.isRequired,
  runtime: PropType.string.isRequired,
  coverImg: PropType.string.isRequired,
  description_full: PropType.string.isRequired,
  genres: PropType.arrayOf(PropType.string).isRequired,
};
export default MovieDetail;
