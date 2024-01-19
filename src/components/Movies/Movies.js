import React from 'react';
import { useGlobalContext } from '../../context/context';
import { NavLink } from 'react-router-dom';

const Movies = () => {
    const { isLoading, contentData: activeSection } = useGlobalContext();

    if (isLoading) {
        return (
            <p className="loading text-xl text-gray-700 text-center">
                Loading...
            </p>
        );
    }
    const base_url = 'https://image.tmdb.org/t/p/';
    const size_parameter = 'w1280';

    // console.log('active section-->', activeSection);

    return (
        <>
            <section className="movie-page">
                <div className="container grid grid-4-col">
                    {activeSection?.map((curElem) => {
                        const { id, title, poster_path, original_name } =
                            curElem;
                        const poster = base_url + size_parameter + poster_path;
                        let Title = title || original_name;
                        Title = Title && Title.substring(0, 25);
                        return (
                            <NavLink to={`movie/${id}`} key={id}>
                                <div className="card">
                                    <div className="card-info">
                                        <h2>
                                            {Title?.length >= 25
                                                ? `${Title}...`
                                                : Title}
                                        </h2>
                                        <img
                                            className="object-cover object-center"
                                            src={poster}
                                            alt={id}
                                        />
                                    </div>
                                </div>
                            </NavLink>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Movies;
