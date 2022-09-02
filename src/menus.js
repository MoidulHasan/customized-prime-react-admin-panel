const menu = [
    {
        label: "Home",
        items: [
            {
                label: "Dashboard",
                icon: "pi pi-fw pi-home",
                to: "/",
            },
        ],
    },
    {
        label: "Menu",
        icon: "pi pi-fw pi-sitemap",
        items: [
            {
                label: "Applications",
                icon: "pi pi-fw pi-file",
                to: "/applications"
            },
            {
                label: "Members",
                icon: "pi pi-fw pi-users",

                items: [
                    {
                        label: "General Member",
                        icon: "pi pi-fw pi-user",
                        to: "/members-general"
                    },
                    {
                        label: "Executive Individual",
                        icon: "pi pi-fw pi-user",
                        to: "/executive-individual-members"
                    },
                    {
                        label: "Executive Organization",
                        icon: "pi pi-fw pi-user",
                        to: "/executive-organization-members"
                    },
                ]
            },
            {
                label: "Young Congress",
                icon: "pi pi-fw pi-sun",

                items: [
                    {
                        label: "Members",
                        icon: "pi pi-fw pi-user",
                        to: "young-congress-members"
                    },
                    {
                        label: "Activities",
                        icon: "pi pi-fw pi-bolt",
                        to: "young-congress-activities"
                    },
                    {
                        label: "Events",
                        icon: "pi pi-fw pi-calendar",
                        to: "young-congress-events"
                    },
                ]
            },
            {
                label: "Events",
                icon: "pi pi-fw pi-calendar",

                items: [
                    {
                        label: "Create",
                        icon: "pi pi-fw pi-calendar-plus",
                        to: "/create-events"
                    },
                    {
                        label: "View",
                        icon: "pi pi-fw pi-calendar",
                        to: "/view-events"
                    }
                ]
            },
            {
                label: "News",
                icon: "pi pi-fw pi-globe",
                items: [
                    {
                        label: "Create",
                        icon: "pi pi-fw pi-pencil",
                        to: "/create-news"
                    },
                    {
                        label: "View",
                        icon: "pi pi-fw pi-eye",
                        to: "/view-news"
                    }
                ]
            },
            {
                label: "Visitor's Message",
                icon: "pi pi-fw pi-inbox",
                to: "visitors-message"
            },
            {
                label: "Gallery",
                icon: "pi pi-fw pi-th-large",
                items: [
                    {
                        label: "Image",
                        icon: "pi pi-fw pi-images",
                        to: "image-gallery"
                    },
                    {
                        label: "Video",
                        icon: "pi pi-fw pi-images",
                        to: "video-gallery"
                    },
                ]
            },
            {
                label: "Contact",
                icon: "pi pi-fw pi-mobile",
                to: "/contact-info"
            }
        ]
    }
];

const getMenuItem = () => menu;

export default getMenuItem;