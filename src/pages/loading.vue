<template>
  <div class="page-wrap">
    <tj-header title="Loading 加载动画"></tj-header>
    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">spinner形态</div>
      <tj-loading :size="18"></tj-loading>
      <tj-loading class="ml_15" color="#39a9ed"></tj-loading>
      <tj-loading class="ml_15" :size="32" color="#9c27b0"></tj-loading>
    </section>
    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">circular形态</div>
      <tj-loading :size="18" type="circular"></tj-loading>
      <tj-loading class="ml_15" type="circular" color="#39a9ed"></tj-loading>
      <tj-loading class="ml_15" color="#9c27b0" :size="32" type="circular"></tj-loading>
    </section>
    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">文字</div>
      <tj-loading type="circular" color="red">加载中</tj-loading>
      <tj-loading class="ml_15" color="green">加载中</tj-loading>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      checked1: false
    };
  }
};
</script>
