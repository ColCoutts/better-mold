import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './field-notes-menu-item.styles.scss';

import { toggleFieldNotesHidden } from '../../redux/field-notes/field-notes.action.js';
import { selectFieldNotesHidden } from '../../redux/field-notes/field-notes.selectors.js';

import CustomButton from '../custom-button/custom-button.component';
import FieldNotesPage from '../../pages/field-notes/field-notes-page.component';
//maybe cant have just one menu item / instead each menu item should be thought
// of as their own page

const FieldNotesMenuItem = ({ title, toggleFieldNotesHidden, hidden }) => (
  hidden ? 
  <div className='field-notes-menu-item' onClick={toggleFieldNotesHidden}>
  <CustomButton>
    {title}
  </CustomButton>
  </div> :
  <FieldNotesPage />
);

const mapStateToProps = state => createStructuredSelector({
  hidden: selectFieldNotesHidden
})

const mapDispatchToProps = dispatch => ({
  toggleFieldNotesHidden: () => dispatch(toggleFieldNotesHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldNotesMenuItem);
