import { YoutubeVideoBrowserService, VimeoVideoBrowserService } from "../../infra";

export function createVideoBrowserServiceByVideoServiceId(
  youtubeHttpClient,
  vimeoHttpClient
){
  return {
    YOUTUBE: {
      name: 'Youtube',
      service: new YoutubeVideoBrowserService(youtubeHttpClient),
    },
    VIMEO:{ 
      name: 'Vimeo',
      service: new VimeoVideoBrowserService(vimeoHttpClient)
    },
  };
}

