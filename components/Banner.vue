<template>
    <div id="banner" :style="bannerStyles">
        <!-- <b-img src="https://picsum.photos/1024/400/?image=41" fluid-grow alt="Responsive image"></b-img> -->
        <b-img :src="require(`~/assets/photos/banner/${bannerImgName}.jpg`)" class="hero" fluid-grow alt="Responsive image"></b-img>
    </div>
</template>

<script>

export default {
    data() {
        return {
            bannerStyles: {},
            bannerImg: 'deskmates_builder_3-1'
        }
    },
    computed: {
        bannerImgName() {
             return this.$store.getters.imageName;
        }
    }
}
</script>

<style scoped>
   #banner {
       /* border-bottom: solid #333 1px; */
   }

   .hero {
       filter: brightness(.75);
   }
</style>