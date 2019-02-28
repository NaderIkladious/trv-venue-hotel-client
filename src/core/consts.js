export const DEFAULT_FILTERS_CONTEXT = {
  filters: {
    price_category: '',
    distance_to_venue: 10000,
    rating: 0,
    amenities: []
  }
};

export const AMENITIES = [
  {
    id: 'free_wifi',
    name: 'Free Wifi'
  },
  {
    id: 'free_parking',
    name: 'Free Parking'
  },
  {
    id: 'pets',
    name: 'Pets'
  },
  {
    id: 'restaurant',
    name: 'Restaurant'
  },
  {
    id: 'gym',
    name: 'Gym'
  },
  {
    id: 'pool',
    name: 'Pool'
  },
  {
    id: 'spa',
    name: 'Spa'
  }
];

export const API_URL = process.env.REACT_APP_API_URL;
