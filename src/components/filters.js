import React from 'react';
import _ from 'lodash';

import { LandingContext } from '../containers/landing';
import { DEFAULT_FILTERS_CONTEXT, AMENITIES } from '../core/consts';
import { Rating } from '.';

export class Filters extends React.Component {
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
                  <span className="badge badge-high close" onClick={() => this.handleChoose(0)}>
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

                {AMENITIES.map(amenity => (
                  <div key={amenity.key}>
                    <input
                      type="checkbox"
                      id={amenity.id}
                      name={amenity.id}
                      value={amenity.id}
                      checked={_.includes(this.state.filters.amenities, amenity.id)}
                      onChange={this.handleCheck}
                    />
                    <label htmlFor={amenity.id}>{amenity.name}</label>
                  </div>
                ))}
              </div>
              <button onClick={e => this.handleSubmit(e, context)}>Filter</button>
            </form>
          </div>
        )}
      </LandingContext.Consumer>
    );
  }
}
