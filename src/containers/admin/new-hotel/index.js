import React from 'react';
import _ from 'lodash';
import axios from 'axios';

import { AMENITIES } from '../../../core/consts';

export default class NewHotel extends React.Component {
  state = {
    name: '',
    price_category: '',
    rating: 0,
    description: '',
    distance_to_venue: 0,
    amenities: []
  };

  /**
   * Call POST api to add new hotel using the state object
   * @param {Object} e The submit event
   * @returns {Void}
   */
  handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:4000/hotels', this.state).then(res => {
      this.props.history.push('/admin');
    });
  };

  /**
   * Handle changing fields and save it to state
   * @param {Object} e The change event
   * @returns {Void}
   */
  handleChange = e => {
    const { state } = this;
    const { name, value } = e.target;
    state[name] = isNaN(parseFloat(value)) ? Number(value) : value;
    this.setState({ ...state });
  };

  /**
   * Handle changing the check state and save it to state
   * @param {Object} e The checking event
   * @returns {Void}
   */
  handleCheck = e => {
    const { checked, value } = e.target;
    this.setState(prevState => {
      let amenities = [];
      if (checked) {
        amenities = [...prevState.amenities, value];
      } else {
        amenities = _.pull(prevState.amenities, value);
      }
      return {
        amenities
      };
    });
  };

  render() {
    return (
      <div className="new-hotel">
        <form>
          <div className="form-element">
            <input
              type="text"
              placeholder="Hotel Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required="required"
            />
          </div>
          <div className="form-element">
            <textarea
              placeholder="Hotel Description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-element">
            <select value={this.state.price_category} required onChange={this.handleChange} name="price_category">
              <option value="">Choose Price Category</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div>
            <label>Distance: {this.state.distance_to_venue}</label>
            <br />
            <input
              type="range"
              id="distance"
              name="distance_to_venue"
              min="0"
              max="10000"
              step="100"
              value={this.state.distance_to_venue}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Rating: {this.state.rating}</label>
            <br />
            <input
              type="range"
              id="rating"
              name="rating"
              min="0"
              max="5"
              step="0.1"
              value={this.state.rating}
              onChange={this.handleChange}
            />
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
                  checked={_.includes(this.state.amenities, amenity.id)}
                  onChange={this.handleCheck}
                />
                <label htmlFor={amenity.id}>{amenity.name}</label>
              </div>
            ))}
          </div>
          <div className="form-element center">
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
