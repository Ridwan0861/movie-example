import LazyLoad from "react-lazyload";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  poster_path: string;
  release_date: string;
  size?: string;
  handleNavigate?: () => void;
}

const MovieCard = (props: Props) => {
  const { title, poster_path, release_date, size, handleNavigate } = props;
  const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <div
      onClick={handleNavigate}
      className={`flex flex-col text-center font-semibold rounded-2xl shadow-lg ${size}`}
    >
      <LazyLoad height={300} offset={100} once>
        <picture>
          <img className="rounded-2xl shadow-lg" src={imageUrl} alt={title} />
        </picture>
      </LazyLoad>
      <label>{title}</label>
      <p>{release_date}</p>
    </div>
  );
};

export default MovieCard;
