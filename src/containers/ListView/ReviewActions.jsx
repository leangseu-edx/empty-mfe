import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  ActionRow,
  Button,
  Icon,
  FullscreenModal,
  Container,
} from '@edx/paragon';

import selectors from 'data/selectors';
import thunkActions from 'data/thunkActions';

import StatusBadge from './StatusBadge';
import './ReviewModal.scss';

export const ReviewActions = ({ submission: { status, username } }) => (
  <ActionRow>
    {username}
    <StatusBadge status={status} />
  </ActionRow>
);
ReviewActions.propTypes = {
  submission: PropTypes.shape({
    status: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export const mapStateToProps = (state) => ({
  submission: selectors.submissions.currentSelection(state),
});

export const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewActions);
