// d:/NBC/Project/ewm/ewm-web/components/layout/data/sidebar-data.ts
import { NavGroup, Team, User } from './types';

export const sidebarData = {
    teams: [
        { name: 'Team A', id: 'team-a' },
        { name: 'Team B', id: 'team-b' },
    ] as Team[],
    user: {
        name: 'John Doe',
        email: 'john@example.com',
        avatar: '/placeholder-avatar.png',
    } as User,
    navGroups: [
        {
            title: 'Platform',
            items: [
                {
                    title: 'Dashboard',
                    url: '/console',
                    icon: undefined,
                },
                {
                    title: 'Content',
                    url: '#',
                    icon: undefined,
                    items: [
                        { title: 'Articles', url: '/console/content/articles' },
                        { title: 'Categories', url: '/console/content/categories' },
                    ],
                },
                {
                    title: 'Media',
                    url: '/console/media',
                    icon: undefined,
                },
                {
                    title: 'System',
                    url: '#',
                    icon: undefined,
                    items: [
                        { title: 'Users', url: '/console/users' },
                        { title: 'Settings', url: '/console/settings' },
                    ],
                },
            ],
        } as NavGroup,
    ],
};
