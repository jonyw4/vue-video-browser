<template>
  <div class="input-group mb-3">
    <input type="text" class="form-control" aria-label="Video Searchbar"  @keyup="onInputKeyUp">
    <div class="input-group-text">
      <select class="form-select" @change="onSelectChange" v-bind:value="service">
        <option value="YOUTUBE">Youtube</option>
        <option value="VIMEO">Vimeo</option>
      </select>
    </div>
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
      this.$emit('onInputSearch', event.target.value)
    },
    onSelectChange(event){
      this.$emit('onChangeService', event.target.value)
    }
  }
}
</script>