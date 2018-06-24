import React from 'react';
import axios from 'axios';
import HotelItem from './hotel-item';

export default class Landing extends React.Component {
  state = {
    hotels: [],
    loading: true
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/hotels`).then(res => {
      this.setState({
        hotels: res.data,
        loading: false
      });
    });
  }

  render() {
    return (
      <div className="landing">
        <div className="wrapper">
          <h2>Recommended Hotels</h2>
          <div className="landing-search">
            <div className="landing-search-result">
              {this.state.loading ? (
                <p>Loading...</p>
              ) : (
                <ul>
                  {this.state.hotels.map(hotel => (
                    <li key={hotel.id}>
                      <HotelItem hotel={hotel} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="landing-search-filters">
              <form>
                <select>
                  <option value="">Choose Price Category</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                <div>
                  <label for="distance">Distance from Venue</label>
                  <br />
                  <input type="range" id="distance" name="distance" min="0" max="100" step="2" />
                </div>
                <div>
                  <label>Amenities</label>
                  <div>
                    <input type="checkbox" id="free_wifi" name="free_wifi" value="free_wifi" />
                    <label for="free_wifi">Free Wifi</label>
                  </div>
                  <div>
                    <input type="checkbox" id="free_parking" name="free_parking" value="free_parking" />
                    <label for="free_parking">Free Parking</label>
                  </div>
                  <div>
                    <input type="checkbox" id="pets" name="pets" value="pets" />
                    <label for="pets">Pets</label>
                  </div>
                  <div>
                    <input type="checkbox" id="restaurant" name="restaurant" value="restaurant" />
                    <label for="restaurant">Restaurant</label>
                  </div>
                  <div>
                    <input type="checkbox" id="gym" name="gym" value="gym" />
                    <label for="gym">Gym</label>
                  </div>
                  <div>
                    <input type="checkbox" id="pool" name="pool" value="pool" />
                    <label for="pool">Pool</label>
                  </div>
                  <div>
                    <input type="checkbox" id="spa" name="spa" value="spa" />
                    <label for="spa">Spa</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
