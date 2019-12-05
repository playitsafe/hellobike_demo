import JsonP from 'jsonp';
import axios from 'axios';
import { Modal } from 'antd';

export default class Axios {
  static jsonp(url) {
    return new Promise((resolve, reject) => {
      JsonP(url,
            { param: 'callback' },
            (err, response) => {
              if (response) {
                
                if (response.status === 'success') {
                  resolve(response);
                } else {
                  reject (response.message);
                }
              }
            })
    })
  }

  static ajax(options) {
    let baseUrl = 'https://www.fastmock.site/mock/699b6d4d132ed44d8fbac1d675104739/mockapi';
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'get',
        baseURL: baseUrl,
        timeout: 5000,
        //params: options.data.params
        params: (options.data && options.data.params) || ''
      }).then((response) => {
        if (response.status == '200') {
          let res = response.data;
          if (res.code == '0') {
            resolve(res);
          } else {
            Modal.info({
              title: 'Ooops',
              content: res.msg
            });
          }
        } else {
          reject(response.data);
        }
      });
    });
  }
}