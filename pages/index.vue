<template>
    <div>
        <b-container>
            <br>
            <br>
            <b-row>
                <b-col class="section-padding">
                    <h4>&emsp;Volunteer Ventures MA is a Boston-based non-profit organization dedicated to creating a more
                just, compassionate, and equitable society through promotion of volunteerism and community
                service programming.</h4>
                </b-col>
            </b-row>
            
            <b-row cols="1">

                <b-col class="section-padding">
                    <h5>By harnessing the energy and spirit of volunteers - including individuals, groups and families
                from civic, faith and business organizations - VVMA aims to assist our community-based
                partners in achieving their missions, helping to uplift people, and address their needs in
                thoughtful, creative and meaningful ways.</h5>
                </b-col>
            </b-row>
            <br>
        </b-container>

        <DonateBanner></DonateBanner>

        <b-container>
            <br>
            <br>
            <b-row class="text-center">
                <b-col>
                    <h3>
                        News
                    </h3>
                </b-col>
            </b-row>
            <br>
            <b-card-group deck>
                <ArticleCard v-for="(article, i) in articles" :key="i" :article="article"></ArticleCard>
            </b-card-group>
            <br>
            <br>
        </b-container>
    </div>
</template>

<script>
import DonateBanner from '../components/DonateBanner.vue';
import ArticleCard from '../components/ArticleCard.vue';
import articles from '../assets/test-articles.json';
export default {
    data() {
        return {
            articles: articles
        }
    },
    components: {
        DonateBanner
    }
};
</script>

<style>

</style>
