import React from 'react';
import { LandingContext, DEFAULT_FILTERS_CONTEXT } from '../containers/landing';
import Rating from './rating';
import * as _ from 'lodash';

export default class Filters extends React.Component {
  state = {
    ...DEFAULT_FILTERS_CONTEXT
  };
  handleChange = e => {
    const { filters } = this.state;
    filters[e.target.name] = e.target.value;
    this.setState({ filters });
  };
  handleCheck = e => {
    const target = e.target;
    this.setState(prevState => {
      let amenities = [];
      if (target.checked) {
        amenities = [...prevState.filters.amenities, target.value];
      } else {
        amenities = _.pull(prevState.filters.amenities, target.value);
      }
      return {
        ...prevState,
        filters: {
          ...prevState.filters,
          amenities
        }
      };
    });
  };
  handleSubmit = (e, context) => {
    e.preventDefault();
    context.update({ filters: this.state.filters });
  };
  handleChoose = rate => {
    const { filters } = this.state;
    filters['rating'] = rate;
    this.setState({ filters });
  };
  render() {
    return (
      <LandingContext.Consumer>
        {context => (
          <div className="landing-search-filters">
            <form>
              <div className="form-element">
                <select value={this.state.filters.price_category} onChange={this.handleChange} name="price_category">
                  <option value="">Choose Price Category</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="form-element">
                <label>Distance > {this.state.filters.distance_to_venue}</label>
                <br />
                <input
                  type="range"
                  id="distance"
                  name="distance_to_venue"
                  min="0"
                  max="10000"
                  step="100"
                  value={this.state.filters.distance_to_venue}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Minimum Rating </label>
                {this.state.filters.rating ? (
                  <span className="badge badge-high" onClick={() => this.handleChoose(0)}>
                    x
                  </span>
                ) : (
                  ''
                )}
                <br />
                <Rating rate={this.state.filters.rating} handleClick={this.handleChoose} />
              </div>
              <div>
                <label>Amenities</label>
                <div>
                  <input
                    type="checkbox"
                    id="free_wifi"
                    name="free_wifi"
                    value="free_wifi"
                    checked={_.includes(this.state.filters.amenities, 'free_wifi')}
                    onChange={this.handleCheck}
                  />
                  <label htmlFor="free_wifi">Free Wifi</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="free_parking"
                    name="free_parking"
                    value="free_parking"
                    checked={_.includes(this.state.filters.amenities, 'free_parking')}
                    onChange={this.handleCheck}
                  />
                  <label htmlFor="free_parking">Free Parking</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="pets"
                    name="pets"
                    value="pets"
                    checked={_.includes(this.state.filters.amenities, 'pets')}
                    onChange={this.handleCheck}
                  />
                  <label htmlFor="pets">Pets</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="restaurant"
                    name="restaurant"
                    value="restaurant"
                    checked={_.includes(this.state.filters.amenities, 'restaurant')}
                    onChange={this.handleCheck}
                  />
                  <label htmlFor="restaurant">Restaurant</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="gym"
                    name="gym"
                    value="gym"
                    checked={_.includes(this.state.filters.amenities, 'gym')}
                    onChange={this.handleCheck}
                  />
                  <label htmlFor="gym">Gym</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="pool"
                    name="pool"
                    value="pool"
                    checked={_.includes(this.state.filters.amenities, 'pool')}
                    onChange={this.handleCheck}
                  />
                  <label htmlFor="pool">Pool</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="spa"
                    name="spa"
                    value="spa"
                    checked={_.includes(this.state.filters.amenities, 'spa')}
                    onChange={this.handleCheck}
                  />
                  <label htmlFor="spa">Spa</label>
                </div>
              </div>
              <button onClick={e => this.handleSubmit(e, context)}>Filter</button>
            </form>
          </div>
        )}
      </LandingContext.Consumer>
    );
  }
}
