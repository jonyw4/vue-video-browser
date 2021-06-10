import { YoutubeVideoBrowserService, VimeoVideoBrowserService } from "../../infra";

export function createVideoBrowserServiceByVideoServiceId(
  youtubeHttpClient,
  vimeoHttpClient
){
  return {
    YOUTUBE: new YoutubeVideoBrowserService(youtubeHttpClient),
    VIMEO: new VimeoVideoBrowserService(vimeoHttpClient),
  };
}

