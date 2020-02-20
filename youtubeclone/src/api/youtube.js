import axios from 'axios';

// using create method rather than get in order to make easier get requests later
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
});