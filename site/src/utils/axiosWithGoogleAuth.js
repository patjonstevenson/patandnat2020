import axios from "axios";

const axiosWithGoogleAuth = axios.create({
  headers: {
    Authorization: process.env.MAPS_KEY
  }
});

export default axiosWithGoogleAuth;
