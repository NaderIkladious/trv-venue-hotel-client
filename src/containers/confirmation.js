import React from 'react';
import * as _ from 'lodash';
import axios from 'axios';
import { Helmet } from 'react-helmet';

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
        axios.post('http://localhost:4000/confirmations', confirmation).then(res => {
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
        <Helmet>
          <title>{`Confirmation #${confirmation.id}`}</title>
        </Helmet>
        <div className="wrapper">
          <h3>Thanks for using Trivago</h3>
          <div className="reservations-details">
            <table>
              <tbody>
                <tr>
                  <td>Confirmation ID</td>
                  <td className="confirmation-id">{confirmation.id}</td>
                </tr>
                <tr>
                  <td>Hotel Name</td>
                  <td>{confirmation.hotelName}</td>
                </tr>
                <tr>
                  <td>Room Name</td>
                  <td>{confirmation.roomName}</td>
                </tr>
                <tr>
                  <td>Price / Night</td>
                  <td>${parseFloat(confirmation.price).toPrecision(5)}</td>
                </tr>
                <tr>
                  <td>First Name</td>
                  <td className="first-name">{confirmation.firstName}</td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td className="last-name">{confirmation.lastName}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
