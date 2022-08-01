export const OVERVIEW_ROUTES = 'overview';
export const STATS_ROUTES = 'stats';
export const PROJECTS_ROUTES = 'projects'
export const CHAT_ROUTES = 'chat';
export const CALENDAR_ROUTES = 'calendar';
export const appRoutes = {
  'Overview': OVERVIEW_ROUTES,
  'Stats': STATS_ROUTES,
  'Projects': PROJECTS_ROUTES,
  'Chat': CHAT_ROUTES,
  'Calendar': CALENDAR_ROUTES,
};
export const menuIcon = {
  'Overview': 'home',
  'Stats': 'leaderboard',
  'Projects': 'folder_open',
  'Chat': 'sms',
  'Calendar': 'calendar_month',
}

export const dialogConfig = {
  customDevice: {
    config: { title: 'Define task', description: 'Define task', icon: 'add' },
    size: { panelClass: 'custom-area' }
  }
}
