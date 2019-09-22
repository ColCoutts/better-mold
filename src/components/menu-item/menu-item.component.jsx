import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title }) => (
  <div className='menu-item'>
    <h1>{title}</h1>
  </div>
);

export default MenuItem;
