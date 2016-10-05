const http = require('http');
const https = require('https');

function getWeatherByCityID(cityID){

  let url='https://api.heweather.com/x3/weather?cityid='+cityID+'&key=881fb039c6954d73a86182bd6229f301';

  return new Promise(function(resolve,reject){

    https.get(url, function(res){
      var body = '';

      res.on('data', function(chunk){
          body += chunk;
      });

      res.on('end', function(){
          var response = JSON.parse(body);
          resolve(response);
      });
    }).on('error', function(e){
        reject(e);
    });

  });

}

module.exports={
    getWeatherByCityID:getWeatherByCityID
};
