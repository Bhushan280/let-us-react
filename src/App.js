import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
// import About from './components/About';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import RestaurentMenu from './components/RestaurentMenu';
// import Grocery from './components/Grocery';

/***
 * Chunking
 * Code Spliting
 * Dynamic Bundling
 * Lazy Loading
 * on Demand Loading
 * Dymanic Import
 *
 */

const Grocery = lazy(() => import('./components/Grocery'));

const About = lazy(() => import('./components/About'));

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet /> {/* This renders child routes */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h1>Loding...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurentMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
