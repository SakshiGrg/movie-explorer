import React, { useContext, useEffect, useState, useCallback } from 'react';
import useFetch from '../hooks/useFetch';
import { getApiUrl } from '../utilities/utils';

//context creation
const AppContext = React.createContext();

// app provider function
const AppProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState('movie');
    const [contentData, setContentData] = useState([]);
    const [query, setQuery] = useState('');

    // Getting API URL directly from activeSection
    const apiUrl = getApiUrl(query, activeSection, 3);
    const [
        { data, loading: isLoading, error: isError },
        setUrl,
        fetchMoreData,
    ] = useFetch(apiUrl);

    // Infinite scrolling
    const loadMoreData = useCallback(() => {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight
        )
            return;
        fetchMoreData();
    }, [fetchMoreData]);

    useEffect(() => {
        window.addEventListener('scroll', loadMoreData);
        return () => window.removeEventListener('scroll', loadMoreData);
    }, [loadMoreData]);

    useEffect(() => {
        // This effect is for updating the URL for the API request
        setUrl(getApiUrl(query, activeSection, 3));
        // console.log('api url--->', apiUrl);
    }, [activeSection, setUrl]);

    useEffect(() => {
        // This effect is for updating the URL for the API request
        let timerOut = setTimeout(() => {
            setUrl(getApiUrl(query, activeSection, 3));
        }, 3000);
        return () => clearTimeout(timerOut);
    }, [query]);

    useEffect(() => {
        data && setContentData(data);
    }, [data]);

    return (
        <AppContext.Provider
            value={{
                isLoading,
                isError,
                contentData,
                query,
                setQuery,
                activeSection,
                setActiveSection,
                apiUrl,
            }}>
            {children}
        </AppContext.Provider>
    );
};

// Global  Context
const useGlobalContext = () => {
    return useContext(AppContext);
};

export { useGlobalContext, AppContext, AppProvider };
