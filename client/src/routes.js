import {ADMIN_ROUTE,
        BACKET_ROUTE,
        SHOP_ROUTE,
        LOGIN_ROUTE,
        REGISTRATION_ROUTE,
        PRODUCT_ROUTE} from './utils/constants';
import Admin from './component/AdminPanel';
import Backet from './component/Backet';
import Shop from './component/Shop';
import Auth from './component/Auth';
import ProductPage from './component/ProductPage'

export const authRoutes = [
    {
      path: ADMIN_ROUTE,
      Component: Admin
    },
    {
      path: BACKET_ROUTE,
      Component: Backet
    }
]

export const publicRoutes = [
    {
      path: SHOP_ROUTE,
      Component: Shop
    },
    {
      path: LOGIN_ROUTE,
      Component: Auth
    },
    {
      path: REGISTRATION_ROUTE,
      Component: Auth
    },
    {
      path: PRODUCT_ROUTE + '/:id',
      Component: ProductPage
    }
]
