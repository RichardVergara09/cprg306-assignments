import React from 'react';

const Item = ({ name, quantity, category }) => {
    return (
        <li className="flex flex-col p-2 mb-4 bg-blue-800 text-white rounded-md shadow-lg" style={{ width: "300px"}}>
            <span className="font-bold text-lg">{name}</span>
            <span>{`Buy ${quantity} in ${category}`}</span>
        </li>
    );
};

export default Item;
