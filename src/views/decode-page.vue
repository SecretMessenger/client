<template>
  <div>
    <div class="decode-page">
      <div>
        <h1 class="title-page">
          Decode Message
        </h1>
        <div
          class="ui blue message font-used"
          style="background-color:transparent ;max-width:600px;font-size:20px;text-align:justify; margin-bottom:100px"
        >
          To decode a hidden message from an image, just choose an image and hit
          the Decode button. Neither the image nor the message that has been
          hidden will be at any moment transmitted over the web, all the magic
          happens within your browser.
        </div>
        <button
          @click.prevent="popUpModalForm"
          class="font-used huge ui inverted blue basic button"
        >
          <i class="cloud upload alternate icon"></i>Upload
        </button>
        <button
          @click.prevent="goToHomePage"
          class="font-used huge ui inverted blue basic button"
        >
          <i class="cloud upload alternate icon"></i>Home Page
        </button>
        <div id="error-popup" class="ui basic modal">
          <div class="ui icon header">
            <i class="sad cry icon red"></i>
          </div>
          <div class="content">
            <div
              class="ui red message box-error"
              style="font-family: 'Kalam', cursive;background-color:transparent ;font-size:20px;text-align:justify;"
            >
              {{ error }}
            </div>
          </div>
          <div class="actions">
            <div class="ui red basic cancel inverted button">
              <i class="remove icon"></i>
              Exit
            </div>
          </div>
        </div>
        <div id="form-upload" class="ui basic modal">
          <div class="ui icon header" style="font-family: 'Kalam', cursive">
            <i class="upload icon"></i>
            Upload Image
          </div>
          <div class="content">
            <div v-if="error" class="ui red message">
              {{ error }}
            </div>
            <form class="ui form">
              <div class="field">
                <input
                  style="font-family: 'Kalam', cursive;background-color:transparent;color:white;border:1px solid
                rgba(255,255,255,0.8)"
                  v-model="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div class="field">
                <label
                  v-bind:class="fileUploadColor"
                  for="file-uploader"
                  style="font-family: 'Kalam', cursive"
                  class="huge ui inverted button"
                >
                  <i class="file icon"></i>
                  Open PNG File
                </label>
                <input
                  id="file-uploader"
                  type="file"
                  ref="file"
                  v-on:change="handleFileUpload"
                  class="ui file input"
                />
              </div>
            </form>
          </div>
          <div class="actions">
            <div
              @click="closeModal"
              style="font-family: 'Kalam', cursive"
              class="ui red basic cancel inverted button"
            >
              <i class="remove icon"></i>
              Cancel
            </div>
            <div
              style="font-family: 'Kalam', cursive"
              v-bind:class="uploadButton"
              v-on:click="submitData"
              class="ui blue ok inverted button"
            >
              <i class="checkmark icon"></i>
              Upload
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      password: "",
      image: "",
      error: "",
      fileUploadColor: "blue basic",
      uploadButton: "disabled"
    };
  },
  methods: {
    goToHomePage() {
      this.$emit("goToHomePage", "home-page");
    },
    closeModal() {
      this.uploadButton = "";
    },

    validateImage(fileName) {
      var allowedExtension = "png";
      var fileExtension = fileName
        .split(".")
        .pop()
        .toLowerCase();

      if (allowedExtension == fileExtension) return true;
      else return false;
    },
    popUpModalError() {
      $("#error-popup").modal("show");
    },
    popUpModalForm() {
      $("#form-upload").modal("show");
    },
    submitData() {
      const fd = new FormData();
      fd.append("image", this.image);
      const data = {
        image: fd,
        password: this.password
      };
      axios({
        method: "post",
        url: "",
        data
      })
        .then(({ data }) => {
          this.$emit("goToResultDEcodePage", data);
        })
        .catch(err => {
          this.error = err;
          this.popUpModalError();
        });
    },
    handleFileUpload() {
      this.image = this.$refs.file.files[0];
      const fileName = this.image.name;
      console.log(fileName);
      if (!this.validateImage(fileName)) {
        this.fileUploadColor = "red";
        this.error = "File extension must be .png";
        this.uploadButton = "disabled";
      } else {
        this.error = "";
        this.uploadButton = "";
        this.fileUploadColor = "blue basic";
      }
    }
  }
};
</script>

<style>
.box-error {
  font-family: "Kalam", cursive;
  background-color: transparent;
  font-size: 20px;
  text-align: justify;
}
.title-page {
  font-family: "Kalam", cursive;
  color: white;
  font-size: 50px;
}
.font-used {
  font-family: "Kalam", cursive;
}
.ui.file.input {
  display: none;
}
.decode-page {
  background-position: top left;
  height: 100vh;
  background-image: url("https://wallpaperplay.com/walls/full/7/a/6/97306.jpg#.Xek2fvEjWRM.link");
  display: flex;
  padding-bottom: 60px;
  padding-left: 50px;
  align-items: flex-end;
}
</style>
