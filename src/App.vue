<template>
  <div>
    <label for="username">用户名：</label>
    <input type="text" id="username" v-model="username">
    <br>
    <label for="password">密码：</label>
    <input type="password" id="password" v-model="password">
     <br>
    <button @click="login">登录</button>
	 <div>{{state}}</div>
	<ul>
	  	<li v-for='(p,index) of Data' :key="index">
			<p>{{p.id}}</p><p>{{p.proName}}</p><p>{{p.workingSet}}</p>
		</li>
	</ul> 
		<!-- <div v-for="(item,index) in Data"  :key="index">
			<div class="dd">{{item.proName}}</div>
			
		 </div> -->
  </div>
</template>

<script>
 import axios from 'axios'
// import {reactive,onMounted} from 'vue'

export default {
  data() {
    return {
      username: '',
      password: '',
	  state:'123',
	  Data:[],
	  
    }
  },
  methods: {
    login() {
		
      axios.post('https://127.0.0.1:7259/WeatherForecast/Login', {
        nameLogin: this.username,
        passwordLogin: this.password
      })
      .then(response => {
        console.log(response.data)
	   this.state=response.data.passwordLogin[0].id
		 console.log(this.state)
		this.Data=response.data.passwordLogin
		 // this.Data.push(response.data.passwordLogin[0])
		 // this.Data.push(response.data.passwordLogin[1])
		 console.log(this.Data);
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