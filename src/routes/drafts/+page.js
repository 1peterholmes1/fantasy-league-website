import { getUpcomingDraft, getPreviousDrafts, getLeagueTeamManagers, loadPlayers, getManagersData } from '$lib/utils/helper';

export async function load({ fetch }) {
    const upcomingDraftData = getUpcomingDraft();
    const previousDraftsData = getPreviousDrafts();
    const leagueTeamManagersData = getLeagueTeamManagers();
    const playersData = loadPlayers(fetch);
    const managersData = getManagersData();

    return {
        upcomingDraftData,
        previousDraftsData,
        leagueTeamManagersData,
        playersData,
        managersData
    };
}
