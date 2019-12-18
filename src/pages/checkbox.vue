<template>
  <div class="page-wrap">
    <tj-header title="Checkbox 复选框"></tj-header>

    <section class="mt_15 padding_15">
      <div class="f16 f_bold">circle图标</div>
      <div class="mt_15">
        <tj-checkbox v-model="status1">同意用户协议</tj-checkbox>
      </div>
      <div class="mt_15">
        <tj-checkbox v-model="status2" :size="20">同意用户协议</tj-checkbox>
      </div>
      <div class="mt_15">
        <tj-checkbox v-model="status3" :size="24">同意用户协议</tj-checkbox>
      </div>
    </section>

    <section class="mt_15 padding_15">
      <div class="f16 f_bold">square图标</div>
      <div class="mt_15">
        <tj-checkbox v-model="status4" shape="square">同意用户协议</tj-checkbox>
      </div>
      <div class="mt_15">
        <tj-checkbox v-model="status5" shape="square" :size="20">同意用户协议</tj-checkbox>
      </div>
      <div class="mt_15">
        <tj-checkbox v-model="status6" shape="square" :size="24">同意用户协议</tj-checkbox>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status1: false,
      status2: true,
      status3: false,
      status4: false,
      status5: true,
      status6: false
    };
  }
};
</script>
