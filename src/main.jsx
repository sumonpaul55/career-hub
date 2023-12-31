import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import PageNotFound from './components/PageNotFound';
import Home from './components/home/Home';
import Jobs from './components/jobs/Jobs';
import AppliedJobs from './components/appliedJobs/AppliedJobs';
import Statistics from './components/statistics/Statistics';
import Blog from './components/blog/Blog';
import JobDetail from './components/jobDetail/JobDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>
      },
      {
        path: "/applied-jobs",
        loader: () => fetch("../public/jobs.json"),
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/job-detail/:id",
        loader: () => fetch("../public/jobs.json"),
        element: <JobDetail></JobDetail>,
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
