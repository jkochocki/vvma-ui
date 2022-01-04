<template>
    <div style="display: flex;">
        <div v-if="!isPost" style="display:flex">
            <b-card no-body :img-src="computedImg" @click="navigateToArticle(article.tag)">
                <b-card-body :title="article.title + ': ' + article.subject" >
                    <b-card-text>
                        "{{article.text}}"
                    </b-card-text>
                </b-card-body>
                <b-card-footer>
                    <small>{{article.createDate | formatDate }}</small>
                </b-card-footer>
            </b-card>
        </div>
        <div v-if="isPost" style="display: flex;">
            <b-card no-body :img-src="post.feature_image" @click="navigateToPost(post.slug)">
                <b-card-body :title="post.title" >
                    <b-card-text>
                        "{{post.excerpt}}"
                    </b-card-text>
                </b-card-body>
                <b-card-footer>
                    <small>{{post.created_at | formatDate }}</small>
                </b-card-footer>
            </b-card>
        </div>
        </div>
</template>

<script>
import { router } from 'vue'

export default {
    props: [
        'article',
        'post',
        'isPost'
    ],
    computed: {
        computedImg() {
            if (this.article) {
                return require('~/assets/' + this.article.img.replace(/^~\/assets\//g, ''))
            }
        }
    },
    methods: {
        navigateToArticle(url) {
            this.$router.push({path: 'articles/' + url});
        },
        navigateToPost(slug) {
            this.$router.push({path: slug});
        }
    }
}
</script>

<style scoped>
    .card {
        max-width:350px;
    }
    .card:hover {
        cursor: pointer;
    }

    .cart-title {
        font-size: 1.25rem;
    }

    .card-deck > .card:first-child {
        margin-left: auto !important;
    }

    .card-deck > .card:last-child {
        margin-right: auto !important;
    }

    .card-footer {
        background-color: white;
        border: none;
    }
</style>