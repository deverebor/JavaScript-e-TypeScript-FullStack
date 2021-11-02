// Structural typing

type VerifyUserFN = (user: User, sentValue: User) => boolean;

type User = {
  username: string;
  password: string;
};

export const VerifyUser: VerifyUserFN = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const DBUser = {
  username: "admin",
  password: "admin",
};

const sentUser = {
  username: "admin",
  password: "admin",
};

const loggedIn = VerifyUser(DBUser, sentUser);

console.log(loggedIn);
