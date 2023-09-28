import { get } from 'svelte/store';
import { posts } from '$lib/stores';

export const getBlogPosts = async (servFetch, bypass = false) => {
    if (get(posts)[0] && !bypass) {
        return { posts: get(posts), fresh: false };
    }
    const smartFetch = servFetch ?? fetch;

    const res = await smartFetch(`/api/getBlogPosts`, { compress: true })

    if (!res.ok) {
        const errs = await res.text()
        console.error(errs)
        if (get(posts)[0]) {
            return { posts: get(posts), fresh: true }
        }
        return { posts: [], fresh: true }
    }

    const newPosts = await res.json()

    posts.update(() => newPosts)

    return { posts: newPosts, fresh: true }
}

export const getNewestPost = async () => {
    const res = await fetch('/api/getNewestPost', { compress: true })

    if (!res.ok) {
        const errs = await res.text()
        console.error(errs)
        return null
    }

    const newPost = await res.json()

    return newPost
}


