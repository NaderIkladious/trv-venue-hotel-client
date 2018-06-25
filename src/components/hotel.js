import React from 'react';
import axios from 'axios';

export default class Hotel extends React.Component {
  state = {
    loading: true,
    hotel: {},
    rooms: []
  };
  componentDidMount() {
    const hotelId = this.props.match.params.id;
    axios.get(`http://localhost:3000/hotels/${hotelId}`).then(res => {
      this.setState({
        hotel: res.data,
        loading: false
      });
    });
    axios.get(`http://localhost:3000/rooms?hotel_id=${hotelId}`).then(res => {
      console.log(res);
      this.setState({
        rooms: res.data
      });
    });
  }
  render() {
    return (
      <div className="hotel-page">
        <div className="hotel-page-header">
          <div className="carousel" />
          <div className="wrapper">
            <div className="hotel-name">
              <h2>{this.state.hotel.name}</h2>
              <p>{this.state.hotel.rating}</p>
            </div>
          </div>
        </div>
        <div className="hotel-page-body wrapper">
          <div className="hotel-page-details">
            <h4>Description</h4>
            <p>{this.state.hotel.description}</p>
            <div className="hotel-page-rooms">
              {this.state.rooms ? (
                <ul>
                  {this.state.rooms.map(room => (
                    <li key={room.id}>
                      <p>{room.name}</p>
                      <p>{room.description}</p>
                      <p>{room.max_occupancy}</p>
                      <p>${room.price_in_usd.toPrecision(5)}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
