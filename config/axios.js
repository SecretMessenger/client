import axios from "axios";

const instance = axios.create({
  baseURL: "http://secretmessenger-server.angelavanessa.com/"
});

export default instance;
