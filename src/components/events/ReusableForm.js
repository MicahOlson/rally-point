import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  console.log(props)
  let priorNotification;
  if (props.event) {
    priorNotification = props.event.notification
  }
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <textarea
          type='text'
          name='notification'
          placeholder='Enter notification here'
          defaultValue={priorNotification}
        />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
