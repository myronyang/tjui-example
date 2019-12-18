<template>
  <div class="page-wrap">
    <tj-header title="Layout 布局"></tj-header>
    <section class="padding_15 mt_15">
      <div class="f16 f_bold">浮动布局</div>
      <tj-row :gutter="15">
        <tj-col :span="4">span 4</tj-col>
        <tj-col :span="4">span 4</tj-col>
        <tj-col :span="4">span 4</tj-col>
        <tj-col :span="4">span 4</tj-col>
        <tj-col :span="4">span 4</tj-col>
      </tj-row>
    </section>

    <section class="padding_15 mt_15">
      <div class="f16 f_bold">flex布局</div>
      <tj-row flex :gutter="15">
        <tj-col>
          <div>COL</div>
          <div>COL</div>
        </tj-col>
        <tj-col vertical width="70px">COL</tj-col>
        <tj-col align="center">COL</tj-col>
      </tj-row>
    </section>

    <section class="padding_15 mt_15">
      <div class="f16 f_bold">垂直布局</div>
      <tj-row flex column>
        <tj-col>
          <div>COL</div>
          <div>COL</div>
        </tj-col>
        <tj-col vertical width="70px">COL</tj-col>
        <tj-col align="center">COL</tj-col>
      </tj-row>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.tj-row {
  .tj-col {
    color: #fff;
    text-align: center;
    padding: 10px 0;
    margin-top: 15px;
  }

  .tj-col:nth-child(odd) {
    background-color: #39a9ed;
  }

  .tj-col:nth-child(even) {
    background-color: #66c6f2;
  }
}
</style>
