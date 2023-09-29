<script>
	import { Awards } from "$lib/components";
	import { waitForAll } from "$lib/utils/helper";
	import LinearProgress from "@smui/linear-progress";
	import { LegacyAwards } from "$lib/components";

	export let data;
	const { awardsData, teamManagersData, managersData } = data;
</script>

<div class="awards">
	{#await waitForAll(awardsData, teamManagersData, managersData)}
		<div class="loading">
			<p>Retrieving awards data...</p>
			<LinearProgress indeterminate />
		</div>
	{:then [podiums, leagueTeamManagers, managers]}
		{#each podiums as podium}
			{#if podium.year < 2023}
				<LegacyAwards {podium} {managers} />
			{:else}
				<Awards {podium} {leagueTeamManagers} {managers} />
			{/if}
		{:else}
			<p class="nothingYet">
				No seasons have been completed yet, so no awards have been earned...
			</p>
		{/each}
	{:catch error}
		<!-- promise was rejected -->
		<p>Something went wrong: {error.message}</p>
	{/await}
</div>

<style>
	.awards {
		display: block;
		margin: 30px auto;
		width: 95%;
		max-width: 1000px;
		position: relative;
		z-index: 1;
		overflow-y: hidden;
	}

	.loading {
		display: block;
		width: 85%;
		max-width: 500px;
		margin: 80px auto;
	}

	.nothingYet {
		display: block;
		width: 85%;
		max-width: 500px;
		margin: 80px auto;
		text-align: center;
	}
</style>
