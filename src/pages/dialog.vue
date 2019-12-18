<template>
  <div class="page-wrap">
    <tj-header title="Dialog 弹出框"></tj-header>
    <section class="mt_15 padding_15">
      <div class="f16 f_bold mb_15">基本用法</div>
      <tj-button size="small" class="mr_10 mb_15" round="3px" @click="handle">提示框</tj-button>
      <tj-button
        size="small"
        type="success"
        class="mr_10 mb_15"
        @click="handle2"
        round="3px"
      >确认框</tj-button>
      <tj-button
        size="small"
        type="danger"
        class="mr_10 mb_15"
        @click="handle3"
        round="3px"
      >输入框</tj-button>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    handle() {
      this.$dialog.alert("操作成功!", "提示");
    },
    handle2() {
      this.$dialog
        .confirm("确定执行此操作?", "提示")
        .then(() => {
          console.log("已确认");
        })
        .catch(() => {
          console.log("已取消");
        });
    },
    handle3() {
      this.$dialog.prompt(" ", "请输入姓名").then(({ value }) => {
        if (value) {
          this.$dialog.alert(`你的名字是 ${value}`, "输入成功");
        }
      });
    }
  }
};
</script>
