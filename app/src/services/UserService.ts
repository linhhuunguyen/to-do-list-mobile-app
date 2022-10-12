import {LoginParamType, RegisterParamType} from '../types/authen';
import {API} from './api';

export const register = async (param: RegisterParamType) => {
  console.log({param});

  return await API.post('/register', param);
};

export const login = (param: LoginParamType): Promise<any> =>
  API.post('/login', param);
