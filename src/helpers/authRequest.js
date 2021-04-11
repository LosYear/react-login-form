const EMAIL = "test@test.ru";
const PASSWORD = "1";

const authRequest = (userEmail, userPassword) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(userEmail === EMAIL && userPassword === PASSWORD);
    }, 1000);
  });

export default authRequest;
