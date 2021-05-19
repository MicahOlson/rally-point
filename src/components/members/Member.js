import React from 'react';
import PropTypes from 'prop-types';

function Member(props) {
  let status = "";
  if (props.checked_in) {
    status = "Ok"
  } else {
    status = "HAS NOT CHECKED IN!!!"
  }

  return (
    <React.Fragment>
      <tbody>
        <tr onClick={() => props.whenMemberClicked(props.id, props.organization_id)}>
          <td>
            {props.first_name}
          </td>
          <td>
            {props.last_name}
          </td>
          <td>
            {props.email}
          </td>
          <td>
            {props.mobile_phone}
          </td>
          <td>
            {status}
          </td>
        </tr>
      </tbody>
    </React.Fragment>
  );
}

Member.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  checked_in: PropTypes.bool,
  whenMemberClicked: PropTypes.func
};

export default Member;
