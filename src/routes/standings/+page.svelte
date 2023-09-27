<script>
	import { Standings } from "$lib/components";

	export let data;
	const { standingsData, leagueTeamManagersData, managersData } = data;
</script>

<div class="holder">
	<Standings {standingsData} {leagueTeamManagersData} {managersData} />
</div>

<style>
	.holder {
		position: relative;
		z-index: 1;
		text-align: center;
	}
</style>
