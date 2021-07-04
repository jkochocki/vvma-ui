<template>
    <b-card :title="article.title" :img-src="computedImg">
        <b-card-text>
            {{article.text}}
        </b-card-text>
    </b-card>
</template>

<script>
export default {
    props: {
        article: {
            title: String,
            img: String,
            text: String
        }
    },
    computed: {
        computedImg() {
            return require('~/assets/' + this.article.img.replace(/^~\/assets\//g, ''))
        }
    }
}
</script>