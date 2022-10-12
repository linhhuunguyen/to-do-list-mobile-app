import React, {createContext, useState} from 'react';
import {AuthContextType} from '../types/authen';

const initialAuthContext: AuthContextType = {
  isLoading: true,
  userToken: null,
  login: () => {},
  logout: () => {},
  setUserToken: () => {},
};

export const AuthContext = createContext<AuthContextType>(initialAuthContext);

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({children}: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userToken, setUserToken] = useState<string | null>(null);

  const login = () => {
    setUserToken('abddddddd');
    setIsLoading(false);
  };

  const logout = () => {
    setUserToken(null);
    setIsLoading(false);
  };

  const authContextData = {
    userToken,
    isLoading,
    login,
    logout,
    setUserToken,
  };

  console.log({userToken});

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
