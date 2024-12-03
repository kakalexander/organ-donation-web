import React from 'react';
import './ItemList.css';

const ItemList = ({ items, renderItem }) => (
  <ul className="item-list">
    {items.map((item, index) => (
      <li key={index} className="item-list-entry">
        {renderItem(item)}
      </li>
    ))}
  </ul>
);

export default ItemList;
