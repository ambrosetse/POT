import MainLayout from 'src/components/MainLayout';
import Login from 'src/pages/Login';

const routesPublic = [
  {
    path: '*',
    element: <MainLayout />,
    children: [
      { path: '*', element: <Login /> }
    ]
  }
];

export default routesPublic;
