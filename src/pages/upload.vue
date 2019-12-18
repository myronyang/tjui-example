<template>
  <div class="page-wrap">
    <tj-header title="Upload 上传图片"></tj-header>
    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">基本用法</div>
      <tj-upload v-model="imageUrl" :action="action"></tj-upload>
      <tj-upload v-model="imageUrl2" :action="action"></tj-upload>
    </section>

    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">进度设置</div>
      <tj-upload
        v-model="imageUrl3"
        is-progress
        action="action"
      ></tj-upload>
      <tj-upload
        v-model="imageUrl4"
        is-progress
        progress-type="circle"
        action="action"
      ></tj-upload>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      action: "https://sixtest.baojunev.com/api/v2/common/uploadOneFile",
      imageUrl: "",
      imageUrl2: "https://img.yzcdn.cn/vant/cat.jpeg",
      imageUrl3: "",
      imageUrl4: "",
    };
  }
};
</script>

<style>
</style>
