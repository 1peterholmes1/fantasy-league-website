
import { enableBlog, getBlogPosts, getLeagueTeamManagers, getManagersData } from '$lib/utils/helper';

export function load({ url, fetch }) {
    if (!enableBlog) return false;

    const queryPage = url?.searchParams?.get('page') || 1;
    const filterKey = url?.searchParams?.get('filter') || '';
    const postsData = getBlogPosts(fetch);
    const leagueTeamManagersData = getLeagueTeamManagers();
    const managersData = getManagersData()

    return {
        queryPage,
        postsData,
        filterKey,
        leagueTeamManagersData,
        managersData
    };
}
