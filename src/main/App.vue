<template>
  <div>
    <SearchBar @onInput="onInputSearchBar"/>
    <article v-for="video in videoList" :key="video.id">
      {{video.title}}
    </article>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import { createVideoBrowserService } from './factories'

const videoBrowserService = createVideoBrowserService()

export default {
  components: { SearchBar },
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