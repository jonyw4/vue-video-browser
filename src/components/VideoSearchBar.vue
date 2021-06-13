<template>
  <div class="input-group mb-3">
    <input type="text" class="form-control" aria-label="Video Searchbar"  @input="debouncedOnInputKeyUp">
    <div class="input-group-text">
      <select class="form-select" @change="onSelectChange" :value="serviceId">
        <option v-for="service in serviceList" :value="service.id" :key="service.id">
          {{service.name}}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce';

export default {
  name: "VideoSearchBar",
  props: ['serviceId', 'serviceList'],
  computed: {
    debouncedOnInputKeyUp() {
      return debounce(this.onInputKeyUp, 250)
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