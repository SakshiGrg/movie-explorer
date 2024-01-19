import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useGlobalContext } from '../../context/context';

const Search = () => {
    const { query, setQuery, isError, activeSection } = useGlobalContext();

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <>
            <section className="search-section">
                <form action="#" onSubmit={(e) => e.preventDefault}>
                    <div className={`search-container ${query && 'active'}`}>
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="search a movie or a series"
                            value={query}
                            onChange={handleInputChange}
                        />
                    </div>
                </form>
                <div className="card-error">
                    {!!isError?.msg && (
                        <>
                            <p>
                                {activeSection.charAt(0).toUpperCase() +
                                    activeSection.slice(1)}{' '}
                                {isError.msg}
                            </p>
                        </>
                    )}
                </div>
            </section>
            ;
        </>
    );
};

export default Search;
