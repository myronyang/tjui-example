<template>
  <div class="page-wrap">
    <tj-header title="Indicator 加载提示"></tj-header>
    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">基本用法</div>
      <tj-button size="small" class="mr_10 mb_15" round="3px" @click="handle">默认</tj-button>
      <tj-button
        size="small"
        type="success"
        class="mr_10 mb_15"
        @click="handle2"
        round="3px"
      >文字</tj-button>
      <tj-button
        size="small"
        type="danger"
        class="mr_10 mb_15"
        @click="handle3"
        round="3px"
      >图标</tj-button>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    handle() {
      this.$indicator.open();
      setTimeout(() => this.$indicator.close(), 2000);
    },
    handle2() {
      this.$indicator.open("加载中");
      setTimeout(() => this.$indicator.close(), 2000);
    },
    handle3() {
      this.$indicator.open({
        text: "加载中",
        iconType: "circular"
      });
      setTimeout(() => this.$indicator.close(), 2000);
    }
  }
};
</script>
