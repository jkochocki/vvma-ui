export default {
    methods: {
        scrollTo(anchor, offset) {
            let yOffset = -offset;
            let el = this.$refs[anchor];
            console.log(this.$refs);
            let top = el.getBoundingClientRect().top;
            // let bottom = el.getBoundingClientRect().bottom;
            // let docHeight = document.body.scrollHeight;
            const y = top + window.pageYOffset + yOffset;

            window.scrollTo({top: y, behavior: 'smooth'});
        }
    }
}