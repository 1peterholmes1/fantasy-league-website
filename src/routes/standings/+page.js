import { getLeagueStandings, getLeagueTeamManagers, getManagersData } from '$lib/utils/helper';

export async function load() {

    const standingsData = getLeagueStandings();
    const leagueTeamManagersData = getLeagueTeamManagers();
    const managersData = getManagersData()

    return {
        standingsData,
        leagueTeamManagersData,
        managersData
    };
}
