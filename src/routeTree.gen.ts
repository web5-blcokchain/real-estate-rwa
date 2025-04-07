/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AppImport } from './routes/_app'

// Create Virtual Routes

const AppIndexLazyImport = createFileRoute('/_app/')()
const AppPropertiesIndexLazyImport = createFileRoute('/_app/properties/')()
const AppProfileIndexLazyImport = createFileRoute('/_app/profile/')()
const AppInvestmentIndexLazyImport = createFileRoute('/_app/investment/')()
const AppHomeIndexLazyImport = createFileRoute('/_app/home/')()
const AppAboutIndexLazyImport = createFileRoute('/_app/about/')()
const AppPropertiesPaymentIndexLazyImport = createFileRoute(
  '/_app/properties/payment/',
)()
const AppPropertiesInstitutionalIndexLazyImport = createFileRoute(
  '/_app/properties/institutional/',
)()
const AppPropertiesDistributionIndexLazyImport = createFileRoute(
  '/_app/properties/distribution/',
)()
const AppPropertiesDetailIndexLazyImport = createFileRoute(
  '/_app/properties/detail/',
)()
const AppAccountCreateIndexLazyImport = createFileRoute(
  '/_app/account/create/',
)()
const AppAccountCollectionsIndexLazyImport = createFileRoute(
  '/_app/account/collections/',
)()
const AppPropertiesDistributionResultLazyImport = createFileRoute(
  '/_app/properties/distribution/result',
)()

// Create/Update Routes

const AppRoute = AppImport.update({
  id: '/_app',
  getParentRoute: () => rootRoute,
} as any)

const AppIndexLazyRoute = AppIndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AppRoute,
} as any).lazy(() => import('./routes/_app/index.lazy').then((d) => d.Route))

const AppPropertiesIndexLazyRoute = AppPropertiesIndexLazyImport.update({
  id: '/properties/',
  path: '/properties/',
  getParentRoute: () => AppRoute,
} as any).lazy(() =>
  import('./routes/_app/properties/index.lazy').then((d) => d.Route),
)

const AppProfileIndexLazyRoute = AppProfileIndexLazyImport.update({
  id: '/profile/',
  path: '/profile/',
  getParentRoute: () => AppRoute,
} as any).lazy(() =>
  import('./routes/_app/profile/index.lazy').then((d) => d.Route),
)

const AppInvestmentIndexLazyRoute = AppInvestmentIndexLazyImport.update({
  id: '/investment/',
  path: '/investment/',
  getParentRoute: () => AppRoute,
} as any).lazy(() =>
  import('./routes/_app/investment/index.lazy').then((d) => d.Route),
)

const AppHomeIndexLazyRoute = AppHomeIndexLazyImport.update({
  id: '/home/',
  path: '/home/',
  getParentRoute: () => AppRoute,
} as any).lazy(() =>
  import('./routes/_app/home/index.lazy').then((d) => d.Route),
)

const AppAboutIndexLazyRoute = AppAboutIndexLazyImport.update({
  id: '/about/',
  path: '/about/',
  getParentRoute: () => AppRoute,
} as any).lazy(() =>
  import('./routes/_app/about/index.lazy').then((d) => d.Route),
)

const AppPropertiesPaymentIndexLazyRoute =
  AppPropertiesPaymentIndexLazyImport.update({
    id: '/properties/payment/',
    path: '/properties/payment/',
    getParentRoute: () => AppRoute,
  } as any).lazy(() =>
    import('./routes/_app/properties/payment/index.lazy').then((d) => d.Route),
  )

const AppPropertiesInstitutionalIndexLazyRoute =
  AppPropertiesInstitutionalIndexLazyImport.update({
    id: '/properties/institutional/',
    path: '/properties/institutional/',
    getParentRoute: () => AppRoute,
  } as any).lazy(() =>
    import('./routes/_app/properties/institutional/index.lazy').then(
      (d) => d.Route,
    ),
  )

const AppPropertiesDistributionIndexLazyRoute =
  AppPropertiesDistributionIndexLazyImport.update({
    id: '/properties/distribution/',
    path: '/properties/distribution/',
    getParentRoute: () => AppRoute,
  } as any).lazy(() =>
    import('./routes/_app/properties/distribution/index.lazy').then(
      (d) => d.Route,
    ),
  )

