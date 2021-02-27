import axios from 'axios'

const KEY = 'AIzaSyCzSvzPBpN65f7wbQHdAAwt3f8jpcUrtNE'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})