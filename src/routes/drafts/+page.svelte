<script>
        import { Drafts } from "$lib/components";

        export let data;
        const {
                upcomingDraftData,
                previousDraftsData,
                leagueTeamManagersData,
                playersData,
                managersData,
        } = data;
</script>

<div id="main">
        <Drafts
                {upcomingDraftData}
                {previousDraftsData}
                {leagueTeamManagersData}
                {playersData}
                {managersData}
        />
</div>

<style>
        #main {
                position: relative;
                z-index: 1;
        }
</style>

