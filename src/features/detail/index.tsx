import { useEffect, useState } from "react";

import { DetailMovie } from "../../assets/services/type";
import { getMovieId } from "../../assets/services/api";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<DetailMovie>();

  useEffect(() => {
    fetchMovieById();
  }, [id]);

  const fetchMovieById = async () => {
    try {
      setLoading(true);
      const response = await getMovieId(id as string);
      setMovie(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.release_date}</p>
          <p>{movie.overview}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <div>Movie not found</div>
      )}
    </div>
  );
};

export default Detail;
