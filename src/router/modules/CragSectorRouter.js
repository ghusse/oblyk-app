import CragSectorNewView from '@/views/cragSectors/actions/CragSectorNewView'
import CragSectorEditView from '@/views/cragSectors/actions/CragSectorEditView'
import CragSectorInfoView from '@/views/cragSectors/CragSectorInfoView'
import CragSectorView from '@/views/CragSectorView'
import CragSectorPhotosView from '@/views/cragSectors/CragSectorPhotosView'
import CragSectorMapView from '@/views/cragSectors/CragSectorMapView'
import CragRouteNewView from '@/views/cragRoutes/actions/CragRouteNewView'

export default [
  {
    path: '/crags/:cragId/:cragSlug/sectors/new',
    component: CragSectorNewView,
    meta: {
      requiresAuth: true,
      objectName: 'cragSector',
      showAvatar: false
    }
  },
  {
    path: '/crags/:cragId/:cragSlug/sectors/:cragSectorId/:cragSectorSlug/edit',
    component: CragSectorEditView,
    meta: {
      requiresAuth: true,
      objectName: 'cragSector',
      showAvatar: false
    }
  },
  {
    path: '/crags/:cragId/:cragSlug/sectors/:cragSectorId/:cragSectorSlug/routes/new',
    component: CragRouteNewView,
    meta: {
      requiresAuth: true,
      objectName: 'crag',
      showAvatar: false
    }
  },
  {
    path: '/crags/:cragId/:cragSlug/sectors/:cragSectorId/:cragSectorSlug',
    component: CragSectorView,
    children: [
      {
        path: 'infos',
        component: CragSectorInfoView,
        meta: {
          objectName: 'cragSector',
          showAvatar: false
        }
      },
      {
        path: 'photos',
        component: CragSectorPhotosView,
        meta: {
          objectName: 'crag',
          showAvatar: false
        }
      },
      {
        path: 'maps',
        component: CragSectorMapView,
        meta: {
          objectName: 'crag',
          showAvatar: false
        }
      }
    ]
  }
]