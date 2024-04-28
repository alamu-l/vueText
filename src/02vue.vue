<template>
  <div>
    <h1>登陆</h1>
    <form @submit.prevent="login">
      <label for="username">用户名：</label>
      <input type="text" id="username" v-model="username">
      <br>
      <label for="password">密码：</label>
      <input type="password" id="password" v-model="password">
      <br>
      <button type="submit">登陆</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.password === '123456') {
        alert('登陆成功')
      } else {
        alert('登陆失败')
      }
    }
  }
}
</script>
