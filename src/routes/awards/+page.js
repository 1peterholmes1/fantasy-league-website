import { getAwards, getLeagueTeamManagers, getManagersData } from '$lib/utils/helper';

export async function load() {
    const awardsData = getAwards();
    const teamManagersData = getLeagueTeamManagers();
    const managersData = getManagersData();

    return {
        awardsData,
        teamManagersData,
        managersData
    };
}
