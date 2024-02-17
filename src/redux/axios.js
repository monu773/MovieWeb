const axios =  require("axios");

exports.axiosPost = (url, payload) => axios.post(url, payload);
exports.axiosGet = (url) => axios.get(url);