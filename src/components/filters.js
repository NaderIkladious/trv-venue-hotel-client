import React from 'react';
import _ from 'lodash';

import { LandingContext } from '../containers/landing';
import { DEFAULT_FILTERS_CONTEXT, AMENITIES } from '../core/consts';
import { Rating } from '.';

export class Filters extends React.Component {
  state = {
    ...DEFAULT_FILTERS_CONTEXT
  };

  /**
   * Handle changing text values
   * @param {event} e The field value change event
   * @param {Context} context React context
   * @returns {Void}
   */
  handleChange = (e, context) => {
    const { filters } = this.state;
    filters[e.target.name] = e.target.value;
    this.setState({ filters }, () => {
      context.update({ filters });
    });
  };

  /**
   * Handle checking and unchecking amenities
   * @param {object} e The change event
   * @param {Context} context React Context
   * @returns {Void}
   */
  handleCheck = (e, context) => {
    const { checked, value } = e.target;
    this.setState(
      prevState => {
        let amenities = [];
        if (checked) {
          amenities = [...prevState.filters.amenities, value];
        } else {
          amenities = _.pull(prevState.filters.amenities, value);
        }
        return {
          ...prevState,
          filters: {
            ...prevState.filters,
            amenities
          }
        };
      },
      () => {
        context.update({ filters: this.state.filters });
      }
    );
  };

  /**
   * Handle Chaning the rating filter
   * @param {number} rate The rating number
   * @param {Context} context React Context
   * @returns {Void}
   */
  handleChoose = (rate, context) => {
    const { filters } = this.state;
    filters['rating'] = rate;
    this.setState({ filters }, () => {
      context.update({ filters });
    });
  };
  render() {
    return (
      <LandingContext.Consumer>
        {context => (
          <div className="landing-search-filters">
            <form>
              <div className="form-element">
                <select
                  value={this.state.filters.price_category}
                  onChange={e => this.handleChange(e, context)}
                  name="price_category"
                >
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
                  onChange={e => this.handleChange(e, context)}
                />
              </div>
              <div>
                <label>Minimum Rating </label>
                {this.state.filters.rating ? (
                  <span className="badge badge-high close" onClick={() => this.handleChoose(0, context)}>
                    x
                  </span>
                ) : (
                  ''
                )}
                <br />
                <Rating rate={this.state.filters.rating} handleClick={e => this.handleChoose(e, context)} />
              </div>
              <div>
                <label>Amenities</label>

                {AMENITIES.map(amenity => (
                  <div key={amenity.id}>
                    <input
                      type="checkbox"
                      id={amenity.id}
                      name={amenity.id}
                      value={amenity.id}
                      checked={_.includes(this.state.filters.amenities, amenity.id)}
                      onChange={e => this.handleCheck(e, context)}
                    />
                    <label htmlFor={amenity.id}>{amenity.name}</label>
                  </div>
                ))}
              </div>
            </form>
          </div>
        )}
      </LandingContext.Consumer>
    );
  }
}
