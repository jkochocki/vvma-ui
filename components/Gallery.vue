<template>
  <div>
    <div id="gallery">
      <div class="thumbnails">
        <img class="image thumbnail" v-for="(image, i) in images" :src="image" :key="i" @click="index = i">
      </div>
      <client-only placeholder="Loading...">
        <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
      </client-only>
    </div>
  </div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow';
  export default {
    data() {
      return {
       
        images: [],
        index: null
      }
    },
    props: {
      photos: {
        type: Array
      }
    },
    components: {
      VueGallerySlideshow
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      adjustAssetPath(path) {
        return require('~/assets/' + path.replace(/^~\/assets\//g, ''))
      },
      loadImages() {
        for (let image of this.photos) {
          this.images.push(this.adjustAssetPath(image));
        }
      }
    },
    created() {
      this.loadImages();
    }
  }
</script>

<style scoped>
  .gallery, .gallery-backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    display: block;
    top: 0;
    left: 0;
  }

  .gallery-backdrop {
    background-color: #000;
    opacity: 90%;
    z-index: 100;
  }

  .gallery {
    z-index: 101;
  }

  .vvma-carousel {
    width: 85%;
    height: 85%;
  }

  .thumbnails {
    text-align: center
  }

  .thumbnail {
    max-height: 125px;
    margin: 3px;
    padding:1px;
  }

  .thumbnail:hover {
    cursor: pointer;
    border: 2px solid darkblue;
    border-radius: 2px;
  }

  .vgs {
    background-color: rgba(0,0,0,.97);
    padding-top: 10vh;
  }
</style>