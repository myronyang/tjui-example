<template>
  <div class="page-wrap">
    <tj-header title="Range 滑块"></tj-header>
    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">基本用法</div>
      <div v-for="item in cells" :title="item.title" :label="'value:' + item.value">
        <p class="mt_15">{{item.title}}：{{item.value}}</p>
        <tj-range v-model="item.value">
          <div class="mr_10" slot="start" v-if="item.start">{{ item.start }}</div>
          <div class="ml_10" slot="end" v-if="item.end">{{ item.end }}</div>
        </tj-range>
      </div>
    </section>

    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">步长范围</div>
      <tj-range
        v-model="range.value"
        showList
        :min="range.min || 0"
        :max="range.max || 100"
        :step="range.step || 1"
        :bar-height="range.barHeight || 1"
        :disabled="range.disabled"
      >
        <div class="mr_10" slot="start" v-if="range.start">{{ range.start }}</div>
        <div class="ml_10" slot="end" v-if="range.end">{{ range.end }}</div>
      </tj-range>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cells: [
        {
          title: "默认",
          value: 48
        },
        {
          title: "预设 value",
          value: 20
        },
        {
          title: "左右文字",
          value: 0,
          start: "0",
          end: "100"
        }
      ],
      range: {
        title: "定义步长",
        value: 40,
        step: 10,
        barHeight: 10,
        max: 70,
        min: 30,
        start: "30",
        end: "70",
        showList: true
      }
    };
  }
};
</script>

<style>
</style>
