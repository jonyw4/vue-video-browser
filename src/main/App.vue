<template>
  <main class="container">
    <VideoSearchBar 
      @onInputSearch="onInputVideoSearch" 
      @onChangeService="onChangeVideoService"
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
    videoBrowserService() {
      return this.videoBrowserServiceByVideoServiceId[this.videoServiceId]
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
      this.videoList = await this.videoBrowserService.search(query)
    }
  }
}
</script>
<style scoped>
  main {
    padding-top: 30px;
  }
</style>