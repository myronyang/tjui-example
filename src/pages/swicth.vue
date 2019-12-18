<template>
  <div class="page-wrap">
    <tj-header title="Switch 开关"></tj-header>
    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">基本用法</div>
      <tj-switch v-model="checked">{{checked}}</tj-switch>
      <tj-switch class="mt_15" v-model="checked" color="#39a9ed">{{checked}}</tj-switch>
    </section>
    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">禁用</div>
      <tj-switch v-model="checked1" disabled></tj-switch>
    </section>
  </div>
</template>

<script>
export default {
    data() {
      return {
        checked: true,
        checked1: false,
      }
    }
}
</script>

<style>

</style>
