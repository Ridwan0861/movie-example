interface Props {
  title: string;
  poster_path: string;
  release_date: string;
  size?: string;
}

const DetailCard = (props: Props) => {
  const { title, poster_path, release_date, size } = props;
  return (
    <div
      className={`flex flex-col  text-center font-semibold rounded-2xl shadow-lg ${size}`}
    >
      <img
        className="rounded-2xl shadow-lg"
        src={`https://image.tmdb.org/t/p/500/${poster_path}`}
      ></img>
      <label>{title}</label>
      <p>{release_date}</p>
    </div>
  );
};

export default DetailCard;
