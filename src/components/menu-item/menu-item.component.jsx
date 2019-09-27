import React from 'react';
import { connect } from 'react-redux';

import './menu-item.styles.scss';

import { togglePageHidden } from '../../redux/page/page.action.js';
import CustomButton from '../custom-button/custom-button.component';

const MenuItem = ({ title, togglePageHidden }) => (
  <div className='menu-item' onClick={togglePageHidden}>
  <CustomButton>
    {title}
  </CustomButton>
  </div>
);

const mapDispatchToProps = dispatch => ({
  togglePageHidden: () => dispatch(togglePageHidden())
});

export default connect(
  null,
  mapDispatchToProps
)(MenuItem);
