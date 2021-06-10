<template>
  <div class="input-group mb-3">
    <input type="text" class="form-control" aria-label="Video Searchbar"  @keyup="onInputKeyUp">
    <div class="input-group-text">
      <select class="form-select" @change="onSelectChange" v-bind:value="serviceId">
        <option v-for="service in serviceList" :value="service.id" :key="service.id">
          {{service.name}}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoSearchBar",
  props: ['serviceId', 'serviceList'],
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