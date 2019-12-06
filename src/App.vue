<template>
  <div>
    <h1>{{ message }}</h1>
    <encrypt
      @change-image-url-on-share-button="handleChangeImageUrlOnShareButton"
    ></encrypt>
  <FacebookButton v-if="imageUrl" :image-url="imageUrl"></FacebookButton>
    {{imageUrl}}
  </div>
</template>

<script>
import Encrypt from "./components/Encrypt.vue";
import FacebookButton from "./components/FacebookButton.vue";

export default {
  components: {
    encrypt: Encrypt,
    FacebookButton  
  },
  data() {
    return {
      message: "Hello world",
      imageUrl: "",
      href_facebook_share_button: ""
    };
  },
  methods: {
    handleChangeImageUrlOnShareButton(imageUrl){
      this.imageUrl= ''
      this.imageUrl = imageUrl;
      console.log(this.imageUrl, "<<<<<>>>");
      this.href_facebook_share_button = `https://www.facebook.com/sharer/sharer.php?u=${this.imageUrl}&amp;src=sdkpreparse`
      //this.imgUrl = imageUrl
      //console.log(this.href_facebook_share_button);
    }
  },
  computed: {
  }
};
</script>

<style>
</style>