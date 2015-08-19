$(document).ready(function(){

  $(".getWeather").click(function(){
    showCity();
   weatherInfo();
  });

  function showCity(){
    var city = $("#city").val();
    $(".city").text(city);
  };

  function showWeather(info) {
      $(".weather").text(info.list[0].weather[0].description);
  };

  function weatherInfo() {
    var city = $("#city").val();
    // $(".city").text(city);
    $.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q="+city+"&mode=json&units=metric&cnt=10",function(result){
            showWeather(result);
            });
        };


});
