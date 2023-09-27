import {
    waitForAll,
    getLeagueRosters,
    getLeagueTeamManagers,
    getLeagueData,
    getLeagueTransactions,
    getAwards,
    getLeagueRecords,
    getManagersData
} from '$lib/utils/helper';
export async function load({ url }) {
    const managersInfo = waitForAll(
        getManagersData(),
        getLeagueRosters(),
        getLeagueTeamManagers(),
        getLeagueData(),
        getLeagueTransactions(),
        getAwards(),
        getLeagueRecords(),
    );

    const manager = url?.searchParams?.get('manager');

    const props = {
        manager: manager && manager < 10 ? manager : -1,
        managersInfo
    }

    return props;
}
