import React from 'react';
import axios from 'axios'
import EditEventForm from './EditEventForm';
import EventDetail from './EventDetail';
import EventList from './EventList';
import NewEventForm from './NewEventForm'
import styled from 'styled-components'

const EventControlWrapper = styled.section`
  margin-left: 50px;
  font-size: 18px;
  color: #5E5E5E;
  h2 {
    color: #9E2A2B;
    font-size: 28px;
  }
`

class EventControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      eventsList: [],
      selectedEvent: null,
      orgName: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedEvent != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedEvent: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  // handleAddingNewEventToList = (newKeg) => {
  //   const newMainKegList = this.state.mainKegList.concat(newKeg);
  //   this.setState({
  //     mainKegList: newMainKegList,
  //     formVisibleOnPage: false
  //   });
  // }

  handleAddingNewEventToList = (eventToAdd) => {
    console.log(this.props.user.organization_id)
    if (this.props.user.admin || this.props.user.id === id) {
      axios.post(`http://localhost:3000/organizations/${this.props.user.organization_id}/events/`, { ...eventToAdd, withCredentials: true })
        .then(response => {
          if (response.status === 200) {
            this.setState({ formVisibleOnPage: false });
          }
        })
        .catch(error => {
          console.log("get event error", error);
        });
    }
  }

  handleChangingSelectedEvent = (id, orgId) => {
    if (this.props.user.admin || this.props.user.id === id) {
      axios.get(`http://localhost:3000/organizations/${orgId}/events/${id}`, { withCredentials: true })
        .then(response => {
          if (response.status === 200) {
            let selectedEvent = response.data
            this.setState({ selectedEvent: selectedEvent });
          }
        })
        .catch(error => {
          console.log("get event error", error);
        });
    }
  }

  handleDeletingEvent = (id, orgId) => {
    axios.delete(`http://localhost:3000/organizations/${orgId}/events/${id}`, { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          this.setState({ selectedEvent: null });
        }
      })
      .catch(error => {
        console.log("deletion error", error);
      });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleGettingEventsList = (orgId) => {
    axios.get(`http://localhost:3000/organizations/${orgId}/events/`, { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          this.setState({
            eventsList: response.data
          });
        }
      })
      .catch(error => {
        console.log("get events error", error);
      });
  }

  handleGettingOrganizationName = (orgId) => {
    axios.get(`http://localhost:3000/organizations/${orgId}`, { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          this.setState({
            orgName: response.data
          });
        }
      })
      .catch(error => {
        console.log("get org name error", error);
      });
  }

  handleEditingEventInList = (eventToEdit) => {
    axios.patch(`http://localhost:3000/organizations/${eventToEdit.organization_id}/events/${eventToEdit.id}`, { ...eventToEdit, withCredentials: true })
      .then(response => {
        if (response) {
          this.setState({
            editing: false,
            selectedEvent: null
          });
        }
      })
      .catch(error => {
        console.log("update error", error);
      });
  }

  handleCheckIn = () => {
    axios.patch(`http://localhost:3000/organizations/${this.props.user.organization_id}/users/${this.props.user.id}`, { checked_in: true, withCredentials: true })
      .then(response => {
        if (response) {
          // this.setState({
          //   editing: false,
          //   selectedEvent: null
          // });
          // this.componentDidMount();
          // window.location.reload(true);
          // this.handleGettingEventsList(this.props.user.organization_id)
        }
      })
      .catch(error => {
        console.log("check in error", error);
      });
  }

  componentDidMount = () => {
    this.handleGettingEventsList(this.props.user.organization_id);
    this.handleGettingOrganizationName(this.props.user.organization_id)
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState =
        <EditEventForm
          notification={this.state.selectedEvent}
          onEditEvent={this.handleEditingEventInList}
        />
      buttonText = "Return to Event List"
    } else if (this.state.selectedEvent != null) {
      currentlyVisibleState =
        <EventDetail
          event={this.state.selectedEvent}
          orgName={this.state.orgName}
          onClickingDelete={this.handleDeletingEvent}
          onClickingEdit={this.handleEditClick}
        />
      buttonText = "Return to Event List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState =
        <NewEventForm
          onNewEventCreation={this.handleAddingNewEventToList}
        />;
      buttonText = "Return to Event List";
    } else {
      currentlyVisibleState =
        <EventList
          user={this.props.user}
          orgName={this.state.orgName}
          eventsList={this.state.eventsList}
          onEventSelection={this.handleChangingSelectedEvent}
          onCheckIn={this.handleCheckIn}
        />
      buttonText = "Add Event";
    }
    if (this.props.user.admin) {
      return (
        <React.Fragment>
          <EventControlWrapper>
            {currentlyVisibleState}
            <button onClick={this.handleClick}>{buttonText}</button>
          </EventControlWrapper>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <EventControlWrapper>
            {currentlyVisibleState}
          </EventControlWrapper>
        </React.Fragment>
      );
    }
  }
}

export default EventControl;
