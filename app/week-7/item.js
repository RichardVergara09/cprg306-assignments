import React from 'react';

export default function Item({ item, onSelect }) {
    const { name, quantity, category } = item;
 
    const itemStyle = "flex flex-col p-2 mb-4 bg-blue-800 text-white rounded-md shadow-lg w-1/4 cursor-pointer";
    const titleStyle = "text-lg font-bold";
    const textStyle = "text-white-900";

    return (
        <div className={itemStyle} onClick={() => onSelect(item)}>
            <h2 className={titleStyle}>{name}</h2>
            <p className={textStyle}>Quantity: {quantity}</p>
            <p className={textStyle}>Category: {category}</p>
        </div>
    );
}
