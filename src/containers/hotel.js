import React from 'react';
import axios from 'axios';
import Carousel from 'nuka-carousel';
import { Helmet } from 'react-helmet';
import * as _ from 'lodash';
import { Rating, Img, SVGIconText, Room } from '../components';

export default class Hotel extends React.Component {
  state = {
    loading: true,
    sample: true,
    hotel: {},
    rooms: []
  };
  componentDidMount() {
    const hotelId = this.props.match.params.id;
    axios.get(`http://localhost:4000/hotels/${hotelId}`).then(res => {
      this.setState({
        hotel: res.data,
        loading: false
      });
    });
    axios.get(`http://localhost:4000/rooms?hotel_id=${hotelId}`).then(res => {
      console.log(res);
      this.setState({
        rooms: res.data
      });
    });
  }
  rooms = () => {
    const rooms = this.state.rooms;
    let result = _.orderBy(rooms, 'price_in_usd');
    this.state.sample ? (result = _.take(result, 2)) : false;
    return result;
  };
  loadMore = () => {
    this.setState({ sample: false });
  };
  render() {
    return (
      <div className="hotel-page">
        <Helmet>
          <title>{this.state.hotel.name}</title>
        </Helmet>
        <div className="hotel-page-header">
          <div className="carousel">
            {this.state.hotel.imagesId ? (
              <Carousel>
                {this.state.hotel.imagesId.map(imageId => <Img key={imageId} type="hotels" imageId={imageId} />)}
              </Carousel>
            ) : (
              <div className="placeholder" style={{ width: '100%', height: '100%' }} />
            )}
          </div>
          <div className="hotel-page-header-text">
            <div className="wrapper">
              <div className="hotel-name">
                <h2>{this.state.hotel.name}</h2>
                <Rating width="1.5rem" rate={this.state.hotel.rating} />
                <span className={`badge badge-border badge-${this.state.hotel.price_category}`}>
                  {this.state.hotel.price_category}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="hotel-page-body wrapper">
          <div className="hotel-page-details">
            <h4>Amenities</h4>
            <ul className="amenities">
              {this.state.hotel.amenities ? (
                this.state.hotel.amenities.map(item => (
                  <li key={item}>
                    <SVGIconText text={item.replace('_', ' ')} name={item.toUpperCase()} width="1.4rem" />
                  </li>
                ))
              ) : (
                <p> No Amenities </p>
              )}
            </ul>
            <h4>Description</h4>
            <p>{this.state.hotel.description}</p>
            <div className="hotel-page-rooms">
              {this.state.rooms ? (
                <ul className="room-list">
                  {this.rooms().map(room => (
                    <li key={room.id}>
                      <Room room={room} hotel={this.state.hotel} />
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            {this.state.sample ? (
              <div className="load-more">
                <span className="button" onClick={this.loadMore}>
                  Load More
                </span>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    );
  }
}
