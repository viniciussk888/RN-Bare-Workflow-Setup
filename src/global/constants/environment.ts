/**
 * Configuração das rotas do APP para comunicação com a API
 */

const environmentObj = {
  currentEnvironment: 'DEV',
  baseUrl: {
    DEV: {
      urlApi: 'https://httpbin.org/',
    },
    HML: {
      urlApi: '',
    },
    PROD: {
      urlApi: '',
    },
  },
};

export {
  environmentObj,
}