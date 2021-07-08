<template>
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
</template>

<script>
export default {
  props: ["uploadButton"],
  methods: {
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
    closeModal() {
      this.uploadButton = "";
    }
  }
};
</script>

<style></style>
