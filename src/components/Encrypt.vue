<template>
<div>
  <form method="post" id="encrypt-post" @submit.prevent="upload">
    <input type="file" id placeholder="upload" @change="openFile"/>
    <textarea id cols="30" rows="10" placeholder="Your secrets...." v-model="text"></textarea>
    <input type="submit" value="Encrypt" />
  </form>
    <img id="preview">
</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      text: "",
      img: ""
    };
  },
  methods: {
    upload() {

    },
    openFile(event) {
    let input = event.target;

    let reader = new FileReader();
    reader.onload = function(){
      let dataURL = reader.result;
      let preview = document.getElementById('preview');
      preview.src = dataURL;
      console.log(reader);
    };
    reader.readAsDataURL(input.files[0]);
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