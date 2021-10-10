import { INavData } from "@coreui/angular";

export const navItems: INavData[] = [
  {
    name: "Dashboard",
    url: "/merchant",
    icon: "icon-graph",
    badge: {
      variant: "info",
      text: "NEW",
    },
  },
  /*{
    title: true,
    name: "Theme",
  },
  {
    name: "Colors",
    url: "/merchant/theme/colors",
    icon: "icon-drop",
  },
  {
    name: "Typography",
    url: "/merchant/theme/typography",
    icon: "icon-pencil",
  },
  {
    title: true,
    name: "Components",
  },
  {
    name: "Base",
    url: "/merchant/base",
    icon: "icon-puzzle",
    children: [
      {
        name: "Cards",
        url: "/merchant/base/cards",
        icon: "icon-puzzle",
      },
      {
        name: "Carousels",
        url: "/merchant/base/carousels",
        icon: "icon-puzzle",
      },
      {
        name: "Collapses",
        url: "/merchant/base/collapses",
        icon: "icon-puzzle",
      },
      {
        name: "Forms",
        url: "/merchant/base/forms",
        icon: "icon-puzzle",
      },
      {
        name: "Pagination",
        url: "/merchant/base/paginations",
        icon: "icon-puzzle",
      },
      {
        name: "Popovers",
        url: "/merchant/base/popovers",
        icon: "icon-puzzle",
      },
      {
        name: "Progress",
        url: "/merchant/base/progress",
        icon: "icon-puzzle",
      },
      {
        name: "Switches",
        url: "/merchant/base/switches",
        icon: "icon-puzzle",
      },
      {
        name: "Tables",
        url: "/merchant/base/tables",
        icon: "icon-puzzle",
      },
      {
        name: "Tabs",
        url: "/merchant/base/tabs",
        icon: "icon-puzzle",
      },
      {
        name: "Tooltips",
        url: "/merchant/base/tooltips",
        icon: "icon-puzzle",
      },
    ],
  },
  {
    name: "Buttons",
    url: "/merchant/buttons",
    icon: "icon-cursor",
    children: [
      {
        name: "Buttons",
        url: "/merchant/buttons/buttons",
        icon: "icon-cursor",
      },
      {
        name: "Dropdowns",
        url: "/merchant/buttons/dropdowns",
        icon: "icon-cursor",
      },
      {
        name: "Brand Buttons",
        url: "/merchant/buttons/brand-buttons",
        icon: "icon-cursor",
      },
    ],
  },
  {
    name: "Charts",
    url: "/merchant/charts",
    icon: "icon-pie-chart",
  },
  {
    name: "Icons",
    url: "/merchant/icons",
    icon: "icon-star",
    children: [
      {
        name: "CoreUI Icons",
        url: "/merchant/icons/coreui-icons",
        icon: "icon-star",
        badge: {
          variant: "success",
          text: "NEW",
        },
      },
      {
        name: "Flags",
        url: "/merchant/icons/flags",
        icon: "icon-star",
      },
      {
        name: "Font Awesome",
        url: "/merchant/icons/font-awesome",
        icon: "icon-star",
        badge: {
          variant: "secondary",
          text: "4.7",
        },
      },
      {
        name: "Simple Line Icons",
        url: "/merchant/icons/simple-line-icons",
        icon: "icon-star",
      },
    ],
  },
  {
    name: "Notifications",
    url: "/merchant/notifications",
    icon: "icon-bell",
    children: [
      {
        name: "Alerts",
        url: "/merchant/notifications/alerts",
        icon: "icon-bell",
      },
      {
        name: "Badges",
        url: "/merchant/notifications/badges",
        icon: "icon-bell",
      },
      {
        name: "Modals",
        url: "/merchant/notifications/modals",
        icon: "icon-bell",
      },
    ],
  },
  {
    name: "Widgets",
    url: "/merchant/widgets",
    icon: "icon-calculator",
    badge: {
      variant: "info",
      text: "NEW",
    },
  },*/
  {
    name: "Icons",
    url: "/merchant/icons",
    icon: "icon-star",
    children: [
      {
        name: "CoreUI Icons",
        url: "/merchant/icons/coreui-icons",
        icon: "icon-star",
        badge: {
          variant: "success",
          text: "NEW",
        },
      },
      {
        name: "Flags",
        url: "/merchant/icons/flags",
        icon: "icon-star",
      },
      {
        name: "Font Awesome",
        url: "/merchant/icons/font-awesome",
        icon: "icon-star",
        badge: {
          variant: "secondary",
          text: "4.7",
        },
      },
      {
        name: "Simple Line Icons",
        url: "/merchant/icons/simple-line-icons",
        icon: "icon-star",
      },
    ],
  },
  {
    name: "Sales",
    url: "/merchant/sales",
    icon: "icon-briefcase",
    children: [
      {
        name: "Invoices",
        url: "/merchant/sales/invoices",
        icon: "icon-home",
      },
      {
        name: "Payments",
        url: "/merchant/sales/payments",
        icon: "fa fa-rupee",
      },
      {
        name: "Consumers",
        url: "/merchant/sales/consumers",
        icon: "icon-people",
      },
      {
        name: "Inventory",
        url: "/merchant/sales/inventory",
        icon: "icon-layers",
      }
    ],
  },
  {
    name: "Purchases",
    url: "/merchant/purchases",
    icon: "icon-briefcase",
    children: [
      {
        name: "Expenses",
        url: "/merchant/purchases/expenses",
        icon: "icon-home",
      },
      {
        name: "Payments",
        url: "/merchant/purchases/payments",
        icon: "fa fa-rupee",
      },
      {
        name: "Suppliers",
        url: "/merchant/purchases/suppliers",
        icon: "icon-people",
      },
      {
        name: "Assets",
        url: "/merchant/purchases/assets",
        icon: "icon-layers",
      }
    ],
  },
  {
    name: "Reports",
    url: "/merchant/reports",
    icon: "icon-chart",
    attributes: { permission: "ops" }
  },
  {
    name: "Tax",
    url: "/merchant/tax",
    icon: "icon-briefcase",
    attributes: { permission: "finance" },
    children: [
      {
        name: "GSTR1",
        url: "/merchant/tax/gstr1",
        icon: "icon-home",
      },
      {
        name: "GSTR2",
        url: "/merchant/tax/gstr2",
        icon: "icon-note",
      }
    ],
  },
  {
    name: "Settings",
    url: "/merchant/settings",
    icon: "icon-settings",
    attributes: { permission: "finance" },
    children: [
      {
        name: "Account",
        url: "/merchant/settings/account",
        icon: "icon-home",
      },
      {
        name: "Invoice Settings",
        url: "/merchant/settings/invoice",
        icon: "icon-note",
      },
      {
        name: "GST Settings",
        url: "/merchant/settings/gst",
        icon: "icon-book-open",
      },
    ],
  },
  /*{
    divider: true,
  },
  {
    title: true,
    name: "Extras",
  },
  {
    name: "Pages",
    url: "/merchant/pages",
    icon: "icon-star",
    children: [
      {
        name: "Login",
        url: "/login",
        icon: "icon-star",
      },
      {
        name: "Register",
        url: "/register",
        icon: "icon-star",
      },
      {
        name: "Error 404",
        url: "/404",
        icon: "icon-star",
      },
      {
        name: "Error 500",
        url: "/500",
        icon: "icon-star",
      },
    ],
  },
  {
    name: "Disabled",
    url: "/merchant",
    icon: "icon-ban",
    badge: {
      variant: "secondary",
      text: "NEW",
    },
    attributes: { disabled: true },
  },*/
];
