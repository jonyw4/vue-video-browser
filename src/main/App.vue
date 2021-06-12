<template>
  <main class="container">
    <VideoPlayer 
      :title="selectedVideo.title" 
      :description="selectedVideo.description"
      :embedUrl="selectedVideo.embedUrl"
      v-if="selectedVideo" 
    />
    <VideoSearchBar 
      @onInputSearch="onInputVideoSearch" 
      @onChangeService="onChangeVideoService"
      :serviceId="selectedVideoServiceId"
      :serviceList="videoBrowserServiceList"
    />
    <VideoList 
      :list="videoList" 
      @onClickVideo="onClickVideoListItem" 
    />
  </main>
</template>

<script>
import VideoList from '../components/VideoList.vue'
import VideoSearchBar from '../components/VideoSearchBar.vue'
import VideoPlayer from '../components/VideoPlayer.vue'

export default {
  components: { VideoSearchBar, VideoList, VideoPlayer },
  name: 'App',
  props: ['videoBrowserServiceByVideoServiceId'],
  data: function() {
    return {
      selectedVideo: undefined,
      selectedVideoServiceId: 'YOUTUBE',
      videoList: [],
    };
  },
  computed: {
    activeVideoBrowserService() {
      return this.videoBrowserServiceByVideoServiceId[this.selectedVideoServiceId].service
    },
    videoBrowserServiceList() {
      const videoBrowserServicesIds = Object.keys(this.videoBrowserServiceByVideoServiceId)

      return videoBrowserServicesIds.map((id) => {
        const service = this.videoBrowserServiceByVideoServiceId[id];

        return {
          id,
          name: service.name
        }
      })
    }
  },
  methods: {
    onClickVideoListItem(video){
      this.selectedVideo = video;
    },
    onChangeVideoService(service){
      this.selectedVideoServiceId = service
    },
    async onInputVideoSearch(query) {
      this.videoList = await this.activeVideoBrowserService.search(query)
    }
  }
}
</script>
<style scoped>
  main {
    padding-top: 30px;
  }
</style>