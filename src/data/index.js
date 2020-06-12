import { TREND } from '../const';

export const SUMMARY_TABS = [
    {
        title: 'Total Orders',
        desc: 'Last year expenses',
        data: '1896',
        background: 'linear-gradient(0deg,#a18cd1 0,#fbc2eb)',
    },
    {
        title: 'Clients',
        desc: 'Total Clients Profit',
        data: '$ 568',
        background: 'radial-gradient(circle 248px at center,#16d9e3 0,#30c7ec 47%,#46aef7 100%)',
    },
    {
        title: 'Followers',
        desc: 'People Interested',
        data: '46%',
        background: 'linear-gradient(180deg,#00b09b,#96c93d)',
    },
];

export const SALES_REPORT = {
    LAST: {
        number: '851',
        desc: 'Sales Total',
        chart: 'sales-chart1.svg',
        color: 'invert(69%) sepia(14%) saturate(1757%) hue-rotate(96deg) brightness(91%) contrast(89%)',
        list_title: 'Last Month Highlights',
    },
    CURR: {
        number: '368',
        desc: 'Total Leads',
        chart: 'sales-chart2.svg',
        color: 'invert(21%) sepia(56%) saturate(4040%) hue-rotate(331deg) brightness(91%) contrast(91%)',
        list_title: 'Top Authors',
    },
    CURRENCY: '$',
    LIST: [
        {
            name: 'Ella-Rose Henry',
            desc: 'Web Developer',
            img: 'avatar1.jpg',
            data: {
                number: 129,
                trend: TREND.DOWN,
            },
        },
        {
            name: 'Ruben Tillman',
            desc: 'UI Designer',
            img: 'avatar2.jpg',
            data: {
                number: 54,
                trend: TREND.UP,
            },
        },
        {
            name: 'Vinnie Wagstaff',
            desc: 'Java Programmer',
            img: 'avatar3.jpg',
            data: {
                number: 431,
                trend: TREND.SAME,
            },
        },
        {
            name: 'Ella-Rose Henry',
            desc: 'Web Developer',
            img: 'avatar1.jpg',
            data: {
                number: 129,
                trend: TREND.DOWN,
            },
        },
        {
            name: 'Ruben Tillman',
            desc: 'UI Designer',
            img: 'avatar2.jpg',
            data: {
                number: 54,
                trend: TREND.UP,
            },
        },
    ],
};

export const BANDWIDTH_REPORT = {
    TAB1: {
        number: '175.5%',
        desc: 'increased server resources',
        chart: 'bandwidth-chart1.svg',
        color: 'invert(75%) sepia(37%) saturate(936%) hue-rotate(352deg) brightness(99%) contrast(95%)',
        trend: TREND.SAME,
        list: [
            {
                percentage: 63,
                desc: 'Generated Leads',
                color: '#d92550',
            },
            {
                percentage: 32,
                desc: 'Submitted Tickets',
                color: '#3ac47d',
            },
            {
                percentage: 71,
                desc: 'Server Allocation',
                color: '#545cd8',
            },
            {
                percentage: 41,
                desc: 'Generated Leads',
                color: '#f7b924',
            },
        ],
    },
    TAB2: {
        number: '37.2%',
        desc: 'performance increase',
        chart: 'bandwidth-chart2.svg',
        color: 'invert(75%) sepia(37%) saturate(936%) hue-rotate(352deg) brightness(99%) contrast(95%)',
        trend: TREND.UP,
        list: [
            {
                percentage: 23,
                desc: 'Deploys',
                color: '#f7b924',
            },
            {
                percentage: 76,
                desc: 'Traffic',
                color: '#30b1ff',
            },
            {
                percentage: 83,
                desc: 'Servers Load',
                color: '#d92550',
            },
            {
                percentage: 48,
                desc: 'Reported Bugs',
                color: '#83588a',
            },
        ],
    },
};

export const WAVE_CHARTS = [
    {
        title: 'Received Messages',
        color: '#3ac47d',
        filter: 'invert(58%) sepia(78%) saturate(365%) hue-rotate(97deg) brightness(97%) contrast(87%)',
        number: '348',
        src: 'wave-chart1.svg',
    },
    {
        title: 'Sent Messages',
        color: '#d92550',
        filter: 'invert(25%) sepia(36%) saturate(7452%) hue-rotate(333deg) brightness(88%) contrast(91%)',
        number: '425',
        src: 'wave-chart2.svg',
    },
    {
        title: 'Inbox Total',
        color: '#f7b924',
        filter: 'invert(79%) sepia(13%) saturate(2531%) hue-rotate(349deg) brightness(100%) contrast(94%)',
        number: '274',
        src: 'wave-chart3.svg',
    },
];

