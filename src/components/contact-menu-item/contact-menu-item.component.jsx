import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './contact-menu-item.styles.scss';

import { toggleContactHidden } from '../../redux/contact/contact.action.js';
import { selectContactHidden } from '../../redux/contact/contact.selectors.js';

import CustomButton from '../custom-button/custom-button.component';

import ContactPage from '../../pages/contact/contact-page.component';

//maybe cant have just one menu item / instead each menu item should be thought
// of as their own page

const ContactMenuItem = ({ title, hidden, toggleContactHidden }) => (
  hidden ? 
  <div className='about-menu-item' onClick={toggleContactHidden}>
  <CustomButton>
    {title}
  </CustomButton>
  </div> :
  <ContactPage />
);

const mapStateToProps = state => createStructuredSelector({
  hidden: selectContactHidden
})

const mapDispatchToProps = dispatch => ({
  toggleContactHidden: () => dispatch(toggleContactHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactMenuItem);
