<template>
  <div class="page-wrap">
    <tj-header title="Search 搜索框" fixed></tj-header>
    <form action="/">
      <tj-search v-model="searchName" @keyup.enter.native="search"></tj-search>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchName: ""
    };
  },
  methods: {
    search() {
      this.$toast(this.searchName);
    }
  }
};
</script>