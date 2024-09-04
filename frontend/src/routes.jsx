import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from './App';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/Placeorder/PlaceOrder';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/placeOrder',
                element: <PlaceOrder />
            }
        ]
}
])

export default router;