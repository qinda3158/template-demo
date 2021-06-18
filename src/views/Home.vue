<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-button @click="remove">退出登录</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
    remove () {
      this.$store.dispatch('user/logout')
        .then(() => {
          console.log('tuichu')
        })
        .catch(() => {
        })
    }
  }
};
</script>
