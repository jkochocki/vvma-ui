<template>
    <div>
        <b-img :src="imgSrc" :alt="alt" fluid></b-img>
    </div>
</template>

<script>
export default {
    props: [
        imgSrc,
        alt
    ]
}
</script>