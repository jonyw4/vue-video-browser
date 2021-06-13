<template>
  <nav class="col-md-4">
    <h4>Video List ({{ list.length }})</h4>
    <ul>
      <li class="list-group-item media" v-for="video in list" :key="video.id" @click="onClickVideo(video)">
        <img :src="video.thumbnailUrl" :alt="video.title" />
        <div class="media-body">
          {{ video.title }}
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'VideoList',
  props: {
    list: Array
  },
  methods: {
    onClickVideo(video){
      this.$emit('onClickVideo', video)
    }
  }
}
</script>

<style scoped>
  ul {
    padding: 0;
  }
  li {
    display: flex;
    cursor: pointer;
  }
  li:hover{
    background-color: #eee;
  }
  li img {
    margin-right: 8px;
  }
</style>