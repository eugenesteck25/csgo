import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Visualiserpage from './pages/Visualiserpage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StackedList from './pages/StackedList';
import QueueList from './pages/QueueList';
import BST from './pages/BST';
import AVLTree from './pages/AVLTree';
import Sorting from './pages/Sorting';
import BinarySearch from './pages/BinarySearch';
import LinearSearch from './pages/LinearSearch';



const router = createBrowserRouter([
  {
    path: "csgo",
    element: <App />,
  },
  {
    path: "Visualiser",
    element: <Visualiserpage />,
  },
  {
    path: "Sorting",
    element: <Sorting />
  },
  {
    path: "StackedList",
    element: <StackedList />
  },
  {
    path: "QueueList",
    element: <QueueList />
  },
  {
    path: "BST",
    element: <BST />
  },
  {
    path: "AVLTree",
    element: <AVLTree />
  },
  {
    path: "BinarySearch",
    element: <BinarySearch />
  },
  {
    path: "LinearSearch",
    element: <LinearSearch />
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />

);


