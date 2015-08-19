$(document).ready(function(){

  $(".get_weather").click(function(){
    weatherInfo();
  });

  function showWeather(info) {
    // ("City: " + info.city.name);
    $(".weather").text(info.weather[0].description);
  };

  function weatherInfo() {
  $.getJSON("http://api.openweathermap.org/data/2.5/forecast/weather?id=524901&APPID={0104110a44375e2dda55ca11b2fb9353}", function(result){
    showWeather(result);
  })
  };


});