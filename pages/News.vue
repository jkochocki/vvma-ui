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
            <b-card-group deck class="row-gap">
                <ArticleCard v-for="(article, i) in articles" :key="i" :article="article" :isPost="false"></ArticleCard>
                <ArticleCard v-for="(post, j) in posts" :key="j" :post="post" :isPost="true"></ArticleCard>
            </b-card-group>
            <br>
            <br>
        </b-container>
    </div>
</template>

<script>
import ArticleCard from '../components/ArticleCard.vue';
import articles from '../assets/json/articles.json';
import { getPosts } from '../api/posts.js';
export default {
    async asyncData() {
        const posts = await getPosts(4);
        return { posts: posts }
    },
    data() {
        return {
            articles: articles
        }
    },
    created() {
        this.$store.commit('setBannerImg', {
            name: 'group_build_pan'
        });
    }
};
</script>

<style>
.row-gap {
    row-gap: 30px;
}
</style>