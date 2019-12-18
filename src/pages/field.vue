<template>
  <div class="page-wrap">
    <tj-header title="Checkbox 复选框"></tj-header>

    <section class="mt_15">
      <tj-field
        class="bd_b_1 mt_15"
        icon="red tj-ren"
        title="用户名称"
        v-model="name"
        placeholder="请输入用户名称"
      ></tj-field>
      <tj-field
        class="bd_b_1 mt_15"
        icon="red tj-dianhua1"
        title="电话"
        type="number"
        v-model="pnone"
        placeholder="请输入电话"
      ></tj-field>
      <tj-field
        class="bd_b_1 mt_15"
        icon="red tj-gangbi"
        title="密码"
        type="password"
        v-model="password"
        placeholder="请输入密码"
      ></tj-field>
      <tj-field
        class="bd_b_1 mt_15"
        title="描述"
        type="textarea"
        v-model="desc"
        rows="3"
        placeholder="请输入描述"
      ></tj-field>
      <tj-field
        class="bd_b_1 mt_15"
        label-width="100px"
        must
        title="验证码"
        v-model="code"
        placeholder="请输入验证码"
      >
        <tj-button class="mr_10" plain round size="mini">获取验证码</tj-button>
      </tj-field>
      <tj-field class="mt_10 bd_b_1" v-model="desc" placeholder="请输入描述"></tj-field>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      pnone: "",
      password: "",
      code: "",
      desc: ""
    };
  }
};
</script>
