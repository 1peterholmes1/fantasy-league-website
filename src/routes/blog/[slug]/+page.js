
import { enableBlog, getBlogPosts, getLeagueTeamManagers, getManagersData } from '$lib/utils/helper';

export function load({ fetch, params }) {
    if (!enableBlog) return false;

    const postID = params.slug;
    const postsData = getBlogPosts(fetch);
    const leagueTeamManagersData = getLeagueTeamManagers();
    const managersData = getManagersData();

    return {
        postsData,
        postID,
        leagueTeamManagersData,
        managersData
    };
}
