import React from 'react';
// import { createStructuredSelector } from 'reselect';
// import { connect } from 'react-redux';

// import { selectPageHidden } from '../../redux/page/page.selectors';

import './directory.styles.scss';

import PortfolioMenuItem from '../portfolio-menu-item/portfolio-menu-item.component';
import AboutMenuItem from '../about-menu-item/about-menu-item.component';
import FieldNotesMenuItem from '../field-notes-menu-item/field-notes-menu-item.component';
import ContactMenuItem from '../contact-menu-item/contact-menu-item.component';

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
      <PortfolioMenuItem key={sections[0].id} title={sections[0].title} />
      <FieldNotesMenuItem key={sections[1].id} title={sections[1].title} />
      <AboutMenuItem key={sections[2].id} title={sections[2].title} />
      <ContactMenuItem key={sections[3].id} title={sections[3].title} />
  </div>
);


export default Directory;
