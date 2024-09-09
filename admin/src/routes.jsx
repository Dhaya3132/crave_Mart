import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Order from './pages/Order/Order';

const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children:[
            {
                path:'/add',
                element:<Add />
            },{
                path:'/list',
                element:<List />
            },{
                path:'/orders',
                element:<Order />
            }
        ]
    },
])
export default router;