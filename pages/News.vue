<template>
    <div>
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
import ArticleCard from '../components/ArticleCard.vue';
import articles from '../assets/json/articles.json';
export default {
    data() {
        return {
            articles: articles
        }
    }
};
</script>

<style>

</style>