import React from 'react';
import ClockLoader from 'react-spinners/ClockLoader';
import CharacterItem from './characterItem.jsx'; // Ensure the import path is correct

const CharGrid = ({ items, isLoading }) => {
    return isLoading ? (
        <div className="loader-container">
            <ClockLoader color={"#FFFFFF"} size={50} />
        </div>
    ) : (
        <section className="cards">
            {items.map((item) => (
                <CharacterItem key={item.id} item={item} />
            ))}
        </section>
    );
};

export default CharGrid;
