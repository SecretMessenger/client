<template>
  <div>
    <homePage
      @goToDecodePage="changePage"
      v-if="activePage === 'home-page'"
    ></homePage>
    <decodePage
      @goToHomePage="changePage"
      v-if="activePage === 'decode-page'"
    ></decodePage>
    <resultDecodePage
      v-if="activePage === 'result-decode-page'"
    ></resultDecodePage>
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
  methods: {
    changePage(page) {
      console.log("halo");
      this.activePage = page;
      console.log(this.activePage);
    }
  },
  components: {
    homePage,
    decodePage,
    resultDecodePage
  }
};
</script>

<style></style>
