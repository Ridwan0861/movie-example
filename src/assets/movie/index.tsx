import { useEffect, useState } from "react";

import TopRateCard from "../../assets/componen/toprate-card";
import { getTopRate } from "../services/api";

function Home() {
  const [nowTopRate, setNowTopRate] = useState<ResponseTopRate>();

  useEffect(() => {
    fetchTopRate();
  }, []);

  const fetchTopRate = async () => {
    try {
      const response = await getTopRate();

      setNowTopRate(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col mt-7">
      <label className="text-2xl font-semibold mb-5">Top Rate</label>
      <div className="flex flex-row  flex-wrap gap-5 justify-center">
        {nowTopRate?.results.map((item: Movie) => (
          <TopRateCard
            poster_path={item.poster_path}
            title={item.title}
            release_date={item.release_date}
            size="w-40"
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
