<template>
    <div id="banner" :style="bannerStyles">
        <!-- <b-img src="https://picsum.photos/1024/400/?image=41" fluid-grow alt="Responsive image"></b-img> -->
        <b-img src="~assets/deskmates_builder_3-1.jpg" class="hero" fluid-grow alt="Responsive image"></b-img>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bannerStyles: {}
        }
    },
    mounted() {
        this.offsetHeight();
    },
    methods: {
        offsetHeight() {
            console.log(this.$refs);
            // let height = this.$refs.header.clientHeight + 'px';
            // Vue.set(this.bannerStyles, 'height', height);
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