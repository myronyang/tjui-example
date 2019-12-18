<template>
  <div class="page-wrap">
    <tj-header title="Checker 选择器"></tj-header>
    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">单选</div>
      <tj-checker v-model="checker" :gutter="15">
        <tj-checker-item :label="1">单选项</tj-checker-item>
        <tj-checker-item :label="2">单选项</tj-checker-item>
        <tj-checker-item :label="3">单选项</tj-checker-item>
      </tj-checker>
    </section>

    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">多选</div>
      <tj-checker v-model="checker2" type="checkbox" :gutter="15">
        <tj-checker-item :label="1">多选项</tj-checker-item>
        <tj-checker-item :label="2">多选项</tj-checker-item>
        <tj-checker-item :label="3">多选项</tj-checker-item>
      </tj-checker>
    </section>

    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">样式</div>
      <p class="mb_15 bd_b_1"><span class="gray">兴趣爱好:</span> {{checker3.join(' ')}}</p>
      <tj-checker v-model="checker3" type="checkbox" size="small" :gutter="15">
        <tj-checker-item label="篮球">篮球</tj-checker-item>
        <tj-checker-item label="足球">足球</tj-checker-item>
        <tj-checker-item label="橄榄球">橄榄球</tj-checker-item>
      </tj-checker>

      <p class="mt_15 mb_15 bd_b_1"><span class="gray">商业险:</span> {{checker4}}</p>
      <tj-checker class="mt_15" v-model="checker4" size="large" round="25px" :gutter="15">
        <tj-checker-item label="平安商业险">平安商业险</tj-checker-item>
        <tj-checker-item label="新华商业险">新华商业险</tj-checker-item>
      </tj-checker>
    </section>

  </div>
</template>

<script>
export default {
    data() {
      return {
        checker: 1,
        checker2: 1,
        checker3: [],
        checker4: "",
      }
    }
}
</script>

<style>

</style>
