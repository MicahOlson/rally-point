import React from 'react';
import PropTypes from 'prop-types';

function EventDetail(props) {
  const { event, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h2>Event Details</h2>
      <p>{event.updated_at} - {event.notification}</p>
      <button onClick={props.onClickingEdit}>Update Details</button>
      <button onClick={() => onClickingDelete(event.id, event.organization_id)}>Remove Event Alert</button>
      <hr/>
    </React.Fragment>
  );
}

EventDetail.propTypes = {
  event: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default EventDetail;
