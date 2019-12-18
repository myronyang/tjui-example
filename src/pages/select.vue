<template>
  <div class="page-wrap">
    <tj-header title="Select 选择器"></tj-header>
    <tj-cell class="mt_15" title="选择兴趣爱好" :value="value" @click="visible = true"></tj-cell>
    <tj-cell class="mt_15" title="测试选项" :value="value2" @click="visible2 = true"></tj-cell>
    <tj-cell class="mt_15" title="收获地址">
      <span class="gray" @click="visible3 = true">{{value3.join(",")}}</span>
    </tj-cell>
    <tj-select title="兴趣爱好" v-model="value" :visible.sync="visible" :options="options"></tj-select>
    <tj-select
      title="选项对象"
      v-model="value2"
      :visible.sync="visible2"
      value-key="name"
      select-key="name"
      :options="options2"
    ></tj-select>
    <tj-select
      title="收获地址"
      v-model="value3"
      :visible.sync="visible3"
      value-key="name"
      select-key="name"
      :item-count="3"
      :options="options3"
    ></tj-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      value: "网球",
      options: ["篮球", "足球", "网球", "橄榄球", "冰球"],
      visible2: false,
      value2: "选项1",
      options2: [],
      visible3: false,
      value3: ["省份0", "城市0", "区县0"],
      options3: []
    };
  },
  mounted() {
    for (var i = 0; i < 5; i++) {
      this.options2.push({
        id: i,
        name: "选项" + i
      });
      // this.value3.push({
      //   id: i,
      //   name: "选项" + i
      // });

      var children = [];

      for (var j = 0; j < 5; j++) {
        var childrens = [];
        for (var k = 0; k < 5; k++) {
          childrens.push({
            id: k,
            name: "省份" + k
          });
        }

        children.push({
          id: j,
          name: "城市" + j,
          children: childrens
        });
      }

      this.options3.push({
        id: i,
        name: "区县" + i,
        children: children
      });
    }
  }
};
</script>

<style>
</style>
