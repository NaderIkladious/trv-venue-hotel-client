import React from 'react';
import axios from 'axios';
import _ from 'lodash';

import { HotelItem, Filters, Spinner } from '../../components';
import { DEFAULT_FILTERS_CONTEXT } from '../../core/consts';

import './style.css';

export const LandingContext = React.createContext(DEFAULT_FILTERS_CONTEXT);

export class Landing extends React.Component {
  state = {
    hotels: [],
    loading: true,
    ...DEFAULT_FILTERS_CONTEXT,

    /**
     * @param {Object} state The new state to set
     * @returns {Void}
     */
    update: state => {
      this.setState(state);
    }
  };

  componentDidMount() {
    /**
     * Get all available hotels and set their data to state
     */
    axios.get(`http://localhost:4000/hotels`).then(res => {
      this.setState({
        hotels: res.data,
        loading: false
      });
    });
  }

  /**
   * Filter hotel depending on the filter criteria
   * @returns {Array} Filtered hotels list
   */
  filteredHotels() {
    const { price_category, distance_to_venue, amenities, rating } = this.state.filters;

    const result = _.filter(this.state.hotels, hotel => {
      return (
        (price_category && price_category.length ? hotel.price_category === price_category : true) &&
        (amenities && _.intersection(hotel.amenities, amenities).length === amenities.length) &&
        (distance_to_venue && hotel.distance_to_venue <= distance_to_venue) &&
        hotel.rating >= rating
      );
    });
    return result;
  }

  render() {
    const hotels = this.filteredHotels();
    return (
      <LandingContext.Provider value={this.state}>
        <div className="landing">
          <div className="wrapper">
            <h2>Recommended Hotels</h2>
            <div className="landing-search">
              <Filters />
              <div className="landing-search-result">
                {this.state.loading ? (
                  <Spinner />
                ) : (
                  <div>
                    {hotels.length ? (
                      <ul>
                        {hotels.map(hotel => (
                          <li key={hotel.id}>
                            <HotelItem hotel={hotel} />
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="no-result">
                        <p>No result were found for the selected criteria.</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </LandingContext.Provider>
    );
  }
}
