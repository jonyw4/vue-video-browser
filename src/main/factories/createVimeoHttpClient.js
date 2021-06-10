import { VIMEO_API_KEY } from "../../consts";

export function createVimeoHttpClient(HttpClient) {
  return new HttpClient("https://api.vimeo.com", {
    Authorization: `bearer ${VIMEO_API_KEY}`,
  });
}
