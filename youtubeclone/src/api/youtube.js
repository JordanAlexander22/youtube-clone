import axios from 'axios';

// using create method rather than get in order to make easier get requests later
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 7,
        key:'AIzaSyC5S-TRIfN9oPjTkXolln8c-qtN6qx43mA'
    }
})