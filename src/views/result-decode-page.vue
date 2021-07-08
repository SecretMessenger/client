<template>
  <div class="decode-page" style="color:white;font-family: 'Kalam', cursive;">
    <div>
      <h1 style="font-family: 'Kalam', cursive;font-size:50px">
        Result Decoding
      </h1>
      <!-- <img :src="dataImage.image" style="height:250px" alt="coba" /> -->
      <div
        class="ui blue message"
        style="max-height:120px; font-family: 'Kalam', cursive;background-color:transparent ;max-width:600px;font-size:20px;text-align:justify;overflow:scroll;"
      >
        Message : <br />
        {{ dataImage.decoded_message }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["dataImage"],
  data() {
    return {};
  },
  methods: {}
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
