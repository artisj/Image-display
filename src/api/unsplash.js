import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 46e3800120a0c1b58608e6ba08e20de2b477d480d3a6ed22e8950d092863bb47"
  }
});
