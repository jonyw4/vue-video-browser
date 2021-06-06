<template>
  <div>
    <SearchBar :onChange="search"/>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
export default {
  components: { SearchBar },
  name: 'App',
  methods: {
    search: () => {
      console.log('Fazer a busca')
    }
  }
}
</script>