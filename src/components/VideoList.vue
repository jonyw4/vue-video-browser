<template>
  <section>
    <h2>Video List ({{ size }})</h2>
    <ul>
      <slot></slot>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'VideoList',
  props: {
    size: {
      type: Number,
      default: 0
    }
  }
}
</script>