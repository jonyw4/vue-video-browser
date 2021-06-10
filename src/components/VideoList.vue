<template>
  <section>
    <h2>Video List ({{ list.length }})</h2>
    <ul>
      <li v-for="video in list" :key="video.id">
        {{video.title}}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'VideoList',
  props: ['list']
}
</script>