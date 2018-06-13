<template lang="pug">
  div.list
    listitem(v-for="item in orderedItems" :item="item" :key="item.id")
</template>

<script src="./app.js">
</script>
