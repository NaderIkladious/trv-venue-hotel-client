import React from 'react';
import { Link } from 'react-router-dom';

export default class HotelItem extends React.Component {
  render() {
    return (
      <div className="hotel-item">
        <Link to={`/hotels/${this.props.hotel.id}`}>
          <div className="hotel-item-details">
            <h4>{this.props.hotel.name}</h4>
            rating: {this.props.hotel.rating.toPrecision(2)}
          </div>
        </Link>
      </div>
    );
  }
}
