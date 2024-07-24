interface Props {
  name: string;
  poster_path: string;
  first_air_date: string;
  size?: string;
}

const TvCard = (props: Props) => {
  const { name, poster_path, first_air_date, size } = props;
  return (
    <div
      className={`flex flex-col  text-center font-semibold rounded-2xl shadow-lg ${size}`}
    >
      <img
        className="rounded-2xl shadow-lg"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
      ></img>
      <label>{name}</label>
      <label className="text-slate-600">{first_air_date}</label>
    </div>
  );
};

export default TvCard;
