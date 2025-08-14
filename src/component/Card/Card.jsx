import React from 'react'
import './Card.css'


function Card({ title, image, link }) {
    const handleClick = () => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <h1>{title}</h1>
            <div className="hovercard">
                <img src={image} alt="" />
            </div>

        </div>
    )
}

export default Card

