<template>
  <div class="page-wrap">
    <tj-header title="Collapse 折叠面板"></tj-header>

    <tj-collapse class="mt_15" title="标题1" v-model="collapse">
      <p class="gray">代码是写出来给人看的，附带能在机器上运行</p>
    </tj-collapse>
    <tj-collapse class="mt_15" title="标题2" v-model="collapse2">
      <p class="gray">代码是写出来给人看的，附带能在机器上运行</p>
    </tj-collapse>
    <tj-collapse class="mt_15" title="标题3" v-model="collapse3">
      <p class="gray">代码是写出来给人看的，附带能在机器上运行</p>
    </tj-collapse>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      collapse: true,
      collapse2: false,
      collapse3: false,
    }
  }
}
</script>