const AppPropertiesDetailIndexLazyRoute =
  AppPropertiesDetailIndexLazyImport.update({
    id: '/properties/detail/',
    path: '/properties/detail/',
    getParentRoute: () => AppRoute,
  } as any).lazy(() =>
    import('./routes/_app/properties/detail/index.lazy').then((d) => d.Route),
  )

const AppAccountCreateIndexLazyRoute = AppAccountCreateIndexLazyImport.update({
  id: '/account/create/',
  path: '/account/create/',
  getParentRoute: () => AppRoute,
} as any).lazy(() =>
  import('./routes/_app/account/create/index.lazy').then((d) => d.Route),
)

const AppAccountCollectionsIndexLazyRoute =
  AppAccountCollectionsIndexLazyImport.update({
    id: '/account/collections/',
    path: '/account/collections/',
    getParentRoute: () => AppRoute,
  } as any).lazy(() =>
    import('./routes/_app/account/collections/index.lazy').then((d) => d.Route),
  )

const AppPropertiesDistributionResultLazyRoute =
  AppPropertiesDistributionResultLazyImport.update({
    id: '/properties/distribution/result',
    path: '/properties/distribution/result',
    getParentRoute: () => AppRoute,
  } as any).lazy(() =>
    import('./routes/_app/properties/distribution/result.lazy').then(
      (d) => d.Route,
    ),
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_app': {
      id: '/_app'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AppImport
      parentRoute: typeof rootRoute
    }
    '/_app/': {
      id: '/_app/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AppIndexLazyImport
      parentRoute: typeof AppImport
    }
    '/_app/about/': {
      id: '/_app/about/'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AppAboutIndexLazyImport
      parentRoute: typeof AppImport
    }
    '/_app/home/': {
      id: '/_app/home/'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof AppHomeIndexLazyImport
      parentRoute: typeof AppImport
    }
    '/_app/investment/': {
      id: '/_app/investment/'
      path: '/investment'
      fullPath: '/investment'
      preLoaderRoute: typeof AppInvestmentIndexLazyImport
      parentRoute: typeof AppImport
    }
    '/_app/profile/': {
      id: '/_app/profile/'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof AppProfileIndexLazyImport
      parentRoute: typeof AppImport
    }
    '/_app/properties/': {
      id: '/_app/properties/'
      path: '/properties'
      fullPath: '/properties'
      preLoaderRoute: typeof AppPropertiesIndexLazyImport
      parentRoute: typeof AppImport
    }
    '/_app/properties/distribution/result': {
      id: '/_app/properties/distribution/result'
      path: '/properties/distribution/result'
      fullPath: '/properties/distribution/result'
      preLoaderRoute: typeof AppPropertiesDistributionResultLazyImport
      parentRoute: typeof AppImport
    }
    '/_app/account/collections/': {
      id: '/_app/account/collections/'
      path: '/account/collections'
      fullPath: '/account/collections'
      preLoaderRoute: typeof AppAccountCollectionsIndexLazyImport
      parentRoute: typeof AppImport
    }
    '/_app/account/create/': {
      id: '/_app/account/create/'
      path: '/account/create'
      fullPath: '/account/create'
      preLoaderRoute: typeof AppAccountCreateIndexLazyImport
      parentRoute: typeof AppImport
    }
    '/_app/properties/detail/': {
      id: '/_app/properties/detail/'
      path: '/properties/detail'
      fullPath: '/properties/detail'
      preLoaderRoute: typeof AppPropertiesDetailIndexLazyImport
      parentRoute: typeof AppImport
    }
    '/_app/properties/distribution/': {
      id: '/_app/properties/distribution/'
      path: '/properties/distribution'
      fullPath: '/properties/distribution'
      preLoaderRoute: typeof AppPropertiesDistributionIndexLazyImport
      parentRoute: typeof AppImport
    }
    '/_app/properties/institutional/': {
      id: '/_app/properties/institutional/'
      path: '/properties/institutional'
      fullPath: '/properties/institutional'
      preLoaderRoute: typeof AppPropertiesInstitutionalIndexLazyImport
      parentRoute: typeof AppImport
    }
    '/_app/properties/payment/': {
      id: '/_app/properties/payment/'
      path: '/properties/payment'
      fullPath: '/properties/payment'
      preLoaderRoute: typeof AppPropertiesPaymentIndexLazyImport
      parentRoute: typeof AppImport
    }
  }
}

// Create and export the route tree

