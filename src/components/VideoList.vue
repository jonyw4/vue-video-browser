<template>
  <section>
    <h4>Video List ({{ list.length }})</h4>
    <ul>
      <li class="list-group-item media" v-for="video in list" :key="video.id" @click="onClickVideo(video)">
        <img :src="video.thumbnailUrl" :alt="video.title" />
        <div class="media-body">
          {{ video.title }}
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'VideoList',
  props: {
    list: Array
  },
  methods: {
    onClickVideo(id){
      this.$emit('onClickVideo', id)
    }
  }
}
</script>

<style scoped>
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