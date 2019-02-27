import React from 'react';
import axios from 'axios';
import _ from 'lodash';

import { Spinner, SVGIcon } from '../../components';

export default class AdminHotels extends React.Component {
  state = {
    hotels: [],
    loading: true
  };

  componentDidMount() {
    /**
     * Get request to fetch all hotels
     */
    axios.get(`http://localhost:4000/hotels`).then(res => {
      this.setState({
        hotels: res.data,
        loading: false
      });
    });
  }

  /**
   * Removing hotel by ID
   * DELETE api call to remove the hotel
   * @param {string} hotelId The hotel ID
   * @returns {Void}
   */
  removeHotel = hotelId => {
    axios.delete(`http://localhost:4000/hotels/${hotelId}`).then(() => {
      let { hotels } = this.state;
      _.remove(hotels, hotel => hotel.id === hotelId);
      this.setState(hotels);
    });
  };

  render() {
    return (
      <div className="admin-hotels">
        {this.state.loading ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <ul>
            {this.state.hotels.map(hotel => (
              <li key={hotel.id}>
                <h4>{hotel.name}</h4>
                <div class="hotel-remove" onClick={e => this.removeHotel(hotel.id)}>
                  <SVGIcon name="TRASH" width="24" fill="#d93732" />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
