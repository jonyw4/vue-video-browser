import axios from "axios";

export class AxiosHttpClient {
  constructor(baseURL) {
    this.axios = axios.create({
      baseURL,
    });
  }
  get(url, params = {}) {
    return this.axios.get(url, {
      params
    });
  }
}