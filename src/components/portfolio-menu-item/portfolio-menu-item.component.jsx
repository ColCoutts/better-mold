import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './portfolio-menu-item.styles.scss';

import { toggleWorkHidden } from '../../redux/work/work.action.js';
import { selectWorkHidden } from '../../redux/work/work.selectors.js';

import CustomButton from '../custom-button/custom-button.component';
import PortfolioPage from '../../pages/portfolio/portfolio-page.component';

//maybe cant have just one menu item / instead each menu item should be thought
// of as their own page

const PortfolioMenuItem = ({ title, toggleWorkHidden, hidden }) => (
  hidden ? 
  <div className='portfolio-menu-item' onClick={toggleWorkHidden}>
  <CustomButton>
    {title}
  </CustomButton>
  </div> :
  <PortfolioPage />
);

const mapStateToProps = state => createStructuredSelector({
  hidden: selectWorkHidden
})

const mapDispatchToProps = dispatch => ({
  toggleWorkHidden: () => dispatch(toggleWorkHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioMenuItem);
