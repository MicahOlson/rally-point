import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components'

// const MemberDetailWrapper = styled.section`
//   h2 {
//     color: #9E2A2B;
//     font-size: 28px;
//   }
// `

function MemberDetail(props) {
  const { member, orgName, onClickingDelete } = props;

  let status = "";
  if (member.checked_in) {
    status = "Ok"
  } else {
    status = "HAS NOT CHECKED IN!!!"
  }

  return (
    <React.Fragment>
      {/* <MemberDetailWrapper> */}
        <h2>Member Details</h2>
        <p>Name: {member.first_name} {member.last_name}</p>
        <p>Email: {member.email}</p>
        <p>Mobile Phone: {member.mobile_phone}</p>
        <p>Secondary Phone: {member.secondary_phone}</p>
        <p>Emergency Contact: {member.emergency_contact_name}</p>
        <p>Emergency Contact's Phone: {member.emergency_contact_phone}</p>
        <p>Organization: {orgName}</p>
        <p>Group: {member.group}</p>
        <p>Checked In?: {status}</p>
        <button onClick={props.onClickingEdit}>Update Details</button>
        <button onClick={() => onClickingDelete(member.id, member.organization_id)}>Remove Member</button>
        <hr />
      {/* </MemberDetailWrapper> */}
    </React.Fragment>
  );
}

MemberDetail.propTypes = {
  member: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default MemberDetail;
