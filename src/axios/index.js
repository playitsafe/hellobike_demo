import JsonP from 'jsonp';

export default class Axios {
  static jsonp(url) {
    return new Promise((resolve, reject) => {
      JsonP(url,
            { param: 'callback' },
            (err, response) => {
              if (response.status === 'success') {
                resolve(response);
              } else {
                reject (response.message);
              }
            }
            )
    })
  }
}