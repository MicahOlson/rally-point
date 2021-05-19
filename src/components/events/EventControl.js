import React from 'react';
import axios from 'axios'
import EditEventForm from './EditEventForm';
import EventDetail from './EventDetail';
import EventList from './EventList';
import NewEventForm from './NewEventForm'

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

  handleAddingNewEventToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({
      mainKegList: newMainKegList,
      formVisibleOnPage: false
    });
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
            orgName: response.data.name
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

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState =
        <EditEventForm
          event={this.state.selectedEvent}
          onEditEvent={this.handleEditingEventInList}
        />
      buttonText = "Return to Event List"
    } else if (this.state.selectedEvent != null) {
      this.handleGettingOrganizationName(this.state.selectedEvent.organization_id)
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
      this.handleGettingEventsList(this.props.user.organization_id)
      currentlyVisibleState =
        <EventList
          eventsList={this.state.eventsList}
          onEventSelection={this.handleChangingSelectedEvent}
        />
      buttonText = "Add Event";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
        {/* <button onClick={() => this.handleEditingEventInList({id: 13, organization_id: 3, first_name: "NEW NAME"})}>Update Selected</button>
        {console.log(this.state.selectedEvent)} */}
      </React.Fragment>
    );
  }
}

export default EventControl;
