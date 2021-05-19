import React from 'react';
import MemberList from './MemberList';
import MemberDetail from './MemberDetail';
import EditMemberForm from './EditMemberForm';
import axios from 'axios'

class MemberControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      membersList: [],
      selectedMember: null,
      orgName: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedMember != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedMember: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleChangingSelectedMember = (id, orgId) => {
    if (this.props.user.admin || this.props.user.id === id) {
      axios.get(`http://localhost:3000/organizations/${orgId}/users/${id}`, { withCredentials: true })
        .then(response => {
          if (response.status === 200) {
            let selectedMember = response.data
            this.setState({ selectedMember: selectedMember });
          }
        })
        .catch(error => {
          console.log("get member error", error);
        });
    }
  }

  handleDeletingMember = (id, orgId) => {
    axios.delete(`http://localhost:3000/organizations/${orgId}/users/${id}`, { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          this.setState({ selectedMember: null });
        }
      })
      .catch(error => {
        console.log("deletion error", error);
      });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleGettingMembersList = (orgId) => {
    axios.get(`http://localhost:3000/organizations/${orgId}/users/`, { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          this.setState({
            membersList: response.data
          });
        }
      })
      .catch(error => {
        console.log("get members error", error);
      });
  }

  handleGettingOrganizationName = (orgId) => {
    axios.get(`http://localhost:3000/organizations/${orgId}`, { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          this.setState({
            orgName: response.data.name
          });
        }
      })
      .catch(error => {
        console.log("get org name error", error);
      });
  }

  handleEditingMemberInList = (memberToEdit) => {
    axios.patch(`http://localhost:3000/organizations/${memberToEdit.organization_id}/users/${memberToEdit.id}`, { ...memberToEdit, withCredentials: true })
      .then(response => {
        if (response) {
          this.setState({
            editing: false,
            selectedMember: null
          });
        }
      })
      .catch(error => {
        console.log("update error", error);
      });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState =
        <EditMemberForm
          member={this.state.selectedMember}
          onEditMember={this.handleEditingMemberInList}
        />
      buttonText = "Return to Member List"
    } else if (this.state.selectedMember != null) {
      this.handleGettingOrganizationName(this.state.selectedMember.organization_id)
      currentlyVisibleState =
        <MemberDetail
          member={this.state.selectedMember}
          orgName={this.state.orgName}
          onClickingDelete={this.handleDeletingMember}
          onClickingEdit={this.handleEditClick}
        />
      buttonText = "Return to Member List";
    } else {
      this.handleGettingMembersList(this.props.user.organization_id)
      currentlyVisibleState =
        <MemberList
          membersList={this.state.membersList}
          onMemberSelection={this.handleChangingSelectedMember}
        />
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default MemberControl;
