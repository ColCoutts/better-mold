import React from 'react';
import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

const sections = [
  {
    id: 1,
    title: 'work'
  },
  {
    id: 2,
    title: 'field notes'
  },
  {
    id: 3,
    title: 'about'
  },
  {
    id: 4,
    title: 'contact'
  }
];

const Directory = () => (
  <div className='directory'>
    {sections.map(({ id, title }) => (
      <MenuItem key={id} title={title} />
    ))}
  </div>
);

export default Directory;
