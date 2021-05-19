import React from 'react';
import PropTypes from 'prop-types';

function Event(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenEventClicked(props.id, props.organization_id)}>
        <p>{props.updated_at} - {props.notification}</p>
      </div>
    </React.Fragment>
  );
}

Event.propTypes = {
  updated_at: PropTypes.string,
  notification: PropTypes.string,
  whenEventClicked: PropTypes.func
};

export default Event;
