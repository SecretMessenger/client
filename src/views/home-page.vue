<template>
  <div class="decode-page" style="color:white;font-family: 'Kalam', cursive;">
    <div>
      <div>
        <h1 class="slogan">
          Let's Dive Deeper!
        </h1>
      </div>
      <div>
        <h1 style="font-family: 'Kalam', cursive;font-size:50px">
          Secret Messenger
        </h1>
        <p style="color : white;font-size:20px; width:90%">
          Send <span style="color : #339ed6">secret messages </span> in just 1
          minute with pictures. Everything looks
          <span style="color : #339ed6">amazing</span>, without leaving a trace.
        </p>
        <button
          @click="goToEncodePage"
          class="huge ui inverted primary basic button"
        >
          Encode Image
        </button>
        <button
          @click="goToDecodePage"
          style="margin-left:7px"
          class="huge ui inverted primary basic button"
        >
          Decode Image
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {};
  },
  methods: {
    goToDecodePage() {
      this.$emit("goToDecodePage", "decode-page");
    },
    goToEncodePage() {
      this.$emit("goToEncodePage", "encode-page");
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Kalam&display=swap");
.decode-page {
  height: 100vh;
  background-image: url("https://wallpaperplay.com/walls/full/7/a/6/97306.jpg#.Xek2fvEjWRM.link");
  display: flex;
  padding-bottom: 60px;
  padding-left: 50px;
  align-items: flex-end;
}
.center-content {
  display: flex;
  justify-content: center;
}
.slogan {
  font-size: 85px;
  font-family: "Kalam", cursive;
  padding-bottom: 90px;
  color: #339ed6;
}
</style>
