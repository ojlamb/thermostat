thermostat = new Thermostat();

TempColour = function() {
  temperature.style.color = thermostat.energyUsage();
}

displayTemp = function() {
  temperature.innerHTML = thermostat.showTemp();
}

$(document).ready(function() {
  $("#temperature").show(function() {
    displayTemp();
    TempColour();
  })
  $("#increase").click(function() {
    thermostat.increaseTemp();
    displayTemp();
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
  $('#power_save').click(function() {
    powerSaveChange();
  })

  // $('#weatherform').submit(function() {
  //   displayCity();
  //   displayWeather();
  // })

  // $('#city').show(function() {
    
  // })


  function powerSaveChange() {
    if ($("#power_save").is(':checked') ) {
      thermostat.powerSaveOn();
      displayTemp();
    } else {
      thermostat.powerSaveOff();
    }
  }
});


