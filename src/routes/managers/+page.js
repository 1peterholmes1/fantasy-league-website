import {
    getLeagueTeamManagers,
    getManagersData,
    waitForAll
} from '$lib/utils/helper';

export async function load() {
    const allData = waitForAll(
        getManagersData(),
        getLeagueTeamManagers()
    )

    const props = {
        allData
    }

    return props;
}
