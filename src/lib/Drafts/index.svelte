<script>
	import { waitForAll } from "$lib/utils/helper";
	import LinearProgress from "@smui/linear-progress";
	import Draft from "./Draft.svelte";

	export let upcomingDraftData,
		previousDraftsData,
		leagueTeamManagersData,
		playersData,
		managersData;
</script>

{#await waitForAll(upcomingDraftData, leagueTeamManagersData, playersData, managersData)}
	<div class="loading">
		<p>Retrieving upcoming draft...</p>
		<br />
		<LinearProgress indeterminate />
	</div>
{:then [upcomingDraft, leagueTeamManagers, { players }, managers]}
	<h4>Upcoming {upcomingDraft.year} Draft</h4>
	<Draft
		draftData={upcomingDraft}
		{leagueTeamManagers}
		year={upcomingDraft.year}
		{players}
		{managers}
	/>
{:catch error}
	<!-- promise was rejected -->
	<p>Something went wrong: {error.message}</p>
{/await}

{#await waitForAll(previousDraftsData, leagueTeamManagersData, playersData, managersData)}
	<hr />
	<h4>Previous Drafts</h4>
	<div class="loading">
		<p>Retrieving previous drafts...</p>
		<br />
		<LinearProgress indeterminate />
	</div>
{:then [previousDrafts, leagueTeamManagers, { players }, managers]}
	<!-- Don't display anything unless there are previous drafts -->
	{#if previousDrafts.length}
		<hr />
		<h4>Previous Drafts</h4>
		{#each previousDrafts as previousDraft}
			<h6>{previousDraft.year} Draft</h6>
			<Draft
				draftData={previousDraft}
				previous={true}
				{leagueTeamManagers}
				year={previousDraft.year}
				{players}
				{managers}
			/>
		{/each}
	{/if}
{:catch error}
	<!-- promise was rejected -->
	<p>Something went wrong: {error.message}</p>
{/await}

<style>
	.loading {
		display: block;
		width: 85%;
		max-width: 500px;
		margin: 80px auto;
	}

	h4 {
		text-align: center;
	}

	h6 {
		text-align: center;
	}
</style>

