<template>
  <div>
    <VideoSearchBar @onSearchInput="onSearchInput" @onServiceChange="onSelectChange"/>
    <VideoList :list="videoList"/>
  </div>
</template>

<script>
import { VideoSearchBar, VideoList } from '../components'

export default {
  components: { VideoSearchBar, VideoList },
  name: 'App',
  props: ['videoBrowserServiceByVideoServiceId'],
  data: function() {
    return {
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
    onSelectChange(service){
      this.videoServiceId = service
    },
    async onSearchInput(query) {
      this.videoList = await this.videoBrowserService.search(query)
    }
  }
}
</script>