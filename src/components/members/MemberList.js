import React from 'react';
import Member from './Member';
import PropTypes from 'prop-types';

function MemberList(props) {

  const membersSorted = props.membersList.sort((a, b) => (a.last_name > b.last_name) ? 1 : -1)
  return (
    <React.Fragment>
      <h1>MemberList.js reached</h1>
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Primary Email</th>
            <th>Primary Phone</th>
            <th>Checked In?</th>
          </tr>
        </tbody>

        {membersSorted.map((member) =>
          <Member
            whenMemberClicked={props.onMemberSelection}
            email={member.email}
            password={member.password}
            password_confirmation={member.password_confirmation}
            first_name={member.first_name}
            last_name={member.last_name}
            mobile_phone={member.mobile_phone}
            secondary_phone={member.secondary_phone}
            emergency_contact_name={member.emergency_contact_name}
            emergency_contact_phone={member.emergency_contact_phone}
            group={member.group}
            checked_in={member.checked_in}
            organization_id={member.organization_id}
            id={member.id}
            key={member.id}
          />
        )}
      </table>
    </React.Fragment>
  );
}

MemberList.propTypes = {
  membersList: PropTypes.array,
  onMemberSelection: PropTypes.func
};

export default MemberList;
