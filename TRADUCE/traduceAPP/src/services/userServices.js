import apiConfig from "./apiConfig";

const getLogin = async (email, password) => {
  const users = (await apiConfig().get("/users")).data;

  let user = users.filter((x) => x.email === email && x.password === password);

  if (user.length > 0) {
    return {
      esLogin: user !== null && user.length > 0,
      fullname: `${user[0].name} ${user[0].lastname}`,
    };
  }

  return;
};

export default {
  getLogin,
};