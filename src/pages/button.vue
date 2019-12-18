<template>
  <div class="page-wrap">
    <tj-header title="Button 按钮"></tj-header>
    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">按钮类型</div>
      <tj-button class="mr_10 mt_10">default</tj-button>
      <tj-button type="danger" class="mr_10 mt_10" plain>danger</tj-button>
      <tj-button type="success" class="mr_10 mt_10">success</tj-button>
      <tj-button type="primary" class="mr_10 mt_10" plain>primary</tj-button>
    </section>

    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">朴素按钮</div>
      <tj-button class="mr_10 mt_10">default</tj-button>
      <tj-button type="danger" class="mr_10 mt_10" plain>danger</tj-button>
      <tj-button type="success" class="mr_10 mt_10" plain>success</tj-button>
      <tj-button type="primary" class="mr_10 mt_10" plain>primary</tj-button>
    </section>

    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">按钮尺寸</div>
      <tj-button size="mini" class="mr_5">mini</tj-button>
      <tj-button size="small" class="mr_5">small</tj-button>
      <tj-button size="normal" class="mr_5">normal</tj-button>
      <div class="mt_10 mb_10 text_c">
        <tj-button size="middle" class="mr_5">middle</tj-button>
      </div>
      <tj-button size="large" class="mr_5">large</tj-button>
    </section>

    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">禁用/圆角</div>
      <tj-button class="mr_10 mt_10" disabled round>default</tj-button>
      <tj-button class="mr_10 mt_10" type="danger" round disabled>danger</tj-button>
      <tj-button class="mr_10 mt_10" type="success" disabled round="5px" plain>success</tj-button>
    </section>

    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">禁用/圆角</div>
      <tj-button class="mr_10" round="5px">
        <i class="tj-icon tj-weizhi mr_5"></i>位 置
      </tj-button>
      <tj-button class="mr_10" type="danger" round>
        <tj-loading class="loading-btn" :size="20">确 认</tj-loading>
      </tj-button>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.loading-btn {
  position: relative;
  top: 2px;
}
</style>
