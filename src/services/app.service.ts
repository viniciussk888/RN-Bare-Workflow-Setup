import HttpService from './http.service';

export default class AppService {
  api: any;
  constructor(props:any) {
    this.api = new HttpService(props);
  }

  testPost = (payload: Object, success: any, errorCallback: any) => {
    this.api
      .post('testPost/', payload)
      .then((response: any) => success(response))
      .catch((error: any) => errorCallback(error));
  };
  testGet = (payload: any, success: any, errorCallback:any) => {
    this.api
      .get('get', payload)
      .then((response: any) => success(response))
      .catch((error: any) => errorCallback(error));
  };
}
