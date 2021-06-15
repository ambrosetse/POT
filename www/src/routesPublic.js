import { Navigate } from 'react-router-dom';
import MainLayout from 'src/components/MainLayout';
import DashboardLayout from 'src/components/DashboardLayout';
import Login from 'src/pages/Login';

const routesPublic = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '*', element: <Login /> }
    ]
  }
];

export default routesPublic;
