<script>
    import { FullPost } from "$lib/components";

    export let data;
    const { postsData, postID, leagueTeamManagersData, managersData } = data;
</script>

<div id="main">
    <FullPost {postsData} {postID} {leagueTeamManagersData} {managersData} />
    <div class="center">
        <a class="viewAll" href="/blog">View More Blog Posts</a>
    </div>
</div>

<style>
    #main {
        position: relative;
        z-index: 1;
        display: block;
        margin: 30px auto;
        width: 95%;
        max-width: 1000px;
        overflow-y: hidden;
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
</style>

