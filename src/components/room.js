import React from 'react';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuid';
import Carousel from 'nuka-carousel';
import { Img } from '.';

export class Room extends React.Component {
  render() {
    return (
      <div className="room-item">
        <div className="room-item-details">
          <div className="room-item-carousel">
            {this.props.room.imagesId.length ? (
              <Carousel>
                {this.props.room.imagesId.map(imageId => <Img key={imageId} type="rooms" imageId={imageId} />)}
              </Carousel>
            ) : (
              <div className="placeholder" style={{ width: '15rem', height: '10rem' }} />
            )}
          </div>
          <div className="room-item-info">
            <h4>{this.props.room.name}</h4>
            <p>
              Occupancy: <span className="badge badge-occupancy">{this.props.room.max_occupancy}</span>
            </p>
            <p>{this.props.room.description}</p>
          </div>
          <div className="room-item-reserve">
            <div className="room-price">${this.props.room.price_in_usd.toPrecision(5)}</div>
            <Link
              className="room-reserve button button-green"
              to={{
                pathname: `/confirmation/${uuidv4()}`,
                state: { room: this.props.room, hotel: this.props.hotel }
              }}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
