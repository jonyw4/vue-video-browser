import { YOUTUBE_DATA_API_KEY } from "../consts";

const YOUTUBE_EMBED_BASE_URL = "https://www.youtube.com/embed/"

export class YoutubeVideoBrowserService {
  constructor(httpClient){
    this.httpClient = httpClient;
  }
  async search(query) {
    const response = await this.httpClient.get("search", {
      key: YOUTUBE_DATA_API_KEY,
      type: "video",
      part: "snippet",
      q: query,
    });

    return response.data.items.map((item) => ({
      id: item.etag,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnailUrl: item.snippet.thumbnails.default.url,
      embedUrl: `${YOUTUBE_EMBED_BASE_URL}${item.id.videoId}&autoplay=1`,
    }));
  }
}