export const NAV_ITEMS = [
    {
        groupTitle: 'Menu',
        content: [
            {
                title: 'Dashboards',
                icon: 'rocket',
                panelData: [
                    'Analytics',
                    'Commerce',
                    'Sales',
                    'Minimal',
                    'CRM',
                ]
            },
            {
                title: 'Pages',
                icon: 'page',
                panelData: [
                    'Login',
                    'LoginBoxed',
                    'Register',
                    'RegisterBoxed',
                    'ForgotPassword',
                    'ForgotPasswordBoxed',
                ]
            },
            {
                title: 'Applications',
                icon: 'block',
                panelData: [
                    'Mailbox',
                    'Chat',
                    'Split Layout',
                    'FAQ Section',                    
                ]
            },
        ]
    },
    {
        groupTitle: 'UI Components',
        content: [
            {
                title: 'Elements',
                icon: 'diamond',
                panelData: [
                    'Buttons',
                    'Dropdowns',
                    'Icons',
                    'Badges',
                    'Cards',
                    'Loading Indicators',
                    'List Groups',
                    'Navigation Menus',
                    'Timeline',
                    'Utilities',
                    'Visibility Sensor',
                ]
            },
            {
                title: 'Components',
                icon: 'car',
                panelData: [
                    'Tabs',
                    'Accordions',
                    'Notifications',
                    'Modals',
                    'Loading Blockers',
                    'Progress Bar',
                    'Tooltips & Popovers',
                    'Carousel',
                    'Calendar',
                    'Pagination',
                    'Count Up',
                    'Sticky Elements',
                    'Scrollable',
                    'Tree View',
                    'Maps',
                    'Ratings',
                    'Image Crop',
                    'Guided Tours',
                ]
            },
            {
                title: 'Tables',
                icon: 'slide',
                panelData: [
                    'Data Tables',
                    'Regular Tables',
                    'Grid Tables',               
                ]
            },
        ]
    },
    {
        groupTitle: 'Dashboard Widgets',
        content: [
            {
                title: 'Chart Boxes',
                icon: 'chart',
                panelData: [
                    'Variation 1',
                    'Variation 2',
                    'Variation 3',
                ]
            },
            {
                title: 'Profile Boxes',
                icon: 'profile',
            },
            {
                title: 'Content Boxes',
                icon: 'monitor',
            },
        ]
    },
    {
        groupTitle: 'Forms',
        content: [
            {
                title: 'Elements',
                icon: 'bulb',
                panelData: [
                    'Controls',
                    'Layouts',
                    'Validation',
                    'Wizards',
                    'Sticky Form Headers',
                ]
            },
            {
                title: 'Widgets',
                icon: 'controller',
                panelData: [
                    'Datepicker',
                    'Range Slider',
                    'Input Selects',
                    'Toggle Switch',
                    'Dropdowns',
                    'WYSIWYG Editor',
                    'Input Mask',
                    'Typeahead',
                    'Clipboard',
                    'Textarea Autosize',
                    'Number Spinners',
                    'Color Picker',
                    'Dropzone',
                ]
            },
        ]
    },
    {
        groupTitle: 'Charts',
        content: [
            {
                title: 'ChartJS',
                icon: 'chart',
            },
            {
                title: 'Apex Charts',
                icon: 'piechart',
            },
            {
                title: 'Gauges',
                icon: 'thunder',
            },
            {
                title: 'Chart Sparklines 1',
                icon: 'node',
            },
            {
                title: 'Chart Sparklines 2',
                icon: 'slider',
            },
        ]
    },
];

export const RC_NAV_MENU = [
    {
        icon: 'gift',
        text: 'Mega Menu',
        link: '/',
    },
    {
        text: 'Settings',
        link: '/',
    },
    {
        icon: 'gear',
        text: 'Projects',
        link: '/',
    },
];

export const RP_LEFT_ITEMS = [
    {
        src: 'grid.svg',
        link: '/',
        background: 'rgba(84, 92, 216, 0.2)',
    },
    {
        src: 'bell.svg',
        link: '/',
        background: 'rgba(217, 37, 80, 0.2)',
    },
    {
        src: 'german.svg',
        link: '/',
        background: 'rgba(68, 64, 84, 0.2)',
    },
    {
        src: 'sketch.svg',
        link: '/',
        background: 'rgba(58, 196, 125, 0.2)',
    },
];
