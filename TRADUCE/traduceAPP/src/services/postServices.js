import apiConfig from "./apiConfig";

const getDataPost = async () => {
  const response = await apiConfig().get("/posts"); //30 segundos

  console.log("Se llamo al api");
  console.log(response);
  console.log(response.data);
};

const postDataPost = async () => {
  let newpost = {
    id: "3",
    title: "He creado este registro utilizando axios, desde una vista de Vusjs",
  };

  const response = await apiConfig().post(
    "/posts",
    newpost
  );

  console.log(response);
};

const putDataPost = async () => {
  let updatepost = {
    id: "3",
    title:
      "He actualizado este registro utilizando axios, desde una vista de Vuejs",
  };

  const response = await apiConfig().put(
    "/posts/3",
    updatepost
  );

  console.log(response);
};

export default {
    getDataPost,
    postDataPost,
    putDataPost
}