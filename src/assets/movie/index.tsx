import { Movie, ResponseTopRate } from "../services/type";
import { useEffect, useState } from "react";

import TopRateCard from "../../assets/componen/toprate-card";
import { getTopRate } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../features/hooks/useQuery";

function Home() {
  const navigate = useNavigate();
  const query = useQuery();
  const page = (query.get("page") !== null ? query.get("page") : 1) as string;
  const [loading, setLoading] = useState(false);
  const [nowTopRate, setNowTopRate] = useState<ResponseTopRate>();

  useEffect(() => {
    fetchTopRate();
  }, [page]);

  const fetchTopRate = async () => {
    try {
      const response = await getTopRate(page as string);
      setNowTopRate(response);
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

  return (
    <div className="flex flex-col mt-7">
      <label className="text-2xl font-semibold mb-5">Top Rate</label>
      {!loading ? (
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
      ) : (
        <div>Loading..</div>
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
          disabled={nowTopRate && Number(page) >= nowTopRate.total_pages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
