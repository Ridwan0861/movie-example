import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  
    const { id } = useParams();

    const [loading, setLoading] = useState<boolean>(false);
    const [movie, setMovie] = useState<DetailMovie>();

    useEffect(() => {
      fetchMovieById();
    }, [id]);

    const fetchMovieById = async () => {
      <try {
        setLoading(true);

        const response = await getMovieId(id as string);

        setMovie(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  
    return (
  )
}

export default Detail;
