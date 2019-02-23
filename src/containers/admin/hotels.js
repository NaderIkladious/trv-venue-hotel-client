import React from 'react';
import axios from 'axios';
import _ from 'lodash';

export default class AdminHotels extends React.Component {
  state = {
    hotels: []
  };

  componentDidMount() {
    axios.get(`http://localhost:4000/hotels`).then(res => {
      this.setState({
        hotels: res.data,
        loading: false
      });
    });
  }
  removeHotel = hotelId => {
    axios.delete(`http://localhost:4000/hotels/${hotelId}`).then(res => {
      console.log(res);
      let { hotels } = this.state;
      _.remove(hotels, hotel => hotel.id === hotelId);
      this.setState(hotels);
    });
  };
  render() {
    return (
      <div className="admin-hotels">
        <ul>
          {this.state.hotels.map(hotel => (
            <li key={hotel.id}>
              <h4>{hotel.name}</h4>
              <span className="hotel-remove badge badge-high" onClick={e => this.removeHotel(hotel.id)}>
                X
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
