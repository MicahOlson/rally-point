import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import styled from 'styled-components'

const EditEventFormWrapper = styled.section`
  textarea {
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
  }
`

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
      <EditEventFormWrapper>
        <h2>Edit Event Details</h2>
        <ReusableForm
          event={notification}
          formSubmissionHandler={handleEditEventFormSubmission}
          buttonText="Update Notification"
        />
      </EditEventFormWrapper>
    </React.Fragment>
  );
}

EditEventForm.propTypes = {
  // user: PropTypes.object,
  onEditEvent: PropTypes.func
};

export default EditEventForm;
