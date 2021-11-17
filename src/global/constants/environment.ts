/**
 * Configuração das rotas do APP para comunicação com a API
 */

export const environmentObj = {
  currentEnvironment: "DEV",
  baseUrl: {
    DEV: {
      urlApi: "https://httpbin.org/",
    },
    HML: {
      urlApi: "",
    },
    PROD: {
      urlApi: "",
    },
  },
};
