import React from 'react';
import Event from './Event';
import PropTypes from 'prop-types';

function EventList(props) {

  const eventsSorted = props.eventsList.sort((a, b) => (a.updated_at < b.updated_at) ? 1 : -1)
  console.log(`User checked in? ${props.user.checked_in}`)
  if (props.user.checked_in) {
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
  return (
    <React.Fragment>
      <h1>EventList.js reached</h1>
      <button type="submit" onClick={props.onCheckIn}>Check in!!!</button>
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
