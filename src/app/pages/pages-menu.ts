import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Tour Operators',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Add Tour Operator',
        link: '/pages/forms/tour-operator',
      },
      {
        title: 'Manage Tour Operators',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'Tour Packages',
    icon: 'nb-compose',
    children: [
      {
        title: 'Add Tour Packages',
        link: '/pages/forms/tour-package',
      },
      {
        title: 'Manage Packages',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'Tourists',
    icon: 'nb-gear',
    children: [
      {
        title: 'Manage Tourists',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree',
        link: '/pages/components/tree',
      }, {
        title: 'Notifications',
        link: '/pages/components/notifications',
      },
    ],
  },
  {
    title: 'Bookings',
    icon: 'nb-location',
    children: [
      {
        title: 'Manage Bookings',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Support',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'User Management',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
  {
    title: 'UI Components',
    icon: 'nb-locked',
    children: [
      {
        title: 'Forms',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Buttons',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Modals',
        link: '/pages/ui-features/modals',
      },
      {
        title: 'Popovers',
        link: '/pages/ui-features/popovers',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'Tabs',
        link: '/pages/ui-features/tabs/tab1',
      },
      {
        title: 'Layout Forms',
        link: '/pages/forms/layouts',

      },
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
    ],
  },
];
