import { YOUTUBE_DATA_API_KEY } from "../consts";

export class YoutubeVideoBrowserService {
  constructor(httpClient){
    this.httpClient = httpClient;
  }
  async search(query) {
    console.log(YOUTUBE_DATA_API_KEY);
    const response = await this.httpClient.get("search", {
      key: YOUTUBE_DATA_API_KEY,
      type: "video",
      part: "snippet",
      q: query,
    });

    return response.data.items.map((item) => ({
      id: item.etag,
      title: item.snippet.title,
      thumbnailUrl: item.snippet.thumbnails.default.url,
    }));
  }
}
