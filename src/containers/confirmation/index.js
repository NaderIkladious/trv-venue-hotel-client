import React from 'react';
import _ from 'lodash';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import { Spinner } from '../../components';
import { API_URL } from '../../core/consts';

import './style.css';

export class Confirmation extends React.Component {
  state = {
    confirmation: {}
  };
  componentDidMount() {
    // Get confirmation ID from the url
    const confirmationId = this.props.match.params.id;
    if (_.has(localStorage, confirmationId)) {
      this.setState({ confirmation: JSON.parse(localStorage[confirmationId]) });
    } else {
      axios.get(`${API_URL}/confirmations/${confirmationId}`).then(
        res => {
          console.log('getting data', res);
          this.setState({ confirmation: res.data, loading: false });
          localStorage.setItem(confirmationId, JSON.stringify(res.data));
        },
        err => {
          if (this.props.location && this.props.location.state && this.props.location.state.room) {
            console.log('have props');
            const { room, hotel } = this.props.location.state;
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
            this.setState({ confirmation, loading: false });
            axios.post(`${API_URL}/confirmations`, confirmation).then(res => {
              console.log('posting data', res);
            });
          } else {
            console.log('no data');
            this.setState({ loading: false });
          }
        }
      );
    }
  }
  render() {
    const { confirmation } = this.state;
    return (
      <div className="confirmation">
        <Helmet>
          <title>{`Confirmation #${confirmation.id}`}</title>
        </Helmet>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div>
            {_.keys(confirmation).length > 0 ? (
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
            ) : (
              <div className="no-result">
                <p>Reservation not found.</p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
