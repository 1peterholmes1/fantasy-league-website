<script>
    import LinearProgress from "@smui/linear-progress";
    import { AllManagers } from "$lib/components";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    export let data;
    const { allData } = data;

    onMount(() => {
        // if (!managers.length) {
        //     goto("/");
        // }
    });
</script>

<div class="main">
    {#await allData}
        <!-- promise is pending -->
        <div class="loading">
            <p>Retrieving managers...</p>
            <LinearProgress indeterminate />
        </div>
    {:then [managers, leagueTeamManagers]}
        {#if managers.length}
            <AllManagers {managers} {leagueTeamManagers} />
        {/if}
    {:catch error}
        <!-- promise was rejected -->
        <p>Something went wrong: {error.message}</p>
    {/await}
</div>

<style>
    .main {
        position: relative;
        z-index: 1;
    }
    .loading {
        display: block;
        width: 85%;
        max-width: 500px;
        margin: 80px auto;
    }
</style>
