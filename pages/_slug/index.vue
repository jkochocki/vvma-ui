<template>
    <div>
        <b-container>
            <br>
            <br>
            <h1>{{post.title}}</h1>
            <br>
            <div v-html="post.html">
                {{post.html}}
            </div>
        </b-container>
    </div>
</template>

<script>
import { getSinglePost } from '~/api/posts.js';
export default {
    async asyncData({params}) {
        console.log(params);
        const post = await getSinglePost(params.slug);
        return { post: post }
    }
}
</script>

<style lang="">
    
</style>