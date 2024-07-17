import { API } from "."

const getNowPlaying = async (page: string) => {
    try {
    const response = await API.get(`movie/now_playing?language=en-US&page=${page}`);
        
    console.log(response);

    return response.data as ResponseMovie
    } catch (error) {
        console.log(error);
    }
};
    export { getNowPlaying };

    const getOnTv = async () => {
        try {
        const response = await API.get("tv/on_the_air?language=en-US&page=1");
            
        console.log(response);
    
        return response.data as ResponseMovie
        } catch (error) {
            console.log(error);
        }
    };
        export { getOnTv };

    const getTopRate = async () => {
        try {
        const response = await API.get("movie/top_rated?language=en-US&page=1");
            
        console.log(response);
    
        return response.data as ResponseMovie
        } catch (error) {
            console.log(error);
        }
    };
        export { getTopRate };