interface AppRouteChildren {
  AppIndexLazyRoute: typeof AppIndexLazyRoute
  AppAboutIndexLazyRoute: typeof AppAboutIndexLazyRoute
  AppHomeIndexLazyRoute: typeof AppHomeIndexLazyRoute
  AppInvestmentIndexLazyRoute: typeof AppInvestmentIndexLazyRoute
  AppProfileIndexLazyRoute: typeof AppProfileIndexLazyRoute
  AppPropertiesIndexLazyRoute: typeof AppPropertiesIndexLazyRoute
  AppPropertiesDistributionResultLazyRoute: typeof AppPropertiesDistributionResultLazyRoute
  AppAccountCollectionsIndexLazyRoute: typeof AppAccountCollectionsIndexLazyRoute
  AppAccountCreateIndexLazyRoute: typeof AppAccountCreateIndexLazyRoute
  AppPropertiesDetailIndexLazyRoute: typeof AppPropertiesDetailIndexLazyRoute
  AppPropertiesDistributionIndexLazyRoute: typeof AppPropertiesDistributionIndexLazyRoute
  AppPropertiesInstitutionalIndexLazyRoute: typeof AppPropertiesInstitutionalIndexLazyRoute
  AppPropertiesPaymentIndexLazyRoute: typeof AppPropertiesPaymentIndexLazyRoute
}

const AppRouteChildren: AppRouteChildren = {
  AppIndexLazyRoute: AppIndexLazyRoute,
  AppAboutIndexLazyRoute: AppAboutIndexLazyRoute,
  AppHomeIndexLazyRoute: AppHomeIndexLazyRoute,
  AppInvestmentIndexLazyRoute: AppInvestmentIndexLazyRoute,
  AppProfileIndexLazyRoute: AppProfileIndexLazyRoute,
  AppPropertiesIndexLazyRoute: AppPropertiesIndexLazyRoute,
  AppPropertiesDistributionResultLazyRoute:
    AppPropertiesDistributionResultLazyRoute,
  AppAccountCollectionsIndexLazyRoute: AppAccountCollectionsIndexLazyRoute,
  AppAccountCreateIndexLazyRoute: AppAccountCreateIndexLazyRoute,
  AppPropertiesDetailIndexLazyRoute: AppPropertiesDetailIndexLazyRoute,
  AppPropertiesDistributionIndexLazyRoute:
    AppPropertiesDistributionIndexLazyRoute,
  AppPropertiesInstitutionalIndexLazyRoute:
    AppPropertiesInstitutionalIndexLazyRoute,
  AppPropertiesPaymentIndexLazyRoute: AppPropertiesPaymentIndexLazyRoute,
}

