<template>
  <div>
    <homePage
      @goToEncodePage="changePage"
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
    <encrypt
      v-if="activePage === 'encode-page'"
      @change-image-url-on-share-button="handleChangeImageUrlOnShareButton"
    ></encrypt>
    <FacebookButton v-if="imageUrl" :image-url="imageUrl"></FacebookButton>
  </div>
</template>

<script>
import homePage from "./views/home-page";
import decodePage from "./views/decode-page";
import resultDecodePage from "./views/result-decode-page";
import Encrypt from "./components/Encrypt.vue";
import FacebookButton from "./components/FacebookButton.vue";

export default {
  name: "App",
  data() {
    return {
      message: "Hello world",
      imageUrl: "",
      href_facebook_share_button: "",
      dataImage: "",
      activePage: "home-page"
    };
  },
  methods: {
    changePage(page, data) {
      this.activePage = page;
    },
    resultDecode(page, data) {
      this.activePage = page;
      this.dataImage = data;
    },
    handleChangeImageUrlOnShareButton(imageUrl) {
      this.imageUrl = "";
      this.imageUrl = imageUrl;
      this.href_facebook_share_button = `https://www.facebook.com/sharer/sharer.php?u=${this.imageUrl}&amp;src=sdkpreparse`;
    }
  },
  components: {
    homePage,
    decodePage,
    resultDecodePage,
    encrypt: Encrypt,
    FacebookButton
  }
};
</script>

<style></style>
