<script>
    import { parseDate } from "$lib/utils/helper";
    import { urlForImage } from "$lib/utils/sanity";
    import { gotoManager } from "$lib/utils/helperFunctions/universalFunctions";

    export let type, author, createdAt, managers;
</script>

<div class="authorAndDate">
    <div
        class="author-block"
        on:click={() => {
            gotoManager({ managerID: author.managerID, managersObj: managers });
        }}
    >
        {#if author.image}
            <img
                alt="author avatar"
                class="teamAvatar"
                src={urlForImage(author.image.asset)}
            />
        {:else}
            <img
                alt="author avatar"
                class="teamAvatar"
                src="/managers/blankManager.png"
            />
        {/if}
        <span class="author">{author.name} - </span>
    </div>
    <span class="date"><i>{parseDate(createdAt)}</i></span>
    <div class="filter">
        <a href="/blog?filter={type}&page=1">{type}</a>
    </div>
</div>

<style>
    .teamAvatar {
        vertical-align: middle;
        border-radius: 50%;
        height: 30px;
        width: 30px;
        margin-right: 5px;
        border: 0.25px solid #777;
    }

    .author-block {
        padding-top: 1em;
        padding-bottom: 1em;
        display: inline;
    }

    .authorAndDate {
        color: var(--g999);
        padding: 0 2em;
    }

    .authorAndDate a {
        background-color: #00316b;
        color: #fff;
        border-radius: 1em;
        text-decoration: none;
        font-size: 0.8em;
        padding: 0.5em 1em;
    }

    .filter {
        margin-top: 1em;
    }

    .authorAndDate a:hover {
        background-color: #0082c3;
    }
</style>
