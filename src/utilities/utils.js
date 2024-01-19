export const getApiUrl = (query, contentType, page = 1) => {
    const base_url = 'https://api.themoviedb.org/3/';
    const api_key = process.env.REACT_APP_API_KEY;
    let url = `${base_url}discover/${contentType}?api_key=${api_key}`;
    // debugger;
    if (query && query.trim() !== '') {
        url = `${base_url}search/${contentType}?api_key=${api_key}&page=${page}&query=${encodeURIComponent(
            query,
        )}`;
    }
    // console.log('getApiUrl url-->', url, query);
    return url;
};

export const getImgUrl = (apiImgPath) => {
    const base_url = 'https://image.tmdb.org/t/p/';
    const size_parameter = 'w1280';
    return base_url + size_parameter + apiImgPath;
};
