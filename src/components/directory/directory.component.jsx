import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectPageHidden } from '../../redux/page/page.selectors';

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

const Directory = ({ hidden }) => (
  <div className='directory'>
    <div>
      <MenuItem key={sections[0].id} title={sections[0].title} />
      <MenuItem key={sections[1].id} title={sections[1].title} />
      <MenuItem key={sections[2].id} title={sections[2].title} />
      <MenuItem key={sections[3].id} title={sections[3].title} />
    </div>
    { hidden ? null : <span>Hello</span> }
  </div>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectPageHidden
});

export default connect(mapStateToProps)(Directory);
