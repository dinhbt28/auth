import React, { useEffect, useMemo, useReducer } from 'react';

import AuthService from '@services/auth';
import { reducer } from '@stores/reducer';
import { ActionTypes } from '@stores/constants';
import stateDefault, { State } from '@stores/state';
import { AuthContext } from '@contexts/AuthContext';

const AuthProvider = ({
  children,
}: {
  children: (data: State) => React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, stateDefault);

  const authContext = useMemo(
    () => ({
      signIn: async () => {
        try {
          await AuthService.shared.setCredentials('dummy-auth-token');
        } catch (e) {
          // Handle error
        }

        dispatch({ type: ActionTypes.SIGN_IN });
      },
      signOut: async () => {
        try {
          await AuthService.shared.removeCredentials();
        } catch (e) {
          // Handle error
        }

        dispatch({ type: ActionTypes.SIGN_OUT });
      },
      signUp: async () => {
        try {
          await AuthService.shared.setCredentials('dummy-auth-token');
        } catch (e) {
          // Handle error
        }

        dispatch({ type: ActionTypes.SIGN_IN });
      },
    }),
    []
  );

  useEffect(() => {
    const restoreToken = async () => {
      let userToken;

      try {
        userToken = await AuthService.shared.getCredentials();
      } catch (e) {
        // Handle error
      }

      dispatch({ type: ActionTypes.RESTORE_TOKEN, payload: !userToken });
    };

    restoreToken();
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      {children(state)}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
