<template>
  <div>
    <form method="post" id="encrypt-post" @submit.prevent="submitFile">
      <input type="file" @change="triggerFunction" ref="file" required />
      <textarea id cols="30" rows="10" placeholder="Your secrets...." v-model="message_to_hide"></textarea>
      <input type="submit" value="Encrypt" />
    </form>
    <ImagePreview :image_url="uploaded_image_base64"></ImagePreview>
  </div>
</template>

<script>
import axios from "axios";
import ImagePreview from "./ImagePreview.vue";

export default {
  components: { ImagePreview },
  data() {
    return {
      uploaded_image_base64: "",
      message_to_hide: "",
      image: "",
      image_url: "",
      password: ""
    };
  },
  methods: {
    triggerFunction() {
      this.previewImage(event);
      this.handleFileUpload();
    },
    handleFileUpload() {
      this.image = this.$refs.file.files[0];
    },
    previewImage(event) {
      let input = event.target;

      let reader = new FileReader();
      reader.onload = () => {
        this.uploaded_image_base64 = reader.result;
        // console.log(this.uploaded_image_base64, 'uploaded_image_base64');
      };
      reader.readAsDataURL(input.files[0]);
    },
    submitFile() {
      const fd = new FormData();
      fd.append("image", this.image);
      fd.append("message_string", this.message_to_hide)
      axios({
        url: "http://secretmessenger-server.angelavanessa.com/encode",
        method: "POST",
        data: fd,
        headers: {'Content-Type': 'multipart/form-data' }
      })
      
        .then(({ data }) => {
          this.image_url = data.url;
          this.password = data.password;
          this.showUploadedImage();
          this.$emit("change-image-url-on-share-button", this.image_url);
        })
        .catch((err) => console.log(err));

      // coba //
      // this.image_url =
      //   "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8Cd-n8DnDIv9zPn-5kc4jaTvfE9CYmho02vFAI6djcmQtDXa_";
      // this.showUploadedImage();
      // this.$emit("change-image-url-on-share-button", this.image_url);
    },
    showUploadedImage() {
      this.uploaded_image_base64 = this.image_url;
    }
  }
};
</script>

<style scoped>
div {
  text-align: center;
  background-color: rgb(173, 173, 173);
  display: flex;
  flex-direction: row;
}

img {
  border: 2px solid black;
  width: 50vw;
  height: 50vh;
  margin: 3rem;
}

textarea {
  resize: none;
  padding: 0.5rem;
}

#encrypt-post {
  display: flex;
  flex-direction: column;
  width: 30vw;
  margin: 3rem;
  justify-content: space-between;
  height: 50vh;
}
</style>