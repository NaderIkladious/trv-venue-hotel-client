import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuid';
import Carousel from 'nuka-carousel';

import { Img } from '..';

import './style.css';

/**
 * Room item card
 * @returns {string} Room Item HTML component
 */
export const Room = props => (
  <div className="room-item">
    <div className="room-item-details">
      <div className="room-item-carousel">
        {props.room.imagesId.length ? (
          <Carousel>
            {props.room.imagesId.map(imageId => (
              <Img key={imageId} type="rooms" imageId={imageId} />
            ))}
          </Carousel>
        ) : (
          <div className="placeholder" style={{ width: '15rem', height: '10rem' }} />
        )}
      </div>
      <div className="room-item-info">
        <h4>{props.room.name}</h4>
        <p>
          Occupancy: <span className="badge badge-occupancy">{props.room.max_occupancy}</span>
        </p>
        <p>{props.room.description}</p>
      </div>
      <div className="room-item-reserve">
        <div className="room-price">${props.room.price_in_usd.toPrecision(5)}</div>
        <Link
          className="room-reserve button button-green"
          to={{
            pathname: `/confirmation/${uuidv4()}`,
            state: { room: props.room, hotel: props.hotel }
          }}
        >
          Book Now
        </Link>
      </div>
    </div>
  </div>
);

Room.propTypes = {
  room: PropTypes.object,
  hotel: PropTypes.object
};
