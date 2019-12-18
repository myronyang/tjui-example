<template>
  <div class="page-wrap">
    <tj-header title="Swipe 轮播"></tj-header>
    <section class="mt_15">
      <div class="f16 f_bold mb_5">基本用法</div>
      <tj-swipe :auto="4000" height="250px">
        <tj-swipe-item>
          <img
            src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"
            width="100%"
          >
        </tj-swipe-item>
        <tj-swipe-item>
          <img
            src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"
            width="100%"
          >
        </tj-swipe-item>
        <tj-swipe-item>
          <img
            src="https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"
            width="100%"
          >
        </tj-swipe-item>
      </tj-swipe>
    </section>
    <section class="mt_15">
      <div class="f16 f_bold mb_5">隐藏indicators</div>
      <tj-swipe :show-indicators="false" class="text_c" height="220px">
        <tj-swipe-item style="color:#fff;background: #9c27b0">
          <p class="mt_15 f16">1</p>
        </tj-swipe-item>
        <tj-swipe-item style="color:#fff;background: #0089dc">
          <p class="mt_15 f16">2</p>
        </tj-swipe-item>
        <tj-swipe-item style="color:#fff;background: #ffd705">
          <p class="mt_15 f16">3</p>
        </tj-swipe-item>
      </tj-swipe>
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

<style>
</style>
