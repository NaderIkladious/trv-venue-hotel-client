import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import { Rating, Img, SVGIconText } from '.';

export class HotelItem extends React.Component {
  render() {
    return (
      <div className="hotel-item">
        <Link to={`/hotels/${this.props.hotel.id}`} className="hotel-item-link">
          <div className="hotel-item-details">
            <div className="hotel-item-carousel">
              {this.props.hotel.imagesId && this.props.hotel.imagesId.length ? (
                <Carousel>
                  {this.props.hotel.imagesId.map(imageId => <Img key={imageId} type="hotels" imageId={imageId} />)}
                </Carousel>
              ) : (
                <div className="placeholder" style={{ width: '15rem', height: '10rem' }} />
              )}
            </div>
            <div className="hotel-item-info">
              <h4>{this.props.hotel.name}</h4>
              <Rating rate={this.props.hotel.rating.toPrecision(2)} />
              <span className={`badge badge-${this.props.hotel.price_category}`}>
                {this.props.hotel.price_category}
              </span>
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
