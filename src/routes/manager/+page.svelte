<script>
    import LinearProgress from "@smui/linear-progress";
    import { Manager } from "$lib/components";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    export let data;
    const { manager, managersInfo } = data;

    onMount(() => {
        if (manager < 0) goto("/managers");
    });
</script>

<div class="main">
    {#await managersInfo}
        <!-- promise is pending -->
        <div class="loading">
            <p>Retrieving managers...</p>
            <LinearProgress indeterminate />
        </div>
    {:then [managersData, rostersData, leagueTeamManagers, leagueData, transactionsData, awards, records]}
        {#if managersData.length && manager > -1}
            <Manager
                {awards}
                {records}
                {manager}
                managers={managersData}
                {rostersData}
                {leagueTeamManagers}
                rosterPositions={leagueData.roster_positions}
                {transactionsData}
            />
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
