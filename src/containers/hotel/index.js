import React from 'react';
import axios from 'axios';
import Carousel from 'nuka-carousel';
import { Helmet } from 'react-helmet';
import _ from 'lodash';
import { Rating, Img, SVGIconText, Room, Spinner } from '../../components';

export class Hotel extends React.Component {
  state = {
    loading: true,
    sample: true,
    hotel: {},
    rooms: []
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    /**
     * Get hotel by ID and set it to state
     */
    axios.get(`http://localhost:4000/hotels/${id}`).then(res => {
      this.setState({
        hotel: res.data,
        loading: false
      });
    });

    /**
     * Get rooms for specific hotel using hotel ID
     */
    axios.get(`http://localhost:4000/rooms?hotel_id=${id}`).then(res => {
      this.setState({
        rooms: res.data
      });
    });
  }

  /**
   * Sort rooms using the price field ASC
   * Also load 2 as initial
   * @returns {Array} Array or room objects
   */
  rooms = () => {
    const { rooms } = this.state;
    let result = _.orderBy(rooms, 'price_in_usd');
    result = this.state.sample ? _.take(result, 2) : result;
    return result;
  };

  /**
   * Setting sample flag to false to load the remaining rooms
   * @returns {Void}
   */
  loadMore = () => {
    this.setState({ sample: false });
  };

  render() {
    const { hotel, sample, loading } = this.state;
    const rooms = this.rooms();
    return (
      <div className="hotel-page">
        <Helmet>
          <title>{hotel.name}</title>
        </Helmet>
        <div className="hotel-page-header">
          <div className="carousel">
            {hotel.imagesId ? (
              <Carousel>
                {hotel.imagesId.map(imageId => (
                  <Img key={imageId} type="hotels" imageId={imageId} />
                ))}
              </Carousel>
            ) : (
              <div className="placeholder" style={{ width: '100%', height: '100%' }} />
            )}
          </div>
          <div className="hotel-page-header-text">
            <div className="wrapper">
              <div className="hotel-name">
                <h2>{hotel.name}</h2>
                <Rating width="1.5rem" rate={hotel.rating} />
                <span className={`badge badge-border badge-${hotel.price_category}`}>{hotel.price_category}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hotel-page-body wrapper">
          <div className="hotel-page-details">
            <h4>Amenities</h4>
            <ul className="amenities">
              {hotel.amenities ? (
                hotel.amenities.map(item => (
                  <li key={item}>
                    <SVGIconText text={item.replace('_', ' ')} name={item.toUpperCase()} width="1.4rem" />
                  </li>
                ))
              ) : (
                <p> No Amenities </p>
              )}
            </ul>
            <h4>Description</h4>
            <p>{hotel.description}</p>
            <div className="hotel-page-rooms">
              {loading ? (
                <Spinner />
              ) : (
                <div>
                  {rooms.length ? (
                    <ul className="room-list">
                      {rooms.map(room => (
                        <li key={room.id}>
                          <Room room={room} hotel={hotel} />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="no-result">
                      <p>There are no rooms found for this hotel at the moment.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
            {!loading && rooms.length > 0 && sample && (
              <div className="load-more">
                <span className="button" onClick={this.loadMore}>
                  Load More
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
