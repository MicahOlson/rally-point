import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const EditMemberFormWrapper = styled.section`
  input {
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
  }
`

function EditMemberForm(props) {
  const { member } = props;
  function handleEditMemberFormSubmission(event) {
    event.preventDefault();
    let checkedIn = false;
    if (event.target.checkedIn.value != 0) {
      checkedIn = true
    };
    props.onEditMember({
      email: event.target.email.value,
      password: event.target.password.value,
      password_confirmation: event.target.passwordConfirmation.value,
      first_name: event.target.firstName.value,
      last_name: event.target.lastName.value,
      mobile_phone: event.target.mobilePhone.value,
      secondary_phone: event.target.secondaryPhone.value,
      emergency_contact_name: event.target.emergencyContactName.value,
      emergency_contact_phone: event.target.emergencyContactPhone.value,
      group: event.target.group.value,
      checked_in: checkedIn,
      organization_id: member.organization_id,
      id: member.id
    });
  }

  let checkedInState = 0;
  if (member.checked_in) {
    checkedInState = 1;
  }

  return (
    <React.Fragment>
      <EditMemberFormWrapper>
        <h2>Edit Member Details</h2>
        <form onSubmit={handleEditMemberFormSubmission}>
          <input
            type='text'
            name='firstName'
            placeholder='First name'
            defaultValue={member.first_name}
          />
          <input
            type='text'
            name='lastName'
            placeholder='Last name'
            defaultValue={member.last_name}
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            defaultValue={member.email}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            defaultValue={member.password}
          />
          <input
            type='password'
            name='passwordConfirmation'
            placeholder='Password confirmation'
            defaultValue={member.password_confirmation}
          />
          <input
            type='text'
            name='mobilePhone'
            placeholder='Mobile phone'
            defaultValue={member.mobile_phone}
          />
          <input
            type='text'
            name='secondaryPhone'
            placeholder='Secondary phone'
            defaultValue={member.secondary_phone}
          />
          <input
            type='text'
            name='emergencyContactName'
            placeholder='Emergency contact name'
            defaultValue={member.emergency_contact_name}
          />
          <input
            type='text'
            name='emergencyContactPhone'
            placeholder='Emergency contact phone'
            defaultValue={member.emergency_contact_phone}
          />
          <input
            type='text'
            name='group'
            placeholder='Group'
            defaultValue={member.group}
          />
          <button type='submit'>Update Details</button>
        </form>
      </EditMemberFormWrapper>
    </React.Fragment>
  );
}

EditMemberForm.propTypes = {
  user: PropTypes.object,
  onEditMember: PropTypes.func
};

export default EditMemberForm;
