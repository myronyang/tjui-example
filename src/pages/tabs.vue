<template>
  <div class="page-wrap">
    <tj-header title="Tabs 标签页"></tj-header>
    <tj-tabs v-model="tabs" class="mt_15">
      <tj-tabs-item :name="i" :label="'标签' + i" v-for="(t, i) in 3" :key="i">内容 {{i}}</tj-tabs-item>
    </tj-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabs: 0,
      }
    }
  }
</script>