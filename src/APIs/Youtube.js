import axios from "axios";



const KEY = 'AIzaSyDPOROEXbx8PVbshgNO_aEU3lOI-8lB2Y8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 8,
        type: 'video',
        key: KEY
    }
});