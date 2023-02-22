import React from 'react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faWrench,
  faChartBar,
  faBook,
  faTablet,
  faShieldAlt,
  faExchangeAlt,
  faHdd,
  faLink,
  faUsers,
  faWindowRestore,
  faKey,
  faBus,
  faExclamationTriangle,
  faUserShield,
  faEnvelope,
  faExternalLinkSquareAlt,
  faPlusCircle,
  faCheckCircle,
  faRadiationAlt,
  faSpinner,
  faPlayCircle,
  faPauseCircle,
  faStopCircle,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    section: 'Dashboard',
    to: '/home',
    icon: <FontAwesomeIcon icon={faHome} className="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Identity Management',
  },
  {
    component: CNavGroup,
    section: 'Identity Management',
    name: 'Administration',
    to: '/identity/administration',
    icon: <FontAwesomeIcon icon={faWrench} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Users',
        to: '/identity/administration/users',
      },
      {
        component: CNavItem,
        name: 'Groups',
        to: '/identity/administration/groups',
      },
      {
        component: CNavItem,
        name: 'Group Templates',
        to: '/identity/administration/group-templates',
      },
      {
        component: CNavItem,
        name: 'Deploy Group Template',
        to: '/identity/administration/deploy-group-template',
      },
      {
        component: CNavItem,
        name: 'Roles',
        to: '/identity/administration/roles',
      },
      {
        component: CNavItem,
        name: 'Offboarding Wizard',
        to: '/identity/administration/offboarding-wizard',
      },
      {
        component: CNavItem,
        name: 'Deleted Items',
        to: '/identity/administration/deleted-items',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Reports',
    section: 'Identity Management',
    to: '/identity/reports',
    icon: <FontAwesomeIcon icon={faChartBar} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'MFA Report',
        to: '/identity/reports/mfa-report',
      },
      {
        component: CNavItem,
        name: 'Basic Auth Report',
        to: '/identity/reports/basic-auth-report',
      },
      {
        component: CNavItem,
        name: 'Sign-in Report',
        to: '/identity/reports/signin-report',
      },
      {
        component: CNavItem,
        name: 'AAD Connect Report',
        to: '/identity/reports/azure-ad-connect-report',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Tenant Administration',
  },
  {
    component: CNavGroup,
    name: 'Administration',
    section: 'Tenant Administration',
    to: '/tenant/administration',
    icon: <FontAwesomeIcon icon={faWrench} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Tenants',
        to: '/tenant/administration/tenants',
      },
      {
        component: CNavItem,
        name: 'Alerts Wizard',
        to: '/tenant/administration/alertswizard',
      },

      {
        component: CNavItem,
        name: 'Scheduled Alerts',
        to: '/tenant/administration/alertsqueue',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Standards',
    section: 'Tenant Administration',
    to: '/tenant/standards',
    icon: <FontAwesomeIcon icon={faBook} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Edit Individual Standards',
        to: '/tenant/standards/list-applied-standards',
      },
      {
        component: CNavItem,
        name: 'Apply Standards',
        to: '/tenant/standards/apply-standard',
      },
      {
        component: CNavItem,
        name: 'Best Practice Analyser',
        to: '/tenant/standards/bpa-report',
      },
      {
        component: CNavItem,
        name: 'Domains Analyser',
        to: '/tenant/standards/domains-analyser',
      },
      {
        component: CNavItem,
        name: 'Individual Domain Check',
        to: '/tenant/standards/individual-domains',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Conditional Access',
    section: 'Conditional Access',
    to: '/tenant/administration',
    icon: <FontAwesomeIcon icon={faKey} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Policies',
        to: '/tenant/conditional/list-policies',
      },
      {
        component: CNavItem,
        name: 'Named Locations',
        to: '/tenant/conditional/list-named-locations',
      },
      {
        component: CNavItem,
        name: 'Deploy Conditional Access',
        to: '/tenant/conditional/deploy',
      },
      {
        component: CNavItem,
        name: 'Deploy Named Locations',
        to: '/tenant/conditional/deploy-named-location',
      },
      {
        component: CNavItem,
        name: 'Add Template',
        to: '/tenant/conditional/add-template',
      },
      {
        component: CNavItem,
        name: 'Templates',
        to: '/tenant/conditional/list-template',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Reports',
    section: 'Reports',
    to: '/tenant/reports',
    icon: <FontAwesomeIcon icon={faChartBar} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Graph Explorer',
        to: '/tenant/administration/graph-explorer',
      },
      {
        component: CNavItem,
        name: 'Licence Report',
        to: '/tenant/administration/list-licenses',
      },
      {
        component: CNavItem,
        name: 'Consented Applications',
        to: '/tenant/administration/application-consent',
      },
      {
        component: CNavItem,
        name: 'Service Health',
        to: '/tenant/administration/service-health',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Security & Compliance',
  },
  {
    component: CNavGroup,
    name: 'Incidents & Alerts',
    section: 'Security & Compliance',
    to: '/security/incidents',
    icon: <FontAwesomeIcon icon={faExclamationTriangle} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Incidents',
        to: '/security/incidents/list-incidents',
      },
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/security/incidents/list-alerts',
      },
    ],
  },
  // Coming in another branch (heads up)
  //{
  //component: CNavGroup,
  //name: 'Vulnerabilities',
  //section: 'Security & Compliance',
  //to: '/security/vulnerabilities',
  //icon: <FontAwesomeIcon icon={faChessRook} className="nav-icon" />,
  //items: [],
  //},
  {
    component: CNavGroup,
    name: 'Defender',
    section: 'Security & Compliance',
    to: '/security/defender',
    icon: <FontAwesomeIcon icon={faShieldAlt} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Defender Deployment',
        to: '/security/defender/deployment',
      },
      {
        component: CNavItem,
        name: 'Defender Status',
        to: '/security/defender/list-defender',
      },
      {
        component: CNavItem,
        name: 'Vulnerabilities',
        to: '/security/defender/list-defender-tvm',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Reports',
    section: 'Security & Compliance',
    to: '/security/reports',
    icon: <FontAwesomeIcon icon={faChartBar} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Device Compliance',
        to: '/security/reports/list-device-compliance',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Intune',
  },
  {
    component: CNavGroup,
    name: 'Applications',
    section: 'Endpoint Management',
    to: '/endpoint/applications',
    icon: <FontAwesomeIcon icon={faWindowRestore} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Applications',
        to: '/endpoint/applications/list',
      },
      {
        component: CNavItem,
        name: 'Application Queue',
        to: '/endpoint/applications/queue',
      },
      {
        component: CNavItem,
        name: 'Add Choco App',
        to: '/endpoint/applications/add-choco-app',
      },
      {
        component: CNavItem,
        name: 'Add Store App',
        to: '/endpoint/applications/add-winget-app',
      },
      {
        component: CNavItem,
        name: 'Add Office App',
        to: '/endpoint/applications/add-office-app',
      },
      {
        component: CNavItem,
        name: 'Add MSP App',
        to: '/endpoint/applications/add-rmm-app',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Autopilot',
    section: 'Endpoint Management',
    to: '/endpoint/autopilot',
    icon: <FontAwesomeIcon icon={faTablet} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add Device',
        to: '/endpoint/autopilot/add-device',
      },
      {
        component: CNavItem,
        name: 'Add Profile',
        to: '/endpoint/autopilot/add-profile',
      },
      {
        component: CNavItem,
        name: 'Add Status Page',
        to: '/endpoint/autopilot/add-status-page',
      },
      {
        component: CNavItem,
        name: 'Autopilot Devices',
        to: '/endpoint/autopilot/list-devices',
      },
      {
        component: CNavItem,
        name: 'Profiles',
        to: '/endpoint/autopilot/list-profiles',
      },
      {
        component: CNavItem,
        name: 'Status Pages',
        to: '/endpoint/autopilot/list-status-pages',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Device Management',
    section: 'Endpoint Management',
    to: '/endpoint/MEM',
    icon: <FontAwesomeIcon icon={faExchangeAlt} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Devices',
        to: '/endpoint/reports/devices',
      },
      {
        component: CNavItem,
        name: 'MEM Policies',
        to: '/endpoint/MEM/list-policies',
      },
      {
        component: CNavItem,
        name: 'Apply Policy',
        to: '/endpoint/MEM/add-policy',
      },
      {
        component: CNavItem,
        name: 'Add Policy Template',
        to: '/endpoint/MEM/add-policy-template',
      },
      {
        component: CNavItem,
        name: 'Templates',
        to: '/endpoint/MEM/list-templates',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Teams & Sharepoint',
  },
  {
    component: CNavGroup,
    name: 'OneDrive',
    section: 'Teams & Sharepoint',
    to: '/teams-share/onedrive',
    icon: <FontAwesomeIcon icon={faHdd} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'OneDrive',
        to: '/teams-share/onedrive/list',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'SharePoint',
    section: 'Teams & Sharepoint',
    to: '/teams-share/sharepoint',
    icon: <FontAwesomeIcon icon={faLink} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'SharePoint',
        to: '/teams-share/sharepoint/list-sharepoint',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Teams',
    section: 'Teams & Sharepoint',
    to: '/teams-share/teams',
    icon: <FontAwesomeIcon icon={faUsers} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Business Voice',
        to: '/teams-share/teams/business-voice',
      },
      {
        component: CNavItem,
        name: 'Teams',
        to: '/teams-share/teams/list-team',
      },
      {
        component: CNavItem,
        name: 'Add Team',
        to: '/teams-share/teams/add-team',
      },
      {
        component: CNavItem,
        name: 'Teams Activity',
        to: '/teams-share/teams/teams-activity',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Email & Exchange',
  },
  {
    component: CNavGroup,
    name: 'Administration',
    section: 'Email & Exchange',
    to: '/email/exchange',
    icon: <FontAwesomeIcon icon={faWrench} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Mailboxes',
        to: '/email/administration/mailboxes',
      },
      {
        component: CNavItem,
        name: 'Mailbox Rules',
        to: '/email/administration/mailbox-rules',
      },
      {
        component: CNavItem,
        name: 'Contacts',
        to: '/email/administration/contacts',
      },
      {
        component: CNavItem,
        name: 'Quarantine',
        to: '/email/administration/quarantine',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Transport Rules',
    section: 'Email & Exchange',
    to: '/tenant/administration',
    icon: <FontAwesomeIcon icon={faBus} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Transport rules',
        to: '/email/transport/list-rules',
      },
      {
        component: CNavItem,
        name: 'Transport Templates',
        to: '/email/transport/list-templates',
      },
      {
        component: CNavItem,
        name: 'Deploy Transport rule',
        to: '/email/transport/deploy-rules',
      },
      {
        component: CNavItem,
        name: 'Connectors',
        to: '/email/connectors/list-connectors',
      },
      {
        component: CNavItem,
        name: 'Connector Templates',
        to: '/email/connectors/list-connector-templates',
      },
      {
        component: CNavItem,
        name: 'Deploy Connector Templates',
        to: '/email/connectors/deploy-connector',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Spamfilter',
    section: 'Email & Exchange',
    to: '/tenant/administration',
    icon: <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Spamfilter',
        to: '/email/spamfilter/list-spamfilter',
      },
      {
        component: CNavItem,
        name: 'Apply Spamfilter Template',
        to: '/email/spamfilter/deploy',
      },
      {
        component: CNavItem,
        name: 'Templates',
        to: '/email/spamfilter/list-templates',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Reports',
    section: 'Email & Exchange',
    to: '/email/reports',
    icon: <FontAwesomeIcon icon={faChartBar} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Mailbox Statistics',
        to: '/email/reports/mailbox-statistics',
      },
      {
        component: CNavItem,
        name: 'Mailbox Client Access Settings',
        to: '/email/reports/mailbox-cas-settings',
      },
      {
        component: CNavItem,
        name: 'Message Trace',
        to: '/email/reports/message-trace',
      },
      {
        component: CNavItem,
        name: 'Phishing Policies',
        to: '/email/reports/phishing-policies',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Settings',
  },
  {
    component: CNavGroup,
    name: 'CIPP',
    section: 'Settings',
    to: '/cipp/cipp',
    icon: <FontAwesomeIcon icon={faWrench} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Settings',
        to: '/cipp/settings',
      },
      {
        component: CNavItem,
        name: 'SAM Setup Wizard',
        to: '/cipp/setup',
      },
      {
        component: CNavItem,
        name: 'Documentation',
        href: 'https://cipp.app',
        target: '_blank',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'GDAP Migration',
    section: 'Settings',
    to: '/cipp/gdap',
    icon: <FontAwesomeIcon icon={faUserShield} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Migration Wizard',
        to: '/tenant/administration/gdap',
      },
      {
        component: CNavItem,
        name: 'GDAP Migration Status',
        to: '/tenant/administration/gdap-status',
      },
      {
        component: CNavItem,
        name: 'Application Approval',
        to: '/tenant/administration/appapproval',
      },
      {
        component: CNavItem,
        name: 'Documentation',
        href: 'https://cipp.app/docs/user/usingcipp/GDAP/migration',
        target: '_blank',
      },
    ],
  },
  // ITSM Dev use of Icons:
  // faPlusCircle          Expand element
  // faCheckCircle         Active
  // faRadiationAlt        Broken
  // faSpinner             Testing (Pre-Release Active)
  // faPlayCircle          Development underway
  // faPauseCircle         Development next
  // faStopCircle          Development unscheduled
  // faQuestionCircle      Design stage
  // faCircleExclamation   Design unscheduled
  // -
  {
    component: CNavTitle,
    name: 'PSA [ISM] - Tickets & Assets',
  },
  {
    component: CNavGroup,
    name: 'Organizations',
    section: 'PSA [ISM] - Tickets & Assets',
    to: '/psa/ism/orgs',
    icon: <FontAwesomeIcon icon={faPlusCircle} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'List Organizations',
        to: '/psa/ism/orgs/list-organizations',
        icon: <FontAwesomeIcon icon={faSpinner} className="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Alerts Wizard',
        to: '/psa/ism/orgs/alerts-wizard',
        icon: <FontAwesomeIcon icon={faPauseCircle} className="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'List Alerts',
        to: '/psa/ism/orgs/list-alerts',
        icon: <FontAwesomeIcon icon={faPauseCircle} className="nav-icon" />,
      },
      // notes: NoOrgType, NoOrgStatus, NoOrgEmail, NoOrgGoLive, NoMaintenanceWindow, MissingLocationInfo, MissingKmsId, MissingComId, MissingRmmId, etc.
    ],
  },
  {
    component: CNavGroup,
    name: 'Endpoints',
    section: 'PSA [ISM] - Tickets & Assets',
    to: '/psa/ism/endpoints',
    icon: <FontAwesomeIcon icon={faPlusCircle} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'List Computers',
        to: '/psa/ism/endpoints/list-computers',
        icon: <FontAwesomeIcon icon={faSpinner} className="nav-icon" />,
      },
      //notes: will need OffCanvas wizards for 'Manually Add Unmanaged CMDB items' & 'Manually Remove Unmanaged CMDB items' (i.e. computers not in RMM, so need to do manually in PSA)
      {
        component: CNavItem,
        name: 'List Servers',
        to: '/psa/ism/endpoints/list-servers',
        icon: <FontAwesomeIcon icon={faPauseCircle} className="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'List BYODs',
        to: '/psa/ism/endpoints/list-byods',
        icon: <FontAwesomeIcon icon={faCircleExclamation} className="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Alerts Wizard',
        to: '/psa/ism/endpoints/alerts-wizard',
        icon: <FontAwesomeIcon icon={faPauseCircle} className="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'List Alerts',
        to: '/psa/ism/endpoints/list-alerts',
        icon: <FontAwesomeIcon icon={faPauseCircle} className="nav-icon" />,
      },
      // notes: NoRmmMatch, NoOwner, NoOrg, NamingConvention, OldLogin, OldUpdates, OldSoeApps, Sec, Warranties, etc.
    ],
  },
  {
    component: CNavGroup,
    name: 'Users',
    section: 'PSA [ISM] - Tickets & Assets',
    to: '/psa/ism/endpoints',
    icon: <FontAwesomeIcon icon={faPlusCircle} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'List Users',
        to: '/psa/ism/endpoints/list-users',
        icon: <FontAwesomeIcon icon={faSpinner} className="nav-icon" />,
      },
      // notes: will also have OffCanvas wizards for 'Manually Add Unmanaged Users' & 'Disable Unmanaged Users' (i.e. users are not in COM/MSOL, so need to do manually in PSA)
      {
        component: CNavItem,
        name: 'Alerts Wizard',
        to: '/psa/ism/endpoints/alerts-wizard',
        icon: <FontAwesomeIcon icon={faPauseCircle} className="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'List Alerts',
        to: '/psa/ism/endpoints/list-alerts',
        icon: <FontAwesomeIcon icon={faPauseCircle} className="nav-icon" />,
      },
      // notes: NoComMatch, NoOrg, NoMFA, OldLogin, Licenses, etc.
    ],
  },
  //note (below): use same OffCanvas wizards for 'Manually Add Unmanaged CMDB items' & 'Manually Remove Unmanaged CMDB items'
  {
    component: CNavGroup,
    name: 'Network Infrastructure',
    section: 'PSA [ISM] - Tickets & Assets',
    to: '/psa/ism/nwi',
    icon: <FontAwesomeIcon icon={faQuestionCircle} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'List Printers',
        to: '/psa/ism/nwi/list-printers',
        icon: <FontAwesomeIcon icon={faQuestionCircle} className="nav-icon" />,
      },
      // notes: 1. use OffCanvas Alerts Wizard and List Alerts (neater), 2. track: NamingConvention, NoPwdLoginInfo, NoPrinterLogic, NoDiscoveryMatch, NoSNMPv3, MissingLocationInfo, MissingKmsLink(s), etc.
      {
        component: CNavItem,
        name: 'Routers & Switches',
        to: '/psa/ism/nwi/list-routersswitches',
        icon: <FontAwesomeIcon icon={faQuestionCircle} className="nav-icon" />,
      },
      // notes: 1. use OffCanvas Alerts Wizard and List Alerts (neater), 2. track: NamingConvention, NoPwdLoginInfo, UnsupportedVendor, NoDiscoveryMatch, NoSNMPv3, OldVersion, MissingLocationInfo, MissingKmsLink(s), NoMaintenanceWindow, etc.
      {
        component: CNavItem,
        name: 'Wireless APs',
        to: '/psa/ism/nwi/list-waps',
        icon: <FontAwesomeIcon icon={faQuestionCircle} className="nav-icon" />,
      },
      // notes: 1. use OffCanvas Alerts Wizard and List Alerts (neater), 2. track: NamingConvention, NoPwdLoginInfo, UnsupportedVendor, NoDiscoveryMatch, NoSNMPv3, OldVersion, MissingLocationInfo, MissingKmsLink(s), NoMaintenanceWindow, etc.
      {
        component: CNavItem,
        name: 'Other NWI',
        to: '/psa/ism/nwi/list-othernwi',
        icon: <FontAwesomeIcon icon={faQuestionCircle} className="nav-icon" />,
      },
      // notes: (for example ISP NWI) 1. use OffCanvas Alerts Wizard and List Alerts (neater), 2. track: MissingCiRecord, MissingCiInfo, MissingLocationInfo, MissingKmsLink(s), etc.
    ],
  },
  {
    component: CNavGroup,
    name: 'Ticket Management',
    section: 'PSA [ISM] - Tickets & Assets',
    to: '/psa/ism/tickets',
    icon: <FontAwesomeIcon icon={faCircleExclamation} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Requests',
        to: '/psa/ism/tickets/list-requests',
        icon: <FontAwesomeIcon icon={faCircleExclamation} className="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Alerts Wizard',
        to: '/psa/ism/tickets/requests-alerts-wizard',
        icon: <FontAwesomeIcon icon={faCircleExclamation} className="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'List Alerts',
        to: '/psa/ism/tickets/requests-list-alerts',
        icon: <FontAwesomeIcon icon={faCircleExclamation} className="nav-icon" />,
      },
      // notes: SltResponse, SltResolution, NextActionLapsing,, NextActionLapsed, CSAT, etc.
      {
        component: CNavItem,
        name: 'Incidents',
        to: '/psa/ism/tickets/list-incidents',
      },
      {
        component: CNavItem,
        name: 'Alerts Wizard',
        to: '/psa/ism/tickets/requests-alerts-wizard',
        icon: <FontAwesomeIcon icon={faCircleExclamation} className="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'List Alerts',
        to: '/psa/ism/tickets/requests-list-alerts',
        icon: <FontAwesomeIcon icon={faCircleExclamation} className="nav-icon" />,
      },
      // notes: SltResponse, SltResolution, NextActionLapsing,, NextActionLapsed, CSAT, etc.
    ],
  },
  {
    component: CNavTitle,
    name: 'SEC [BEST] - Endpoint Security',
  },
  {
    component: CNavGroup,
    name: 'BEST GravityZone [SEC]',
    section: 'SEC [BEST] - Endpoint Security',
    to: '/itsm/sec/best',
    icon: <FontAwesomeIcon icon={faExternalLinkSquareAlt} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'List Agents',
        to: '/itsm/sec/best/list-agents',
      },
      {
        component: CNavItem,
        name: 'List Policies',
        to: '/itsm/sec/best/list-policies',
      },
      {
        component: CNavItem,
        name: 'Pending Actions',
        to: '/itsm/sec/best/report-pending-actions',
        icon: <FontAwesomeIcon icon={faChartBar} className="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Monthly Activity',
        to: '/itsm/sec/best/report-monthly-activity',
        icon: <FontAwesomeIcon icon={faChartBar} className="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Computers Missing',
        to: '/itsm/sec/best/report-computers-missing',
        icon: <FontAwesomeIcon icon={faChartBar} className="nav-icon" />,
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'KMS [IT Glue] - Documentation',
    icon: <FontAwesomeIcon icon={faPlusCircle} className="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'IT Glue [KMS tool]',
    section: 'KMS [IT Glue] - Documentation',
    to: '/itsm/kms/itg',
    icon: <FontAwesomeIcon icon={faExternalLinkSquareAlt} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Organizations',
        to: '/itsm/kms/itg/list-organizations',
      },
      // capture products.services and provide link to the ITG Org Details
      {
        component: CNavItem,
        name: 'Computers',
        to: '/itsm/kms/itg/list-computers',
      },
      // likely accessible from other Menu items
      {
        component: CNavItem,
        name: 'Users',
        to: '/itsm/kms/itg/list-users',
      },
      {
        component: CNavItem,
        name: 'Azure Subscriptions',
        to: '/itsm/kms/itg/report-azure-subscriptions',
        icon: <FontAwesomeIcon icon={faChartBar} className="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Domains',
        to: '/itsm/kms/itg/report-domains',
        icon: <FontAwesomeIcon icon={faChartBar} className="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Applications',
        to: '/itsm/kms/itg/report-applications',
        icon: <FontAwesomeIcon icon={faChartBar} className="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'SSL Certificates',
        to: '/itsm/kms/itg/report-ssl-certificates',
        icon: <FontAwesomeIcon icon={faChartBar} className="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Computers Warranties',
        to: '/itsm/kms/itg/report-computers-warranties',
        icon: <FontAwesomeIcon icon={faChartBar} className="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Other Warranties',
        to: '/itsm/kms/itg/report-equipment-warranties',
        icon: <FontAwesomeIcon icon={faChartBar} className="nav-icon" />,
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'RMM [VSA] - Remote Management',
    icon: <FontAwesomeIcon icon={faPlusCircle} className="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'VSA [RMM tool]',
    section: 'RMM [VSA] - Remote Management',
    to: '/itsm/rmm/vsa',
    icon: <FontAwesomeIcon icon={faExternalLinkSquareAlt} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Organizations',
        to: '/itsm/rmm/vsa/list-organizations',
      },
      {
        component: CNavItem,
        name: 'Agents',
        to: '/itsm/rmm/vsa/list-agents',
      },
      {
        component: CNavItem,
        name: 'Licenses',
        to: '/itsm/rmm/vsa/list-licenses',
      },
      {
        component: CNavItem,
        name: 'Policies',
        to: '/itsm/rmm/vsa/list-policies',
      },
      {
        component: CNavItem,
        name: 'Rpt - All Organizations.NamePsaMismatch.DuplicateAlias.NoOrgType',
        to: '/itsm/rmm/vsa/report-organizations-issues',
        icon: <FontAwesomeIcon icon={faChartBar} className="nav-icon" />,
      },
      // capture 'no OrgType' or 'OrgType does not match ISM' or 'Org missing'
      {
        component: CNavItem,
        name: 'Rpt - Computers.HostVsMachineName.OrgMismatch.DuplicateSN.DuplicateName.NoWarrantyInfo.NoAuditRun.ActiveAlerts.PolicyNoRun.SMNoRun',
        to: '/itsm/rmm/vsa/report-computers-remediations',
        icon: <FontAwesomeIcon icon={faChartBar} className="nav-icon" />,
      },
      // capture 'no OrgType', 'no serialnumber', 'no ComputerType', etc.
      {
        component: CNavItem,
        name: 'Rpt - Servers.NameFormat.OrgMismatch.DuplicateSN.DuplicateName.NoWarrantyInfo.NoAuditRun.ActiveAlerts.PolicyNoRun.SMNoRun',
        to: '/itsm/rmm/vsa/report-servers-remediations',
        icon: <FontAwesomeIcon icon={faChartBar} className="nav-icon" />,
      },
      // capture 'no OrgType', 'no serialnumber', 'no ComputerType', etc.
      {
        component: CNavItem,
        name: 'Audits Remediations',
        to: '/itsm/rmm/vsa/report-audits-remediations',
        icon: <FontAwesomeIcon icon={faChartBar} className="nav-icon" />,
      },
      // list of machines which are not scheduled for audit
      {
        component: CNavItem,
        name: 'Software Management R.',
        to: '/itsm/rmm/vsa/report-softwaremanagement-remediations',
        icon: <FontAwesomeIcon icon={faChartBar} className="nav-icon" />,
      },
      // find 'no profile for Scan/Deploy' or 'scan/deploy failed' or
    ],
  },
  {
    component: CNavGroup,
    name: 'VSA Actions',
    section: 'RMM [VSA] - Remote Management',
    to: '/itsm/rmm/vsa',
    icon: <FontAwesomeIcon icon={faChartBar} className="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Agent Install (Intune)',
        to: '/itsm/rmm/vsa/action-agent-install',
      },
      {
        component: CNavItem,
        name: 'Agent Uninstall (Offboarding)',
        to: '/itsm/rmm/vsa/action-agent-uninstall',
      },
      // run procedure to uninstall BEST, remove ITS Startup items, reset Windows Update settings, then uninstall Kaseya agent
      {
        component: CNavItem,
        name: 'Update Organizations',
        to: '/itsm/rmm/vsa/action-organizations-update',
      },
      // should add firstrun for new 'Support Customer' applications
      {
        component: CNavItem,
        name: 'Run Audits',
        to: '/itsm/rmm/vsa/action-audits-run',
      },
      // needs selectors for Latest Audit, System Audit and Baseline Audit
      {
        component: CNavItem,
        name: 'Add/Remove Monitoring',
        to: '/itsm/rmm/vsa/action-monitoring-addremove',
      },
      {
        component: CNavItem,
        name: 'Add/Remove Policy',
        to: '/itsm/rmm/vsa/action-policy-addremove',
      },
      {
        component: CNavItem,
        name: 'Reapply Policies',
        to: '/itsm/rmm/vsa/action-policy-reapply',
      },
      // clear Overrides, then Reapply Policies to selected machine(s)
      {
        component: CNavItem,
        name: 'Software Manangement Scan',
        to: '/itsm/rmm/vsa/action-softwaremanagement-scan',
      },
      {
        component: CNavItem,
        name: 'Software Manangement Deploy',
        to: '/itsm/rmm/vsa/action-softwaremanagement-deploy',
      },
      // include options for restart/pause/ask
    ],
  },
]

export default _nav
