import React from 'react';
import Event from './Event';
import PropTypes from 'prop-types';

function EventList(props) {

  const eventsSorted = props.eventsList.sort((a, b) => (a.updated_at < b.updated_at) ? 1 : -1)
  return (
    <React.Fragment>
      <h1>EventList.js reached</h1>
      {eventsSorted.map((event) =>
        <Event
          whenEventClicked={props.onEventSelection}
          notification={event.notification}
          created_at={event.created_at}
          updated_at={event.updated_at}
          organization_id={event.organization_id}
          id={event.id}
          key={event.id}
        />
      )}
    </React.Fragment>
  );
}

EventList.propTypes = {
  eventsList: PropTypes.array,
  onEventSelection: PropTypes.func
};

export default EventList;
