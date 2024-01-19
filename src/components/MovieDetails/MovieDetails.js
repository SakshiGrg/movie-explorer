import React from 'react';
import { useGlobalContext } from '../../context/context';
import { NavLink, useParams } from 'react-router-dom';
import { getImgUrl } from '../../utilities/utils';

const MovieDetail = () => {
    const { contentData: activeSection } = useGlobalContext();
    const { id } = useParams();
    const activeItem = activeSection?.filter((result) => result.id == id)[0];
    const {
        poster_path,
        published_at,
        first_air_date,
        release_date,
        overview,
    } = activeItem;
    let Title = activeItem.title || activeItem.original_name;
    const date = published_at || first_air_date || release_date;
    return (
        <>
            <section className="container movie-section">
                <div className="movie-card">
                    <figure>
                        <img src={getImgUrl(poster_path)} alt={id} />
                    </figure>
                    <div className="card-content">
                        <p className="title">{Title}</p>
                        <p className="card-text">{date}</p>
                        <p className="card-overview">{overview}</p>
                        <NavLink to="/" className="back-btn">
                            Go Back
                        </NavLink>
                    </div>
                </div>
            </section>
            ;
        </>
    );
};

export default MovieDetail;
