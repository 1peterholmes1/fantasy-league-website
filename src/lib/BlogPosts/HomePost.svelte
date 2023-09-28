<script>
    import LinearProgress from "@smui/linear-progress";
    import Post from "./Post.svelte";
    import { getManagersData, waitForAll } from "$lib/utils/helper";

    export let postData;

    let managersData = getManagersData();
</script>

{#await waitForAll(managersData, postData)}
    <!-- promise is pending -->
    <div class="loading">
        <p>Loading Blog Posts...</p>
        <LinearProgress indeterminate />
    </div>
{:then [managers, post]}
    <h2>Most Recent Blog Post</h2>
    <Post {post} createdAt={post.date} id={post.slug.current} {managers} />
    <div class="center">
        <a class="viewAll" href="/blog">View More Blog Posts</a>
    </div>
{:catch error}
    {@debug error}
    <div>Error Loading Blog</div>
{/await}

<style>
    .loading {
        display: block;
        width: 85%;
        max-width: 500px;
        margin: 80px auto;
    }

    h2 {
        font-size: 2em;
        text-align: center;
        margin-bottom: 1.5em;
    }

    .center {
        text-align: center;
        margin-bottom: 2em;
    }

    .viewAll {
        text-decoration: none;
        background-color: #920505;
        color: #fff;
        border-radius: 1em;
        padding: 0.5em 1em;
    }

    .viewAll:hover {
        background-color: #670404;
    }
</style>
