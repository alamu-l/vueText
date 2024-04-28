<script>
	 var shu=1;

export default {
  name: 'App',
 data(){
	return{
		nashi:"你忘记加,了",
		num:1
	}  
  },
  methods:{
  	 handleClick(){
  	 	 console.log(shu++)
  	 	 
  	 }
  	 
  } 
}
</script>
<template>
	
  <div id="app">
	  <!-- <h1>{{counter}}</h1> -->
	<h1>{{nashi}}</h1>
	<h1>{{num}}</h1>
	<button @click="num++">+1</button>
	<div  v-on:click="handleClick">点击按钮</div>


  </div>
  
</template>



