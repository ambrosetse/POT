import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import RootContext from 'src/context/RootContext';
import routes from 'src/routes';
import routesPublic from 'src/routesPublic';

const data = {
  isLogin: false,
  objUser: {},
};

const App = () => {
  const routing = useRoutes(routes);
  const routingPublic = useRoutes(routesPublic);

  return (
    <RootContext.Provider value={data}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        { data.isLogin ? routing : routingPublic}
      </ThemeProvider>
    </RootContext.Provider>
  );
};

export default App;
