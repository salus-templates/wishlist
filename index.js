console.log('test something');

// axios 2.0.0
const axios = require('axios');

// Updated way to set default headers in axios 2.0.0
axios.defaults.headers.common = {
  'Authorization': 'Bearer token'
};

axios.get('/user')
  .then(response => {
    // Response handling remains similar in 2.0.0
    console.log(response.data);
  })
  .catch(error => {
    // Updated error handling for axios 2.0.0
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // Server responded with status code outside 2xx range
        console.error('Response error:', error.response.data);
      } else if (error.request) {
        // Request made but no response received
        console.error('Request error:', error.request);
      } else {
        // Error setting up request
        console.error('Error:', error.message);
      }
    } else {
      console.error('Non-Axios error:', error);
    }
  });
