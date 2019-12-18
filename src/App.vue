<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import './common/style/index.styl';

#app, .page-wrap {
  height: 100%;
}
</style>
