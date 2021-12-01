<template>
    <div>
        <div>
            <br>
            <b-row>
                <b-col>
                    <h4 class="center-text">Community Partner Recipients</h4>
                </b-col>
            </b-row>
            <b-row>
                <b-col offset="10">
                    <a class="dummy-link"><small @click="scrollTo('gallery', -500)">Jump to Gallery</small></a>
                </b-col>
            </b-row>
            <br>
            <br>
            <b-row class="row-padding-bottom">
                <b-col>
                    <b-img-lazy rounded class="center-img img-max-height-500 col-stack-margin" src="~assets/recipient-photos/BGCD_2.jpg" fluid></b-img-lazy>
                </b-col>
                <b-col md="5" class="vert-center-contents">
                    <h5>
                        Public Schools
                    </h5>
                    <ul>
                        <li>
                            East Somerville Community School
                        </li>
                        <li>
                            Hennigan K - 8 School, Boston
                        </li>
                        <li>
                            Gardner Pilot Academy, Allston-Brighton
                        </li>
                        <li>
                            Mather Elementary School, Boston
                        </li>
                    </ul>
                    <hr>
                    <h5>
                        Youth Clubs and Organizations
                    </h5>
                    <ul>
                        <li>
                            Boys’ and Girls’ Club, Dorchester
                        </li>
                        <li>
                            Dorchester Youth Collaborative
                        </li>
                        <li>
                            Family Day Care Providers, Hyde Park
                        </li>
                    </ul>
                </b-col>
            </b-row>
            <b-row class="row-padding-bottom">
                <b-col>
                    <b-img-lazy rounded class="center-img" src="~assets/recipient-photos/0.jpg" fluid></b-img-lazy>
                </b-col>
                <b-col>
                    <b-img-lazy rounded class="center-img" src="~assets/recipient-photos/BGCD_4.jpg" fluid></b-img-lazy>
                </b-col>
                <b-col>
                    <b-img-lazy rounded class="center-img" src="~assets/recipient-photos/BGCD desk pic.jpg" fluid></b-img-lazy>
                </b-col>
            </b-row>
            <b-row class="row-padding-bottom">
                <b-col md="5" class="offset-1 vert-center-contents">
                   <h5>
                        Homeless Resettlement Organizations
                   </h5>
                    <ul>
                        <li>
                            Fresh Start, Hudson
                        </li>
                        <li>
                            Mission of Deeds, Reading
                        </li>
                    </ul>
                    <hr>
                    <h5>
                        Homeless Shelters and Sanctuaries
                    </h5>
                    <ul>
                        <li>
                            Catholic Charities Family Shelters, Boston
                        </li>
                        <li>
                            Father Bill’s and MainSpring Family Shelters
                        </li>
                        <li>
                            New England Home for Little Wanderers
                        </li>
                        <li>
                            New Hope, Inc  Milford
                        </li>
                        <li>
                            Project Hope, Dorchester and Roxbury
                        </li>
                    </ul>
                </b-col>
                <b-col class="lg-img-col">
                    <b-img-lazy rounded class="center-img img-max-height-500" src="~assets/recipient-photos/IMG_2228.jpg" fluid></b-img-lazy>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="lg-img-col">
                    <b-img-lazy rounded class="center-img img-max-height-500 col-stack-margin" src="~assets/recipient-photos/IMG_1493.jpg" fluid></b-img-lazy>
                </b-col>
                <b-col md="5" class="offset-1 vert-center-contents">
                    <h5>
                        Other Partners
                    </h5>
                    <ul>
                        <li>
                            Family Promise, MetroWest
                        </li>
                        <li>
                            Lexington Refugee Assistance Program
                        </li>
                    </ul>
                </b-col>
            </b-row>
            <br>
            <hr>
            <br>
            <div ref="gallery">
                <Gallery :photos="photos"></Gallery>
            </div>
        </div>
    </div>
</template>

<script>
import Gallery from '../../components/Gallery.vue';
import scrollTo from '../../mixins/scrollTo.js';
import photos from '../../assets/json/recipient_images.json';

export default {
    data() {
        return {
            photos
        }
    },
    components: {
        Gallery
    },
    mixins: [
        scrollTo
    ],
    created() {
        this.$store.commit('setBannerImg', {
            name: 'deskmates_builder_3-1'
        });
    }
}
</script>


<style>
    ul {
        list-style-type: none;
    }
</style>