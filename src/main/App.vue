<template>
  <main class="container">
    <VideoSearchBar 
      @onInputSearch="onInputVideoSearch" 
      @onChangeService="onChangeVideoService"
      :serviceId="videoServiceId"
      :serviceList="videoBrowserServiceList"
    />
    <VideoList 
      :list="videoList" 
      @onClickVideo="onClickVideoListItem" 
    />
    {{ videoId }}
  </main>
</template>

<script>
import VideoList from '../components/VideoList.vue'
import VideoSearchBar from '../components/VideoSearchBar.vue'

export default {
  components: { VideoSearchBar, VideoList },
  name: 'App',
  props: ['videoBrowserServiceByVideoServiceId'],
  data: function() {
    return {
      videoId: '',
      videoServiceId: 'YOUTUBE',
      videoList: [],
    };
  },
  computed: {
    activeVideoBrowserService() {
      return this.videoBrowserServiceByVideoServiceId[this.videoServiceId].service
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
    onClickVideoListItem(id){
      this.videoId = id;
    },
    onChangeVideoService(service){
      this.videoServiceId = service
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