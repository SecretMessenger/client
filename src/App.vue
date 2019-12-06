<template>
  <div>
    <h1>{{ message }}</h1>
    <encrypt
      @show-share-buttons="showShareButton"
    ></encrypt>
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
  },
  methods: {
    showShareButton(){
      document.getElementsByClassName("addthis-smartlayers").style.display = "block"
    }
  }
};
</script>

<style>
.addthis-smartlayers {
  display: none;
}
</style>