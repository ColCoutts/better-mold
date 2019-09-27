import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './portfolio-menu-item.styles.scss';

import { togglePageHidden } from '../../redux/page/page.action.js';
import { selectPageHidden } from '../../redux/page/page.selectors';

import CustomButton from '../custom-button/custom-button.component';
import PortfolioPage from '../../pages/portfolio/portfolio-page.component';

//maybe cant have just one menu item / instead each menu item should be thought
// of as their own page

const PortfolioMenuItem = ({ title, togglePageHidden, hidden }) => (
  hidden ? 
  <div className='portfolio-menu-item' onClick={togglePageHidden}>
  <CustomButton>
    {title}
  </CustomButton>
  </div> :
  <PortfolioPage />
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
)(PortfolioMenuItem);
