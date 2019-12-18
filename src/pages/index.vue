<template>
  <div id="index" class="page-wrap">
    <div>
      <div class="logo color_base">TJUI</div>
      <div class="gray mt_15 ml_5">基于 Vue.js 实现的移动端通用组件库</div>
    </div>
    <tj-collapse class="mt_15" :title="item.name" v-model="item.status" v-for="item in sidebars">
      <tj-cell
        class="bd_t_1"
        :title="child.name"
        v-for="child in item.childrens"
        :to="child.path"
        @click="handleClick(child)"
      ></tj-cell>
    </tj-collapse>
  </div>
</template>

<script>
import router from "@/router/index";
const FIRST_LEVEL = [
  { name: "基础组件" },
  { name: "表单组件" },
  { name: "反馈组件" },
  { name: "展示组件" },
  { name: "导航组件" }
];
export default {
  computed: {
    sidebars() {
      const routes = router.options.routes;
      FIRST_LEVEL.forEach(level => {
        level.status = false;
        level.childrens = [];
        routes.forEach(route => {
          if (level.name === route.label) {
            level.childrens.push(route);
          }
        });
      });
      return FIRST_LEVEL;
    }
  },
  methods: {
    handleClick(item) {
      this.$router.push(item.path);
    }
  },
};
</script>

<style lang="stylus">
#index {
  padding: 15px;

  .logo {
    font-size: 3rem;
    margin: 30px 0 20px;
  }
}
</style>
