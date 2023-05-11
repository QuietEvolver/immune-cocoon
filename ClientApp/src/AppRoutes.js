import { Counter } from "./components/Counter";
import { Create } from "./components/Create";
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
    path: '/create',
    element: <Create />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
