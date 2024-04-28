<template>
  <div>
    <h1>signaIR</h1>
    <label for="inputInfo">请输入内容：</label>
      <input type="text" id="inputInfo" v-model="inputInfo" v-on:keypress="start">
      <button @click="vuelog">ceshi</button>
      <br>
    <ul>
      <li v-for="(msg,index) in msgs" :key="index">{{ msg }}</li>
    </ul>
  </div>
</template>

<script>
import { log } from './jsHelper/log.js' //注意路径
import { start } from './jsHelper/useMessageHub.js' //注意路径
export default {
  data() {
    return {
      inputInfo: '',
      msgs: []
    }
  },
  methods: {
    vuelog:function() {
      log();
    },
    vuestart:function() {
      start();
    }
  }
}
 
</script>
