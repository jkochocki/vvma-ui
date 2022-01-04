import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
    url: 'https://vvma-test-ghost.herokuapp.com',
    key: '25f22df26842228c3d0dfb1a13',
    version: 'v2'
});
    
export async function getPosts(limit) {
    return await api.posts
        .browse({
            limit: limit ? limit : 'all',
            include: 'tags, authors'
        })
        .catch((err) => {
            console.log(err);
        });
}

export async function getSinglePost(slug) {
    return await api.posts
        .read({
            slug: slug
        })
        .catch((err) => {
            console.log(err);
        });
}