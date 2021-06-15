import { useNavigate } from 'react-router-dom';
import RootContext from 'src/context/RootContext';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@material-ui/core';

const Login = () => {
  const navigate = useNavigate();
  const data = useContext(RootContext);
  return (
    <>
      <Helmet>
        <title>Login | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              login: '',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              login: Yup.string().max(255).required('Login is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={(values) => {
              const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
              };
              const sURL = 'http://__SERVER__:3001/api/login';
              fetch(sURL.replace('__SERVER__', window.location.hostname), requestOptions)
                .then((response) => response.json())
                .then((jsonData) => {
                  if (jsonData.result) {
                    data.isLogin = true;
                    data.objUser = jsonData.data;
                  } else {
                    data.isLogin = false;
                  }
                  navigate('/app/dashboard', { replace: true });
                })
                .catch((error) => {
                  alert(error.toString()); // eslint-disable-line no-alert
                });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in on the internal platform
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.login && errors.login)}
                  fullWidth
                  helperText={touched.login && errors.login}
                  label="Login ID"
                  margin="normal"
                  name="login"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.login}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;
