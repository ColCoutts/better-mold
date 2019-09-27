import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './about-menu-item.styles.scss';

import { togglePageHidden } from '../../redux/page/page.action.js';
import { selectPageHidden } from '../../redux/page/page.selectors';

import CustomButton from '../custom-button/custom-button.component';
import AboutPage from '../../pages/about/about-page.component';

//maybe cant have just one menu item / instead each menu item should be thought
// of as their own page

const AboutMenuItem = ({ title, togglePageHidden, hidden }) => (
  hidden ? 
  <div className='about-menu-item' onClick={togglePageHidden}>
  <CustomButton>
    {title}
  </CustomButton>
  </div> :
  <AboutPage />
);

const mapStateToProps = state => createStructuredSelector({
  hidden: selectPageHidden
})

const mapDispatchToProps = dispatch => ({
  togglePageHidden: () => dispatch(togglePageHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutMenuItem);
