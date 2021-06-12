<template>
  <div class="col-md-8">
    <div class="ratio ratio-16x9">
      <iframe  
        type="text/html"
        :src="embedUrl"
        frameborder="0"
      />
    </div>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: ['title', 'description', 'embedUrl']
}
</script>