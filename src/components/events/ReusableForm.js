import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const ReusableFormWrapper = styled.section`
  textarea {
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
  }
`

function ReusableForm(props) {
  console.log(props)
  let priorNotification;
  if (props.event) {
    priorNotification = props.event.notification
  }
  return (
    <React.Fragment>
      <ReusableFormWrapper>
        <form onSubmit={props.formSubmissionHandler}>
          <textarea
            type='text'
            name='notification'
            placeholder='Enter notification here'
            defaultValue={priorNotification}
          />
          <button type='submit'>{props.buttonText}</button>
        </form>
      </ReusableFormWrapper>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
