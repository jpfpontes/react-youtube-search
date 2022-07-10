import axios from "axios";

export default axios.create({
  baseURL: `${process.env.REACT_APP_YOUTUBE_SEARCH_BASE_URL}`,
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: `${process.env.REACT_APP_YOUTUBE_API_KEY}`,
  },
});
