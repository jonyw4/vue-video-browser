<template>
  <input type="text" @keyup="onChange"/>
</template>

<script>
export default {
  name: "SearchBar",
  props: ["onChange"],
}
</script>