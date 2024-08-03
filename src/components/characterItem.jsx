import React from 'react';

const CharacterItem = ({ item }) => {
    return (
        <div className="card">
            <div className="card-outer">
                <img src={item.imageUrl} alt={`${item.firstName} ${item.lastName}`} />
            </div>
            <div className="card-inner">
                <ul>
                    <li><strong>First Name: </strong>{item.firstName}</li>
                    <li><strong>Last Name: </strong>{item.lastName}</li>
                    <li><strong>Title: </strong>{item.title}</li>
                    <li><strong>Family: </strong>{item.family}</li>
                </ul>
            </div>
        </div>
    );
};

export default CharacterItem;
