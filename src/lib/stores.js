import { writable } from 'svelte/store';

export const awards = writable([
  {
    year: 2022,
    champion: 8,
    second: 9,
    third: 5,
    toilet: 4
  },
  {
    year: 2021,
    champion: 11,
    second: 7,
    third: 10,
    toilet: 0
  },
  {
    year: 2020,
    champion: 1,
    second: 7,
    third: 11,
    toilet: 2
  }
]);
export const leagueData = writable({});
export const upcomingDraft = writable({});
export const previousDrafts = writable([]);
export const matchupsStore = writable({});
export const records = writable({});
export const rostersStore = writable({});
export const transactionsStore = writable({});
export const teamManagersStore = writable({});
export const nflState = writable({});
export const players = writable({});
export const news = writable([]);
export const posts = writable([]);
export const brackets = writable({});
export const standingsStore = writable({});
export const managersStore = writable([]);
