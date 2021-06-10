<template>
  <div>
    <SearchBar @onInput="onInputSearchBar"/>
    <VideoList>
      <VideoListItem v-for="video in videoList" :key="video.id" :video="video" />
    </VideoList>
  </div>
</template>

<script>
import { SearchBar, VideoList, VideoListItem } from '../components'
import { createVideoBrowserService } from './factories'

const videoBrowserService = createVideoBrowserService()

export default {
  components: { SearchBar, VideoList, VideoListItem },
  name: 'App',
  data: function() {
    return {
      videoList: [],
    };
  },
  methods: {
    async onInputSearchBar(query) {
      this.videoList = await videoBrowserService.search(query)
    }
  }
}
</script>