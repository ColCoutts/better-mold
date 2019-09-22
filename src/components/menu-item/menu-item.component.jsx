import React from 'react';
import './menu-item.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const MenuItem = ({ title }) => (
  <div className='menu-item'>
    <CustomButton className='title'>{title}</CustomButton>
  </div>
);

export default MenuItem;
