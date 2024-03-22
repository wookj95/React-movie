import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";
import styles from "./Home.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movie details");
      }
      const json = await response.json();
      console.log(json);
      setMovie(json.data.movie);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movie details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          <MovieDetail
            key={movie.id}
            id={movie.id}
            year={movie.year}
            coverImg={movie.large_cover_image}
            title={movie.title_long}
            rating={movie.rating}
            runtime={movie.runtime}
            genres={movie.genres}
            description_full={movie.description_full}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
