 <template>
  <div class="hero">
    <div class="image-container">
      <img class="image" :src="mainImageSrc">
    </div>
  </div>
</template>
 
 <script>
export default {
  name: "hero",

  data() {
    return {
      images: [],
      mainImageSrc: "../static/images/love-1.jpg"
    };
  },

  created() {
    this.images = [
      {
        id: "1",
        image: "../static/images/love-1.jpg"
      },
      {
        id: "2",
        image: "../static/images/love-2.jpg"
      }
    ];

    setInterval(() => {
      this.mainImageSrc = this.images[1].image;
    }, 5000);

    setInterval(() => {
      this.mainImageSrc = this.images[0].image;
    }, 10000);
  }
};
</script>

<style>
.hero {
  grid-row: 1/4;
  grid-column: 2/3;
}

.image-container {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-blend-mode: screen;
}

.image {
  background-size: cover;
  border-radius: 0 5px 5px 0;
  background-blend-mode: screen;
  background-position: center;
  height: 100%;
  width: 100%;
}

.image {
  background-size: cover;
  border-radius: 0 5px 5px 0;
  background-blend-mode: screen;
  background-position: center;
  height: 100%;
  width: 100%;
  /* background-image: url(../assets/love-1.jpg); */
}
</style>
