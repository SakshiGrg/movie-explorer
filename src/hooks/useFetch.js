import { useState, useEffect } from 'react';
import { useGlobalContext } from '../context/context';

const useFetch = (initialUrl, options) => {
    const [url, setUrl] = useState(initialUrl || '');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({ show: 'false', msg: '' });
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${url}&page=${page}`, options);
                if (!response.ok) {
                    setError({ show: true, msg: response.statusText });
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const json = await response.json();

                const newResults = json.results;
                const updatedData = data.concat(
                    newResults.filter(
                        (newItem) =>
                            !data.some((item) => item.id === newItem.id),
                    ),
                );
                setData(updatedData.reverse());
                setLoading(false);
                setError(null);
                if (json.results == '') {
                    setError({ show: true, msg: 'Data Not Found' });
                }
            } catch (error) {
                setLoading(false);
                setError({ show: true, msg: error.message });
                console.error('Error while fetching data:', error);
            }
        };
        fetchData();
    }, [url, options, error, page]);

    const fetchMoreData = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return [{ data, loading, error }, setUrl, fetchMoreData];
};

export default useFetch;
