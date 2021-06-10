export class VimeoVideoBrowserService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  async search(query) {
    const response = await this.httpClient.get("videos", {
      query,
      per_page: 5,
    });
    return response.data.data.map((video) => ({
      id: video.resource_key,
      title: video.name,
      thumbnailUrl: video.pictures.sizes[0].link,
    }));
  }
}
