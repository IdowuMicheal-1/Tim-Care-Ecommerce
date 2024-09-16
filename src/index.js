import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './utils/CartProvider';
import { ModalProvider } from './utils/CartModal';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Community from './pages/Community';
import Contact from './pages/Contact';
import Main from './pages/Main';
import SearchProvider from './utils/SearchProvider';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:'/',
        element:<Main />
      },
      {
        path:'/community',
        element:<Community />
      },
      {
        path:'/contact',
        element:<Contact />
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <SearchProvider>
    <CartProvider>
      <ModalProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </ModalProvider>
    </CartProvider>
    </SearchProvider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
