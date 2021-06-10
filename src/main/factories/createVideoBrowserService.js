import { YoutubeVideoBrowserService, AxiosHttpClient } from "../../infra";

export function createVideoBrowserService(){
  const httpClient = new AxiosHttpClient('https://www.googleapis.com/youtube/v3/')
  return new YoutubeVideoBrowserService(httpClient);
}