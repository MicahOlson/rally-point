import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function NewEventForm(props) {
  function handleNewEventFormSubmission(event) {
    event.preventDefault();
    props.onNewEventCreation({
      notification: event.target.notification.value,
    });
  }
  return (
    <React.Fragment>
      <h2>Add a New Disruption Event</h2>
      <ReusableForm
        formSubmissionHandler={handleNewEventFormSubmission}
        buttonText="Add Notification"
      />
    </React.Fragment>
  );
}

NewEventForm.propTypes = {
  onNewEventCreation: PropTypes.func
};

export default NewEventForm;
