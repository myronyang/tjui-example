<template>
  <div class="page-wrap">
    <tj-header title="Panel 面板"></tj-header>
    <tj-panel class="mt_15" type="light">
      <div class="f16 f_bold mb_10">基本用法</div>
      <div class="gray">面板只是一个容器，里面可以放入自定义的内容</div>
    </tj-panel>

    <tj-panel class="mt_15" round :gutter="15" type="light">
      <div class="f16 f_bold mb_10">基本用法</div>
      <div class="gray">面板只是一个容器，里面可以放入自定义的内容</div>
    </tj-panel>

    <tj-panel class="mt_15" round :gutter="15" type="plain">
      <div class="f16 f_bold mb_10">基本用法</div>
      <div class="gray">面板只是一个容器，里面可以放入自定义的内容</div>
    </tj-panel>
  </div>
</template>

