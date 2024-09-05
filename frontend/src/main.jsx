import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import store from './store/store';
import { Provider } from 'react-redux';
import './index.css';
import router from './routes'; 
import { RouterProvider } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoreContextProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StoreContextProvider>
  </StrictMode>
);

