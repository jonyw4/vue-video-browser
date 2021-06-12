<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <div class="ratio ratio-16x9">
      <iframe  
        type="text/html"
        :src="url"
        frameborder="0"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: ['title', 'description', 'url']
}
</script>