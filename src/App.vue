<template>
  <div>
    <homePage
      @goToDecodePage="changePage"
      v-if="activePage === 'home-page'"
    ></homePage>
    <decodePage
      @goToHomePage="changePage"
      @go-to-result-decode-page="resultDecode"
      v-if="activePage === 'decode-page'"
    ></decodePage>
    <resultDecodePage
      :dataImage="dataImage"
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
      dataImage: "",
      activePage: "home-page"
    };
  },
  methods: {
    changePage(page, data) {
      this.activePage = page;
      console.log(this.activePage);
    },
    resultDecode(page, data) {
      this.activePage = page;
      this.dataImage = data;
      console.log(data);
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
