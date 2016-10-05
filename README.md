# heweather

### how to use it

> npm install --save-dev heweather

```
const weather = require('heweather');

const p = weather.getWeatherByCityID('cityID');

p.then((res)=>{
  // deal with the response;
},(err)=>{
  // deal with the error;
});
```
[cn cityID list](http://www.heweather.com/documents/cn-city-list);