const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof AppRouteWithChildren
  '/': typeof AppIndexLazyRoute
  '/about': typeof AppAboutIndexLazyRoute
  '/home': typeof AppHomeIndexLazyRoute
  '/investment': typeof AppInvestmentIndexLazyRoute
  '/profile': typeof AppProfileIndexLazyRoute
  '/properties': typeof AppPropertiesIndexLazyRoute
  '/properties/distribution/result': typeof AppPropertiesDistributionResultLazyRoute
  '/account/collections': typeof AppAccountCollectionsIndexLazyRoute
  '/account/create': typeof AppAccountCreateIndexLazyRoute
  '/properties/detail': typeof AppPropertiesDetailIndexLazyRoute
  '/properties/distribution': typeof AppPropertiesDistributionIndexLazyRoute
  '/properties/institutional': typeof AppPropertiesInstitutionalIndexLazyRoute
  '/properties/payment': typeof AppPropertiesPaymentIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof AppIndexLazyRoute
  '/about': typeof AppAboutIndexLazyRoute
  '/home': typeof AppHomeIndexLazyRoute
  '/investment': typeof AppInvestmentIndexLazyRoute
  '/profile': typeof AppProfileIndexLazyRoute
  '/properties': typeof AppPropertiesIndexLazyRoute
  '/properties/distribution/result': typeof AppPropertiesDistributionResultLazyRoute
  '/account/collections': typeof AppAccountCollectionsIndexLazyRoute
  '/account/create': typeof AppAccountCreateIndexLazyRoute
  '/properties/detail': typeof AppPropertiesDetailIndexLazyRoute
  '/properties/distribution': typeof AppPropertiesDistributionIndexLazyRoute
  '/properties/institutional': typeof AppPropertiesInstitutionalIndexLazyRoute
  '/properties/payment': typeof AppPropertiesPaymentIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_app': typeof AppRouteWithChildren
  '/_app/': typeof AppIndexLazyRoute
  '/_app/about/': typeof AppAboutIndexLazyRoute
  '/_app/home/': typeof AppHomeIndexLazyRoute
  '/_app/investment/': typeof AppInvestmentIndexLazyRoute
  '/_app/profile/': typeof AppProfileIndexLazyRoute
  '/_app/properties/': typeof AppPropertiesIndexLazyRoute
  '/_app/properties/distribution/result': typeof AppPropertiesDistributionResultLazyRoute
  '/_app/account/collections/': typeof AppAccountCollectionsIndexLazyRoute
  '/_app/account/create/': typeof AppAccountCreateIndexLazyRoute
  '/_app/properties/detail/': typeof AppPropertiesDetailIndexLazyRoute
  '/_app/properties/distribution/': typeof AppPropertiesDistributionIndexLazyRoute
  '/_app/properties/institutional/': typeof AppPropertiesInstitutionalIndexLazyRoute
  '/_app/properties/payment/': typeof AppPropertiesPaymentIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/'
    | '/about'
    | '/home'
    | '/investment'
    | '/profile'
    | '/properties'
    | '/properties/distribution/result'
    | '/account/collections'
    | '/account/create'
    | '/properties/detail'
    | '/properties/distribution'
    | '/properties/institutional'
    | '/properties/payment'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/home'
    | '/investment'
    | '/profile'
    | '/properties'
    | '/properties/distribution/result'
    | '/account/collections'
    | '/account/create'
    | '/properties/detail'
    | '/properties/distribution'
    | '/properties/institutional'
    | '/properties/payment'
  id:
    | '__root__'
    | '/_app'
    | '/_app/'
    | '/_app/about/'
    | '/_app/home/'
    | '/_app/investment/'
    | '/_app/profile/'
    | '/_app/properties/'
    | '/_app/properties/distribution/result'
    | '/_app/account/collections/'
    | '/_app/account/create/'
    | '/_app/properties/detail/'
    | '/_app/properties/distribution/'
    | '/_app/properties/institutional/'
    | '/_app/properties/payment/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AppRoute: typeof AppRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  AppRoute: AppRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_app"
      ]
    },
    "/_app": {
      "filePath": "_app.tsx",
      "children": [
        "/_app/",
        "/_app/about/",
        "/_app/home/",
        "/_app/investment/",
        "/_app/profile/",
        "/_app/properties/",
        "/_app/properties/distribution/result",
        "/_app/account/collections/",
        "/_app/account/create/",
        "/_app/properties/detail/",
        "/_app/properties/distribution/",
        "/_app/properties/institutional/",
        "/_app/properties/payment/"
      ]
    },
    "/_app/": {
      "filePath": "_app/index.lazy.tsx",
      "parent": "/_app"
    },
    "/_app/about/": {
      "filePath": "_app/about/index.lazy.tsx",
      "parent": "/_app"
    },
    "/_app/home/": {
      "filePath": "_app/home/index.lazy.tsx",
      "parent": "/_app"
    },
    "/_app/investment/": {
      "filePath": "_app/investment/index.lazy.tsx",
      "parent": "/_app"
    },
    "/_app/profile/": {
      "filePath": "_app/profile/index.lazy.tsx",
      "parent": "/_app"
    },
    "/_app/properties/": {
      "filePath": "_app/properties/index.lazy.tsx",
      "parent": "/_app"
    },
    "/_app/properties/distribution/result": {
      "filePath": "_app/properties/distribution/result.lazy.tsx",
      "parent": "/_app"
    },
    "/_app/account/collections/": {
      "filePath": "_app/account/collections/index.lazy.tsx",
      "parent": "/_app"
    },
    "/_app/account/create/": {
      "filePath": "_app/account/create/index.lazy.tsx",
      "parent": "/_app"
    },
    "/_app/properties/detail/": {
      "filePath": "_app/properties/detail/index.lazy.tsx",
      "parent": "/_app"
    },
    "/_app/properties/distribution/": {
      "filePath": "_app/properties/distribution/index.lazy.tsx",
      "parent": "/_app"
    },
    "/_app/properties/institutional/": {
      "filePath": "_app/properties/institutional/index.lazy.tsx",
      "parent": "/_app"
    },
    "/_app/properties/payment/": {
      "filePath": "_app/properties/payment/index.lazy.tsx",
      "parent": "/_app"
    }
  }
}
ROUTE_MANIFEST_END */
