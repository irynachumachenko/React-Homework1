import React from 'react';

const Card = ({ courseInfo }) => {
    const { id, image, level, title, user, rating, students, modules, duration } = courseInfo;

    const formatDuration = (milliseconds) => {
        const hours = Math.floor(milliseconds / 60 / 60);
        const minutes = (milliseconds / 60) % 60;
        return `${hours}h ${minutes}m`;
    };

    return (
        <div key={id} className="card">
            <div className="image__container">
                <img src={image} alt="course picture" />
                <div className="level">{level}</div>
            </div>
            <h3 className="card__title">{title}</h3>
            <div className="card__info">
                <div className="user">
                    <img src={user.avatar} alt={user.name} />
                    <p>{user.name}</p>
                </div>
                <div className="rating">
                    <p>{rating}</p>
                </div>
            </div>
            <div className="card__info">
                <div>{students}</div>
                <div>{modules}</div>
                <div>{formatDuration(duration)}</div>
            </div>
        </div>
    );
};

export default Card;
