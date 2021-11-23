<template>
    <div>
        <b-container>
            <br>
            <br>
            <b-row class="text-center">
                <b-col>
                    <h3>
                        Community Partners
                    </h3>
                </b-col>
            </b-row>
            <br>
            <br>
            <b-row cols-md="2" cols-sm="1" class="text-center row-narrow">
                
                <b-col v-for="(image, i) in images" :key="i">
                    <b-img class="logo col-stack-margin-lg" :src="image" fluid-grow></b-img>
                </b-col>
            </b-row>
            <br>
            <br>
        </b-container>
    </div>
</template>

<script>
import partnerImages from '../assets/json/partner_images.json';
export default {
    data() {
        return {
            images: []
        }
    },
    created() {
        this.$store.commit('setBannerImg', {
            name: 'group_build_pan'
        });
        this.loadImages();
    },
    methods: {
        adjustAssetPath(path) {
            return require('~/assets/' + path.replace(/^~\/assets\//g, ''))
        },
        loadImages() {
            console.log(partnerImages);
            for (let image of partnerImages) {
                this.images.push(this.adjustAssetPath(image));
            }
        }
    }
}
</script>

<style>
    .logo {
        max-width: 300px;
        margin-left: auto;
        margin-right: auto;
    }
    
</style>