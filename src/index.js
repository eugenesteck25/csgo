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
import Sorting from './pages/Sorting';
import BinarySearch from './pages/BinarySearch';
import LinearSearch from './pages/LinearSearch';
import CodeCompiler from './pages/CodeCompiler';
import MergeSort from './pages/MergeSort';
import QuickSort from './pages/QuickSort';
import BubbleSort from './pages/BubbleSort';
import InsertionSort from './pages/InsertionSort';
import SelectionSort from './pages/SelectionSort';




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
    path: "BinarySearch",
    element: <BinarySearch />
  },
  {
    path: "LinearSearch",
    element: <LinearSearch />
  },
  {
    path: "MergeSort",
    element: <MergeSort />
  },
  {
    path: "BubbleSort",
    element: <BubbleSort />
  },
  {
    path: "InsertionSort",
    element: <InsertionSort />
  },
  {
    path: "SelectionSort",
    element: <SelectionSort />
  },
  {
    path: "QuickSort",
    element: <QuickSort />
  },
  {
    path: "Compiler",
    element: <CodeCompiler />
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />

);


