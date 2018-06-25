import React from 'react';
import axios from 'axios';
import HotelItem from './hotel-item';
import Filters from './filters';
import * as _ from 'lodash';

export const DEFAULT_FILTERS_CONTEXT = {
  filters: {
    price_category: '',
    distance_to_venue: 10000,
    amenities: []
  }
};
export const LandingContext = React.createContext(DEFAULT_FILTERS_CONTEXT);

export default class Landing extends React.Component {
  state = {
    hotels: [],
    loading: true,
    ...DEFAULT_FILTERS_CONTEXT,
    update: state => {
      this.setState(state);
    }
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/hotels`).then(res => {
      this.setState({
        hotels: res.data,
        loading: false
      });
    });
  }

  filteredHotels() {
    const { price_category, distance_to_venue, amenities } = this.state.filters;

    const result = _.filter(this.state.hotels, hotel => {
      return price_category && price_category.length
        ? hotel.price_category === price_category
        : true && amenities
          ? _.intersection(hotel.amenities, amenities).length === amenities.length
          : true && distance_to_venue ? hotel.distance_to_venue <= distance_to_venue : true;
    });
    return result;
  }

  render() {
    return (
      <LandingContext.Provider value={this.state}>
        <div className="landing">
          <div className="wrapper">
            <h2>Recommended Hotels</h2>
            <div className="landing-search">
              <div className="landing-search-result">
                {this.state.loading ? (
                  <p>Loading...</p>
                ) : (
                  <ul>
                    {this.filteredHotels().map(hotel => (
                      <li key={hotel.id}>
                        <HotelItem hotel={hotel} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <Filters />
            </div>
          </div>
        </div>
      </LandingContext.Provider>
    );
  }
}
