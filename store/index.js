export const state = () => ({
    bannerImg: 'group_build_pan'
});

export const getters = {
    imageName: state => {
        return state.bannerImg;
    }
}

export const mutations = {
    setBannerImg(state, payload) {
        state.bannerImg = payload.name;
    }
}