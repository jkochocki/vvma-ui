<template>
  <div>
    <!-- <div class="gallery">
      <div class="vvma-carousel">
        <b-carousel
      id="carousel-1"
      v-model="slide"
      controls
      indicators
      background="#ababab"
      img-height="85vh"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

    <b-carousel-slide v-for="(image, i) in photos" :key="i" :img-src="adjustAssetPath(image)">
    </b-carousel-slide>

    </b-carousel>
      </div>
    </div>
    <div class="gallery-backdrop"></div> -->
    <div >
      <img class="image" v-for="(image, i) in images" :src="image" :key="i" @click="index = i">
      <!-- <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow> -->
    </div>
  </div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow';
import images from '../assets/json/builder_images.json';
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        images,
        index
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
      }
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
</style>