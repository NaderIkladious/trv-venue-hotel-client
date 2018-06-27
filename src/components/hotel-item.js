import React from 'react';
import { Link } from 'react-router-dom';
import { SVGIconText } from './SVGIcon';
import Rating from './rating';

export default class HotelItem extends React.Component {
  render() {
    return (
      <div className="hotel-item">
        <Link to={`/hotels/${this.props.hotel.id}`}>
          <div className="hotel-item-details">
            <h4>{this.props.hotel.name}</h4>
            <Rating rate={this.props.hotel.rating.toPrecision(2)} />
            <ul className="amenities">
              {this.props.hotel.amenities ? (
                this.props.hotel.amenities.map(item => (
                  <li key={item}>
                    <SVGIconText text={item.replace('_', ' ')} name={item.toUpperCase()} />
                  </li>
                ))
              ) : (
                <p> No Amenities </p>
              )}
            </ul>
          </div>
        </Link>
      </div>
    );
  }
}
