import React from 'react'
const CIPPSettings = React.lazy(() => import('src/views/cipp/CIPPSettings'))
const Setup = React.lazy(() => import('src/views/cipp/Setup'))
const ApplyStandard = React.lazy(() => import('src/views/tenant/standards/ApplyStandard'))
const GDAPStatus = React.lazy(() => import('src/views/tenant/administration/ListGDAPQueue'))
const GDAP = React.lazy(() => import('src/views/tenant/administration/GDAPWizard'))
const appapproval = React.lazy(() => import('src/views/cipp/AppApproval'))
const PsaOrgs = React.lazy(() => import('src/views/psa/ism/ListOrganizations'))
// will add restricted ITS items here also.
// will restrict access to new ITS items here - before moving to the routes.js general area.

const adminRoutes = [
  { path: '/cipp', name: 'CIPP' },
  { path: '/cipp/cipp', name: 'CIPP' },
  { path: '/cipp/settings', name: 'Settings', component: CIPPSettings },
  { path: '/cipp/setup', name: 'Setup', component: Setup },
  { path: '/tenant/administration/gdap', name: 'GDAP Wizard', component: GDAP },
  { path: '/tenant/administration/appapproval', name: 'App Approval', component: appapproval },
  { path: '/tenant/administration/gdap-status', name: 'GDAP Status', component: GDAPStatus },
  { path: '/tenant/standards/apply-standard', name: 'Apply Standard', component: ApplyStandard },
  { path: '/psa/ism/organizations/list-organizations', name: 'List Organizations', component: PsaOrgs },
  { path: '/psa/ism/endpoints/list-computers', name: 'List Computers', component: PsaComputers },
//  { path: '/psa/ism/endpoints/list-servers', name: 'List Servers', component: PsaServers },
//  { path: '/psa/ism/endpoints/list-byods', name: 'List BYODs', component: PsaByods },
]

export default adminRoutes
