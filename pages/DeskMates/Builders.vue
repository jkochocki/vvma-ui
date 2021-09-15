<template>
    <div>
        <div>
            <br>
            <b-row>
                <b-col>
                    <h4 class="center-text">Our Desk Mates Builders</h4>
                </b-col>
            </b-row>
            <br>
            <b-row>
                
                <b-col md="6" align-self="center">
                   <h5>
                        Adult groups:
                   </h5>
                    <ul>
                        <li>
                            First Parish Unitarian Universalist, Lexington
                        </li>
                        <li>
                            Temple Isaiah, Lexington
                        </li>
                        <li>
                            Temple Shir Tikvah, Winchester
                        </li>
                        <li>     
                            Winchester Unitarian Society
                        </li>
                    </ul>
                </b-col>
                <b-col align-self="center">
                    <b-img-lazy rounded class="center-img img-max-height-500" src="~assets/builder_photos/IMG_0820.jpg" fluid></b-img-lazy>
                </b-col>
            </b-row>
            <br>
            <br>
            <b-row class="row-padding-bottom">
                <b-col lg="6">
                    <b-img-lazy rounded class="center-img col-stack-margin" src="~assets/builder_photos/IMG_1194.jpg" fluid></b-img-lazy>
                </b-col>
                <b-col lg="6">
                    <b-img-lazy rounded class="center-img" src="~assets/builder_photos/IMG_1299.jpg" fluid></b-img-lazy>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col align-self="center">
                    <b-img-lazy rounded class="center-img img-max-height-500" src="~assets/builder_photos/img0208.jpg" fluid></b-img-lazy>
                </b-col>
                <b-col md="5" align-self="center">
                    <h5>
                        Youth and teen groups:
                    </h5>
                    <ul>
                        <li>
                            Brimmer and May School, Chestnut Hill
                        </li>
                        <li>
                            Dorchester Youth Collaborative
                        </li>
                        <li>
                            Gann Academy, Waltham
                        </li>
                        <li>
                            Girl Scouts Troop 69021, Carlisle
                        </li>
                        <li>
                            Girl Scouts Ambassador Troop 72680, Carlisle 
                        </li>
                        <li>
                            Girl Scouts Troop 75306, Concord
                        </li>
                        <li>
                            JLOFT Jewish Learning Opportunities for Teens
                        </li>
                        <li>
                            Lexington High School National Honor Society
                        </li>
                        <li>
                            Roxbury Latin High School
                        </li>
                        <li>
                            Temple Emunah, Lexington 7th grade
                        </li>
                        <li>
                            Temple Sinai, Sharon
                        </li>
                        <li>
                            Winchester Unitarian Society WUSY-G
                        </li>
                    </ul>
                </b-col>
            </b-row>
            <br>
            <b-row>
                <b-col class="center-text">
                    …and over 25 additional  individual builders, younger and older, from throughout Greater Boston
                </b-col>
            </b-row>
            
            <!-- <b-button @click="showGallery = true">Click</b-button>
           
           <Gallery v-if="showGallery"></Gallery> -->
        </div>
    </div>
</template> 

<script>
import Gallery from '../../components/Gallery.vue';
    import photos from '../../assets/json/builder_images.json';

export default {
    
    data() {
        return {
            showGallery: false,
            photos
        }
    },
    components: {
        Gallery
    },
    methods: {
      adjustAssetPath(path) {
        return require('~/assets/' + path.replace(/^~\/assets\//g, ''))
      }
    }
}
</script>


<style>
    ul {
        list-style-type: none;
    }
</style>