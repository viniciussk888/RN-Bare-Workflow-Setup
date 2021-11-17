import axios from 'axios';
;
import {environmentObj} from '../global/constants/environment';

export default class HttpService {
  service: any;
  constructor(props:any) {
    let service = axios.create();
    // Global axios defaults
    service.defaults.baseURL =
    environmentObj.baseUrl[environmentObj.currentEnvironment].urlApi;
    service.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded';

    service.interceptors.response.use(this.handleSuccess, this.handleError);

    this.service = service;
    //this.props = props;
  }


  handleSuccess(response: Object) {
    return response;
  }

  handleError = (error: Object) => {
    return Promise.reject(error);
  };


  get(path: string, payload: Object) {
    return this.service.get(path, payload);
  }

  put(path: string, payload: Object) {
    return this.service.put(path, payload);
  }

  patch(path: string, payload: Object) {
    return this.service.patch(path, payload);
  }

  post(path: string, payload: Object) {
    return this.service.post(path, payload);
  }
}
