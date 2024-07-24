import { Movie, ResponseMovie } from "../../assets/services/type";
import { useEffect, useState } from "react";

import MovieCard from "../../assets/componen/movie-card";
import { getNowPlaying } from "../../assets/services";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

const Home = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const page = (query.get("page") !== null ? query.get("page") : 1) as string;
  const [loading, setLoading] = useState(false);
  const [nowPlayingData, setNowPlayingData] = useState<ResponseMovie>();

  useEffect(() => {
    fetchMovie();
  }, [page]);

  const fetchMovie = async () => {
    try {
      setLoading(true);
      const response = await getNowPlaying(page as string);
      setNowPlayingData(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePage = () => {
    const numPage = Number(page);
    navigate(`?page=${numPage + 1}`);
  };

  const handlingPage = () => {
    const numPage = Number(page);
    navigate(`?page=${numPage - 1}`);
  };

  const toDetailMovie = (id: number) => {
    navigate(`detail/${id}`);
  };

  return (
    <div className="flex flex-col mt-7">
      <label className="text-2xl font-semibold mb-5">Now Playing</label>
      {!loading ? (
        <div className="flex flex-row flex-wrap gap-5 justify-center">
          {nowPlayingData?.results.map((item: Movie) => (
            <MovieCard
              key={item.id} // Tambahkan key untuk setiap elemen dalam map
              poster_path={item.poster_path}
              title={item.title}
              release_date={item.release_date}
              size="w-40"
              handleNavigate={() => toDetailMovie(item.id)}
            />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}

      <div className="flex flex-row justify-between mt-5">
        <button
          onClick={handlingPage}
          className="bg-green-600 p-2 rounded-sm"
          disabled={Number(page) <= 1}
        >
          Back
        </button>
        <button
          onClick={handlePage}
          className="bg-green-600 p-2 rounded-sm"
          disabled={
            nowPlayingData && Number(page) >= nowPlayingData.total_pages
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
