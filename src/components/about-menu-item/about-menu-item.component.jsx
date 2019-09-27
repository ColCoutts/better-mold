import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './about-menu-item.styles.scss';

import { toggleAboutHidden } from '../../redux/about/about.action.js';
import { selectAboutHidden } from '../../redux/about/about.selectors.js';

import CustomButton from '../custom-button/custom-button.component';

import AboutPage from '../../pages/about/about-page.component';

//maybe cant have just one menu item / instead each menu item should be thought
// of as their own page

const AboutMenuItem = ({ title, hidden, toggleAboutHidden }) => (
  hidden ? 
  <div className='about-menu-item' onClick={toggleAboutHidden}>
  <CustomButton>
    {title}
  </CustomButton>
  </div> :
  <AboutPage />
);

const mapStateToProps = state => createStructuredSelector({
  hidden: selectAboutHidden
})

const mapDispatchToProps = dispatch => ({
  toggleAboutHidden: () => dispatch(toggleAboutHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutMenuItem);
