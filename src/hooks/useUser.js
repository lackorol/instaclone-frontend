import { useQuery, useReactiveVar } from '@apollo/client';
import gql from 'graphql-tag';
import { isLoggedInVar, logUserOut } from '../screens/apollo';
import { useEffect } from 'react';

const ME_QUERY = gql`
  query me {
    me {
      username
      avatar
    }
  }
`;

function useUser() {
  const hasToken = useReactiveVar(isLoggedInVar);
  const { data, error } = useQuery(ME_QUERY, {
    skip: !hasToken
  });
  useEffect(() => {
    if (data?.me === null) {
      console.log(data, error);
      logUserOut();
    }
  }, [data]);
  return { data };
}

export default useUser;
