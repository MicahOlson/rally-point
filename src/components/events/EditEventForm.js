import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function EditEventForm(props) {
  const { notification } = props;
  function handleEditEventFormSubmission(event) {
    event.preventDefault();
    props.onEditEvent({
      notification: event.target.notification.value,
      organization_id: notification.organization_id,
      id: notification.id
    });
  }

  return (
    <React.Fragment>
      <h2>Edit Event Details</h2>
      <ReusableForm
        event={notification}
        formSubmissionHandler={handleEditEventFormSubmission}
        buttonText="Update Notification"
      />
    </React.Fragment>
  );
}

EditEventForm.propTypes = {
  // user: PropTypes.object,
  onEditEvent: PropTypes.func
};

export default EditEventForm;
