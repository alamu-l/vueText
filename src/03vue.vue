<template>
  <div>
    <label for="username">用户名：</label>
    <input type="text" id="username" v-model="username">
    <br>
    <label for="password">密码：</label>
    <input type="password" id="password" v-model="password">
    <br>
    <button @click="login">登录</button>
  </div>
<ul>
  	<li v-for='(p,index) of state' :key="index">
		<p>{{p.id}}</p><!-- <p>{{p.proName}}</p><p>{{p.workingSet}}</p> -->
	</li>
  </ul>
</template>

<script>
import axios from 'axios'
// import {reactive,onMounted} from 'vue'
var state;
export default {
  data() {
    return {
      username: '',
      password: '',
	   state:[{id:0},{id:0},{id:0}]
    }
  },
  methods: {
    login() {
		
      axios.post('https://127.0.0.1:7259/WeatherForecast/Login', {
        nameLogin: this.username,
        passwordLogin: this.password
      })
      .then(response => {
        //console.log(response.data)
	 state=response.data.passwordLogin
		console.log(state)
		alert('登陆成功') 
      })
      .catch(error => {
        console.log(error)
		alert('登陆失败')
      })
    }
  },
  
}
</script>