import React from 'react';
import * as _ from 'lodash';
import axios from 'axios';

export default class Confirmation extends React.Component {
  state = {
    confirmation: {}
  };
  componentDidMount() {
    const confirmationId = this.props.match.params.id;
    if (this.props.location && this.props.location.state && this.props.location.state.room) {
      const { room, hotel } = this.props.location.state;
      if (_.has(localStorage, confirmationId)) {
        this.setState({ confirmation: JSON.parse(localStorage[confirmationId]) });
      } else {
        const confirmation = {
          id: confirmationId,
          roomName: room.name,
          firstName: 'John',
          lastName: 'Doe',
          hotelName: hotel.name,
          price: room.price_in_usd,
          date: new Date()
        };
        localStorage.setItem(confirmationId, JSON.stringify(confirmation));
        this.setState({ confirmation });
        axios.post('http://localhost:3000/confirmations', confirmation).then(res => {
          console.log('posting data', res);
        });
      }
    } else {
      if (_.has(localStorage, confirmationId)) {
        this.setState({ confirmation: JSON.parse(localStorage[confirmationId]) });
      } else {
        axios.get(`http://localhost:3000/confirmations/${confirmationId}`).then(res => {
          console.log('getting data', res);
          this.setState({ confirmation: res.data });
        });
      }
    }
  }
  render() {
    const { confirmation } = this.state;
    return (
      <div className="confirmation">
        <div className="wrapper">
          <h3>Reservation Confirmation</h3>

          <div className="reservations-details">
            <div className="left">
              <p>Confirmation ID: {confirmation.id}</p>
              <p>Hotel Name: {confirmation.hotelName}</p>
              <p>Room Name: {confirmation.roomName}</p>
              <p>Price / Night: ${parseFloat(confirmation.price).toPrecision(5)}</p>
            </div>
            <div className="right">
              <p>First Name: {confirmation.firstName}</p>
              <p>Last Name: {confirmation.lastName}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
