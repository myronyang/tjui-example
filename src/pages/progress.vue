<template>
  <div class="page-wrap">
    <tj-header title="Progress 进度条"></tj-header>
    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">条形进度条</div>
      <tj-progress class="mt_10" :percentage="75"></tj-progress>
      <tj-progress class="mt_10" :percentage="75" status="success"></tj-progress>
      <tj-progress class="mt_10" :percentage="75" status="warning"></tj-progress>
      <tj-progress class="mt_10" :percentage="75" status="exception"></tj-progress>
    </section>

    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">环形进度条</div>
      <div class="mb_10">
        <tj-progress type="circle" :percentage="75"></tj-progress>
      </div>
      <tj-progress class="mr_10" type="circle" :percentage="75" :width="80" status="success"></tj-progress>
      <tj-progress class="mr_10" type="circle" :percentage="75" :width="65" status="warning"></tj-progress>
      <tj-progress class="mr_10" type="circle" :percentage="75" :width="50" status="exception"></tj-progress>
    </section>

    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">线条宽度</div>
      <tj-progress class="mt_10" :percentage="15" :stroke-width="10"></tj-progress>
      <tj-progress class="mt_10" :percentage="35" status="success" :stroke-width="15"></tj-progress>
      <tj-progress class="mt_10 mr_10" type="circle" :percentage="75" :width="80" :stroke-width="2"></tj-progress>
      <tj-progress
        class="mt_10 mr_10"
        type="circle"
        :percentage="75"
        :width="80"
        status="success"
        :stroke-width="5"
      ></tj-progress>
      <tj-progress
        class="mt_10 mr_10"
        type="circle"
        :percentage="75"
        :width="80"
        status="warning"
        :stroke-width="10"
      ></tj-progress>
    </section>

    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">内置文字</div>
      <tj-progress class="mt_10" :text-inside="true" :stroke-width="20" :percentage="15"></tj-progress>
      <tj-progress
        class="mt_10"
        :text-inside="true"
        :stroke-width="20"
        :percentage="30"
        status="success"
      ></tj-progress>
      <tj-progress
        class="mt_10"
        :text-inside="true"
        :stroke-width="20"
        :percentage="45"
        status="warning"
      ></tj-progress>
      <tj-progress
        class="mt_10"
        :text-inside="true"
        :stroke-width="20"
        :percentage="60"
        status="exception"
      ></tj-progress>
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

