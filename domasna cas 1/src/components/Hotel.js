import React from "react";
import propTypes from 'prop-types';

export const Hotel = ({ capacity, occupancy, availability, vacancy }) => {

    return (
        <div id="hotel">
            <h1>Welcome to Good Hotel</h1>
            <p>Hotel capacity: {capacity}<br />
                Rooms occupied: {occupancy} </p>
            {vacancy ? <p>{availability}</p> : <p>No rooms available.</p>}


        </div>

    )
}

Hotel.propTypes = {
    capacity: propTypes.number,
    occupancy: propTypes.number,
    availability: propTypes.string,
    vacancy: propTypes.bool
}