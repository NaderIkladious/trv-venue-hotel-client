import React from 'react';

export default class HotelItem extends React.Component {
  render() {
    return (
      <div className="hotel-item">
        <div className="hotel-item-details">
          <h4>{this.props.hotel.name}</h4>
          rating: {this.props.hotel.rating.toPrecision(2)}
        </div>
      </div>
    );
  }
}
