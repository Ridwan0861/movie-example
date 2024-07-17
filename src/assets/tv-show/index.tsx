import { useEffect, useState } from "react";

import TvCard from "../../assets/componen/tv-card";
import { getOnTv } from "../../assets/services";

const Home = () => {
  const [nowPlayingData, setNowPlayingData] = useState<ResponseTv>();

  useEffect(() => {
    fetchTv();
  }, []);

  const fetchTv = async () => {
    try {
      const response = await getOnTv();

      setNowPlayingData(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col mt-7">
      <label className="text-2xl font-semibold mb-5">On Tv</label>
      <div className="flex flex-row  flex-wrap gap-5 justify-center">
        {nowPlayingData?.results.map((item: Tv) => (
          <TvCard
            poster_path={item.poster_path}
            name={item.name}
            first_air_date={item.first_air_date}
            size="w-40"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
