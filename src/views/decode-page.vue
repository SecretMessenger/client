<template>
  <div>
    <div class="decode-page">
      <div>
        <h1 style="color:white;font-family: 'Kalam', cursive;font-size:50px">
          Decode Message
        </h1>
        <div
          class="ui blue message"
          style="font-family: 'Kalam', cursive;background-color:transparent ;max-width:600px;font-size:20px;text-align:justify; margin-bottom:100px"
        >
          To decode a hidden message from an image, just choose an image and hit
          the Decode button. Neither the image nor the message that has been
          hidden will be at any moment transmitted over the web, all the magic
          happens within your browser.
        </div>
        <button
          @click.prevent="popUpModal"
          class="huge ui inverted blue basic button"
          style="font-family: 'Kalam', cursive;"
        >
          <i class="cloud upload alternate icon"></i>Upload
        </button>
        <div class="ui basic modal">
          <div class="ui icon header" style="font-family: 'Kalam', cursive">
            <i class="upload icon"></i>
            Upload Image
          </div>
          <div class="content">
            <div
              v-if="error"
              class="ui red message"
              style="text-align: center;font-family: 'Kalam', cursive;background-color:transparent ;font-size:20px;"
            >
              {{ error }}
            </div>
            <form class="ui form">
              <div class="field">
                <input
                  v-bind:style="borderInput"
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
              v-on="closeModal"
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
    popUpModal() {
      $(".ui.modal").modal("show");
    },
    submitData() {
      const fd = new FormData();
      fd.append("image", this.image);
      const data = {
        image: fd,
        password: this.password
      };
      //   axios({
      //     method: "post",
      //     url: "",
      //     data
      //   });
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
