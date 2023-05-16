import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    requireAuth: true,
    element: <FetchData />
  },
  // {
  //   path: '/create',
  //   requireAuth: true,
  //   element: <Create />
  // },
  // {
  //   path: '/edit',
  //   requireAuth: true,
  //   element: <Edit />
  // },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
