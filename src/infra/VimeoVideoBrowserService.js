const VIMEO_PLAYER_BASE_URL = `https://player.vimeo.com/video/`;

export class VimeoVideoBrowserService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  async search(query) {
    const response = await this.httpClient.get("videos", {
      query,
      per_page: 5,
    });
    
    return response.data.data.map((video) => {
      const videoUrl = video.uri
      const videoId = videoUrl.substring(8, videoUrl.length)
      return ({
        id: video.resource_key,
        title: video.name,
        description: video.description,
        thumbnailUrl: video.pictures.sizes[0].link,
        embedUrl: `${VIMEO_PLAYER_BASE_URL}${videoId}`,
      })
    });
  }
}
