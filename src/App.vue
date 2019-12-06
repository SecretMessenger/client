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
    },
    clickShare(){
      var addthis_share = {
            title: `check this picture...
            i hid something here, heheh
            `,
            // url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.mountsinai.org%2Ffiles%2FMSHealth%2FAssets%2FHS%2FLocations%2FCHOP%2FImages%2FMSHS-CHOP-Conditions-CHD-ASD_Illustration-2Col-770x672.jpg&imgrefurl=https%3A%2F%2Fwww.mountsinai.org%2Flocations%2Fchildrens-heart%2Fconditions%2Fatrial-septal-defect&tbnid=VSlh3-sX5XI7kM&vet=12ahUKEwi80Ie8gqDmAhUn0nMBHeVbB3MQMygCegUIARCMAg..i&docid=mLToU2ZORE9T5M&w=770&h=672&q=asd&safe=strict&ved=2ahUKEwi80Ie8gqDmAhUn0nMBHeVbB3MQMygCegUIARCMAg",
            url: document.getElementById("preview").src,
            media: "THE IMAGE"
        }
    }
  }
};
</script>

<style>
.addthis-smartlayers {
  display: none;
}
</style>