import { getLeagueRecords, getLeagueTeamManagers, getLeagueTransactions, waitForAll, getManagersData } from '$lib/utils/helper';

export async function load() {
    const recordsInfo = waitForAll(
        getLeagueRecords(false),
        getLeagueTransactions(false),
        getLeagueTeamManagers(),
        getManagersData()
    )

    return {
        recordsInfo
    };
}
