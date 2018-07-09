<template>
  <div class="images">

    <div class="custom-file">
      <input type="file" id="myfile" @change="onFileSelected" class="custom-file-input">
      <label class="custom-file-label" for="myfile">Choose image</label>
    </div>
    <button @click="onUpload" class="btn btn-outline-secondary m-1">Upload</button>
    <button @click="getURL" class="btn btn-outline-secondary m-1">Confirm</button>


    <img :src="imgUrl" class="img-thumbnail rounded mx-auto d-block img-thumbnail" alt=" " v-if="imgUrl !== ''">


  </div>
</template>

<script>
  import axios from 'axios'
  import firebase from 'firebase'
  export default {
    name: 'images',
    data() {
      return {
        selectedFile: null,
        imgUrl: ''
      }
    },

    methods: {
      onFileSelected(event) {
        this.selectedFile = event.target.files[0];

      },

      onUpload() {


        const fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name)
        axios.post('https://us-central1-mblog-416e6.cloudfunctions.net/uploadFile', fd)
          .then(res => {

            console.log(res)
          })

      },

      getURL() {

        var config = {
          apiKey: " AIzaSyC2qlBGyj92UaEzTXdHkPgKJ6XxoZcULKg ",
          authDomain: "mblog-416e6.firebaseapp.com ",
          databaseURL: "https://mblog-416e6.firebaseio.com ",
          projectId: "mblog-416e6 ",
          storageBucket: "mblog-416e6.appspot.com",
          messagingSenderId: "192116077398 "
        };
        if (!firebase.apps.length) {
          firebase.initializeApp(config);
        }

        var storageRef = firebase.storage().ref()
        storageRef.child(this.selectedFile.name).getDownloadURL()
          .then((downloadURL) => {
            this.imgUrl = downloadURL;
          });
      },
      created: function () {
        this.getURL();
      },
    }
  }

</script>
