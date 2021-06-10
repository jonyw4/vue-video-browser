<template>
  <div>
    <input type="text" @keyup="onInputKeyUp"/>
    <select @change="onSelectChange" v-bind:value="service">
      <option value="YOUTUBE">Youtube</option>
      <option value="VIMEO">Vimeo</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "VideoSearchBar",
  props: {
    service: {
      default: 'YOUTUBE'
    }
  },
  methods: {
    onInputKeyUp (event) {
      this.$emit('onSearchInput', event.target.value)
    },
    onSelectChange(event){
      this.$emit('onServiceChange', event.target.value)
    }
  }
}
</script>