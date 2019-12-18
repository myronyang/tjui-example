<template>
  <div class="page-wrap">
    <tj-header title="Rate 评分"></tj-header>
    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">基本用法</div>
      <div class="">
        <tj-rate v-model="rate1"></tj-rate>
        <span class="red ml_5">{{rate1}}分</span>
      </div>
      <div class="mt_15">
        <tj-rate v-model="rate2" color="#39a9ed"></tj-rate>
        <span class="green ml_5">{{rate2}}分</span>
      </div>
      <div class="mt_15">
        <tj-rate v-model="rate3" color="#fa5f2e" :max="10"></tj-rate>
        <span class="red ml_5">{{rate3}}分</span>
      </div>
    </section>
    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">禁用</div>
      <tj-rate v-model="rate4" disabled></tj-rate>
      <span class="red ml_5">{{rate4}}分</span>
    </section>
  </div>
</template>

<script>
export default {
    data() {
      return {
        rate1: 3,
        rate2: 4,
        rate3: 7,
        rate4: 3,
      }
    }
}
</script>

<style>

</style>
