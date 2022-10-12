function createEnum<T extends {[P in keyof T]: P}>(o: T) {
  return o;
}

export const ROUTE_KEY = createEnum({
  HomeScreen: 'HomeScreen',
  LoginScreen: 'LoginScreen',
  RegisterScreen: 'RegisterScreen',
});
