<template>
  <div>
    <homePage></homePage>
    <decodePage></decodePage>
    <resultDecodePage></resultDecodePage>
  </div>
</template>

<script>
import homePage from "./views/home-page";
import decodePage from "./views/decode-page";
import resultDecodePage from "./views/result-decode-page";

export default {
  name: "App",
  data() {
    return {
      activePage: "home-page"
    };
  },
  methods: {},
  components: {
    homePage,
    decodePage,
    resultDecodePage
  }
};
</script>

<style></style>
