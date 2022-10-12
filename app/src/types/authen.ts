export type AuthContextType = {
  isLoading: boolean;
  userToken: any;
  login: () => void;
  logout: () => void;
  setUserToken: any;
};

export type RegisterParamType = {
  username: string;
  password: string;
};

export type LoginParamType = {
  username: string;
  password: string;
};
