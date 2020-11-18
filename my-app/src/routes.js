import React from 'react';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },
    {
        path : '/about',
        exact : false,
        main : () => <About />
    },
    {
        path : '/install/grandservice',
        exact : false,
        main : () => <About />
    },
    {
        path : '/install/login',
        exact : false,
        main : () => <About />
    },
    {
        path : '/notfound',
        exact : false,
        main : () => <NotFound />
    }
   
];

export default routes;