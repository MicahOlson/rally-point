import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function EditEventForm(props) {
  const { notification } = props;
  function handleEditEventFormSubmission(event) {
    event.preventDefault();
    props.onEditEvent({
      notification: event.target.notification.value,
      created_at: notification.created_at,
      updated_at: notification.updated_at,
      organization_id: notification.organization_id,
      id: notification.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditEventFormSubmission}
        buttonText="Update Notification"
      />
    </React.Fragment>
  );
}

EditEventForm.propTypes = {
  user: PropTypes.object,
  onEditEvent: PropTypes.func
};

export default EditEventForm;
