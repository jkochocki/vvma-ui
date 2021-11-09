export default {
    methods: {
        adjustAssetPath(path) {
            return require('~/assets/' + path.replace(/^~\/assets\//g, ''))
        }
    }
}

