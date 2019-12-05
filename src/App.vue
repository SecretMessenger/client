<template>
  <div>
    <h1>{{ message }}</h1>
    <encrypt></encrypt>
  </div>
</template>

<script>
import Encrypt from "./components/Encrypt.vue";

export default {
  components: {
    encrypt: Encrypt
  },
  data() {
    return {
      message: "Hello world"
    };
  }
};
</script>

<style scoped>
</style>