thermostat = new Thermostat();

TempColour = function() {
  temperature.style.color = thermostat.energyUsage();
}

displayTemp = function() {
  // temperature.innerHTML = thermostat.showTemp()+"&#8451";
  temperature.innerHTML = thermostat.showTemp();
}

$(document).ready(function() {
  $("#temperature").show(function() {
    getTemperature();
    displayTemp();
    TempColour();
  })
  $("#increase").click(function() {
    thermostat.increaseTemp();
    displayTemp();
    postTemperature();
    TempColour();
  })
  $("#decrease").click(function() {
    thermostat.decreaseTemp();
    displayTemp();
    TempColour();
  })
  $("#reset").click(function() {
    thermostat.resetTemp();
    displayTemp();
    TempColour();
  })
  $('#powerSave').click(function() {
    powerSaveChange();
  })

  function powerSaveChange() {
    if ($("#powerSave").is(':checked') ) {
      thermostat.powerSaveOn();
      displayTemp();
    } else {
      thermostat.powerSaveOff();
    }
  }
  function postTemperature() {
    var current_temperature = temperature.innerHTML;

    $.ajax({
      type: 'POST',
      url: 'http://localhost:9292/',
      data: current_temperature,
      // dataType: 'json'
    })
  }
  function getTemperature() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:9292/',
      datatype:'json' ,
      success: function(result){
        console.log(result)
        $('#temperature').html(result);
        //thermostat.temperature = result
      },
    })
  }
});
