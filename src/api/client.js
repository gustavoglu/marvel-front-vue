import axios from "axios";
import authService from "../services/authMarvelService";
import notificationService from "../services/notificationService";

const client = axios.create({
  baseURL: process.env.VUE_APP_API_ROOT,
});

client.interceptors.request.use((req) => {
  let apiKeyParams = authService.getApiKeyParams();
  if (!req.params) req.params = {};
  req.params.apikey = apiKeyParams.apikey;
  req.params.hash = apiKeyParams.hash;
  req.params.ts = apiKeyParams.ts;
  return req;
});

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let errorString = error.response.data.status;
    if (errorString) notificationService.error(errorString);
    else notificationService.error(error);
    return error.response.data;
  }
);

export default client;
