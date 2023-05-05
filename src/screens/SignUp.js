import { faInstagram } from '@fortawesome/free-brands-svg-icons';
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
import { FatLink } from '../components/shared';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled(FatLink)`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      username
    }
  }
`;

function SignUp() {
  const history = useHistory();
  const onCompleted = (data) => {
    const {
      createAccount: { ok, error }
    } = data;
    if (!ok) {
      return;
    }
    history.push(routes.home);
  };
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted
  });
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    formState
  } = useForm({
    mode: 'onChange'
  });
  const onSubmitValid = (data) => {
    console.log(data);
    if (loading) {
      return false;
    }
    createAccount({
      variables: {
        ...data
      }
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
          <HeaderContainer>
            <FontAwesomeIcon icon={faInstagram} size="6x" />
            <Subtitle>
              Sign up to see photos and videos from your friends.
            </Subtitle>
          </HeaderContainer>
        </div>
        <form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
          <Input
            {...register('firstName', {
              required: 'First Name is required'
            })}
            type="text"
            name="firstName"
            placeholder="FirstName"
          />
          <Input
            {...register('lastName', {
              required: 'Last Name is required'
            })}
            type="text"
            name="lastName"
            placeholder="LastName"
          />
          <Input
            {...register('email', {
              required: 'Email is required'
            })}
            type="text"
            name="email"
            placeholder="Email"
          />
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
          <Button type="submit" value="Sign up" disabled={!formState.isValid} />
        </form>
        <Separator />
      </FormBox>
      <BottomBox
        cta="Don't have an account?"
        linkText="Sign up"
        link={routes.signUp}
      />
    </AuthLayout>
  );
}

export default SignUp;
