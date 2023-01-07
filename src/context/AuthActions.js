export const LoginStart = (userCredentials) => ({
  type: "LOGIN-START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN-SUCCESS",
  payload: user
});

export const LoginFailure = (error) => ({
  type: "LOGIN-FAILURE",
  payload: error
});