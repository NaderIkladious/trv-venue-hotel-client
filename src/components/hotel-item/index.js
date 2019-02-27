import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import { Rating, Img, SVGIconText } from '..';

/**
 * Hotel item card
 * @returns {string} Hotel item HTML component
 */
export const HotelItem = props => (
  <div className="hotel-item">
    <Link to={`/hotels/${props.hotel.id}`} className="hotel-item-link">
      <div className="hotel-item-details">
        <div className="hotel-item-carousel">
          {props.hotel.imagesId && props.hotel.imagesId.length ? (
            <Carousel>
              {props.hotel.imagesId.map(imageId => (
                <Img key={imageId} type="hotels" imageId={imageId} />
              ))}
            </Carousel>
          ) : (
            <div className="placeholder" style={{ width: '15rem', height: '10rem' }} />
          )}
        </div>
        <div className="hotel-item-info">
          <h4>{props.hotel.name}</h4>
          <Rating rate={parseFloat(props.hotel.rating.toPrecision(2))} />
          <span className={`badge badge-${props.hotel.price_category}`}>{props.hotel.price_category}</span>
          <ul className="amenities">
            {props.hotel.amenities ? (
              props.hotel.amenities.map(item => (
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

HotelItem.propTypes = {
  hotel: PropTypes.object
};
