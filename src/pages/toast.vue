<template>
  <div class="page-wrap">
    <tj-header title="Toast 轻提示"></tj-header>
    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">基本用法</div>
      <tj-button size="small" class="mr_10 mb_15" round="3px" @click="handleTip">文字提示</tj-button>
      <tj-button size="small" type="success" class="mr_10 mb_15" @click="handleLongTip" round="3px">长文字提示</tj-button>
      <tj-button size="small" type="danger" class="mr_10 mb_15" @click="handleOptions" round="3px">参数配置</tj-button>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    handleTip() {
      this.$toast("文字提示");
    },
    handleLongTip() {
      this.$toast("这是一条长文字提示，超过一定字数就会换行");
    },
    handleOptions() {
      this.$toast({
        message: '这是一条长文字提示，超过一定字数就会换行',
        iconClass: 'tj-icon tj-success_no_circle',
        position: 'bottom'
      })
    },
  }
};
</script>
