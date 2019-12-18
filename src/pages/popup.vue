<template>
  <div class="page-wrap">
    <tj-header title="Popup 弹出层"></tj-header>

    <section class="mt_15">
      <tj-cell class="mt_15" title="向上弹出" value="top" @click="handleClick(1)"></tj-cell>
      <tj-cell class="mt_15" title="向下弹出" value="bottom" @click="handleClick(2)"></tj-cell>
      <tj-cell class="mt_15" title="向左弹出" value="left" @click="handleClick(3)"></tj-cell>
      <tj-cell class="mt_15" title="向右弹出" value="right" @click="handleClick(4)"></tj-cell>
      <tj-cell class="mt_15" title="中间弹出" value="center" @click="handleClick(5)"></tj-cell>
    </section>

    <tj-popup position="top" v-model="visible1">
      <tj-panel>top content</tj-panel>
    </tj-popup>
    <tj-popup position="bottom" v-model="visible2">
      <tj-panel>bottom content</tj-panel>
    </tj-popup>
    <tj-popup position="left" v-model="visible3">
      <tj-panel>left content</tj-panel>
    </tj-popup>
    <tj-popup position="right" v-model="visible4">
      <tj-panel>
        <p>right content</p>
        <tj-button class="mt_15" size="large" round="3px" @click="visible4 = false">关闭</tj-button>
      </tj-panel>
    </tj-popup>
    <tj-popup position="center" v-model="visible5">
      <tj-panel>center content</tj-panel>
    </tj-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false
    };
  },
  methods: {
    handleClick(type) {
      this[`visible${type}`] = true;
    }
  }
};
</script>
