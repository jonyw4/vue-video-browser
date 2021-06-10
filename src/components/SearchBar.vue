<template>
  <input type="text" @keyup="onInputKeyUp"/>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onInputKeyUp (event) {
      this.$emit('onInput', event.target.value)
    }
  }
}
</script>