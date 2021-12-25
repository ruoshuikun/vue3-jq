<template>
  <Header/>
  <div ref="content" class="content">
    <router-view />
  </div>
</template>

<script>
import Header from './Header'

export default {
  name: "index",
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
.content {
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
