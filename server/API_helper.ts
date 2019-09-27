const request = require('request');

module.exports = {
  /*
   ** This method returns a promise
   ** which gets resolved or rejected based
   ** on the result from the API
   */
  make_API_call: function(url: any) {
    return new Promise((resolve, reject) => {
      request(url, { json: true }, (err: any, res: any, body: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(body);
        }
      });
    });
  }
};
