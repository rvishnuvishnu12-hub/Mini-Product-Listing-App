import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './home/Home.jsx';
import Shop from './Shop/Shop.jsx';



import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import './assets/css/icofont.min.css';
import './assets/css/animate.css';
import './assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './blog/Blog.jsx';
import SingleProduct from './Shop/SingleProduct.jsx';
import Register from './home/Register.jsx';
import Login from './home/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "blog", element: <Blog/> },
      { path: "shop", element: <Shop /> },
      { path: "shop/:id", element: <SingleProduct/>}
      ,{ path: "signup", element: <Register/> }
      ,{ path: "login", element: <Login/> }

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
