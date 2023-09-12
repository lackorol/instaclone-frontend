import {
  faFacebookSquare,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gql from 'graphql-tag';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from '../components/auth/Button';
import FormError from '../components/auth/FormError';
import Input from '../components/auth/Input';
import routes from '../routes';
import AuthLayout from '../components/auth/Container';
import Separator from '../components/auth/Separator';
import FormBox from '../components/auth/FormBox';
import BottomBox from '../components/auth/BottomBox';
import { useMutation } from '@apollo/client';
import { logUserIn } from './apollo';

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`;

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

const Login = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    formState,
    setError
  } = useForm({
    mode: 'onBlur'
  });
  const onCompleted = (data) => {
    const {
      login: { ok, error, token }
    } = data;
    if (!ok) {
      return setError('result', {
        message: error
      });
    }
    if (token) {
      logUserIn(token);
    }
  };

  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted
  });
  const onSubmitValid = (data) => {
    if (loading) return;

    const { username, password } = data;
    login({
      variables: { username, password }
    });
  };

  const onSubmitInvalid = (data) => {
    //console.log(data, "invalid");
  };

  console.log(errors);
  console.log(formState.isValid);
  return (
    <AuthLayout>
      <FormBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="6x" />
        </div>
        <form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
          <Input
            {...register('username', {
              required: 'Username is required',
              minLength: {
                value: 5,
                message: 'Username should be longer than 5 characters'
              }
            })}
            name="username"
            type="text"
            placeholder="Username"
            hasError={Boolean(errors?.username?.message)}
          />
          <FormError message={errors?.username?.message} />
          <Input
            {...register('password', {
              required: 'Password is required'
            })}
            name="password"
            type="password"
            placeholder="Password"
            hasError={Boolean(errors?.password?.message)}
          />
          <FormError message={errors?.password?.message} />
          <Button
            type="submit"
            value={loading ? 'Loading...' : 'Log in'}
            disabled={!formState.isValid || loading}
          />
        </form>
        <Separator />
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
      </FormBox>
      <BottomBox
        cta="Don't have an account?"
        linkText="Sign up"
        link={routes.home}
      />
    </AuthLayout>
  );
};

export default Login;
