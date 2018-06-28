import React from 'react';
import { Link } from 'react-router-dom';
import { SVGIconText } from './SVGIcon';
import Rating from './rating';
import Img from './img';

export default class HotelItem extends React.Component {
  render() {
    return (
      <div className="hotel-item">
        <Link to={`/hotels/${this.props.hotel.id}`}>
          <div className="hotel-item-details">
            <div className="hotel-item-carousel">
              <Img type="hotels" imageId={this.props.hotel.imagesId[0]} />
            </div>
            <div className="hotel-item-info">
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
          </div>
        </Link>
      </div>
    );
  }
}
