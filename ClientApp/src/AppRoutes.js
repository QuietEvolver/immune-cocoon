import { Counter } from "./components/Counter";
import { Create } from "./components/Create";
import { Edit } from "./components/Edit";
import { Delete } from "./components/Delete";
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
  },
  {
    path: '/edit',
    element: <Edit />
  }
];

export default AppRoutes;
