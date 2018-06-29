import React from 'react';
import _ from 'lodash';
import axios from 'axios';

export default class NewHotel extends React.Component {
  state = {
    name: '',
    price_category: '',
    rating: 0,
    description: '',
    distance_to_venue: 0,
    amenities: []
  };
  handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:4000/hotels', this.state).then(res => {
      console.log(res);
    });
  };
  handleChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ ...state });
  };
  handleCheck = e => {
    const target = e.target;
    this.setState(prevState => {
      let amenities = [];
      if (target.checked) {
        amenities = [...prevState.amenities, target.value];
      } else {
        amenities = _.pull(prevState.amenities, target.value);
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
            <label>Amenities</label>
            <div>
              <input
                type="checkbox"
                id="free_wifi"
                name="free_wifi"
                value="free_wifi"
                checked={_.includes(this.state.amenities, 'free_wifi')}
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
                checked={_.includes(this.state.amenities, 'free_parking')}
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
                checked={_.includes(this.state.amenities, 'pets')}
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
                checked={_.includes(this.state.amenities, 'restaurant')}
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
                checked={_.includes(this.state.amenities, 'gym')}
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
                checked={_.includes(this.state.amenities, 'pool')}
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
                checked={_.includes(this.state.amenities, 'spa')}
                onChange={this.handleCheck}
              />
              <label htmlFor="spa">Spa</label>
            </div>
          </div>
          <div className="form-element center">
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
