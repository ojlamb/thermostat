var Thermostat = function() {
  this.defaultTemp = 20;
  this.temperature = this.defaultTemp;
  this.minimumTemp = 10;
  this.maximumTemp = 25;
  this.isPowerSaveOn = true;
};


Thermostat.prototype.showTemp = function() {
  return this.temperature;
};

Thermostat.prototype.increaseTemp = function() {
  if (this.temperature >= this.maximumTemp) {
  }
  else {
    return this.temperature += 1
  }
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temperature <= this.minimumTemp) {
  }
  else {
    return this.temperature -= 1
  }
};

Thermostat.prototype.resetTemp = function() {
  return this.temperature = 20;
};

Thermostat.prototype.powerSaveOn = function() {
  if (this.temperature > 25) {this.temperature = 25};
  this.maximumTemp = 25;
  return this.isPowerSaverOn = true;
};

Thermostat.prototype.powerSaveOff = function() {
  this.maximumTemp = 32;
  return this.isPowerSaverOn = false;
};


Thermostat.prototype.energyUsage = function() {
  if (this.temperature < 18) {
    return "#90EE90";
  } else if (this.temperature > 25) {
    return "#FF717E";
  } else {
  return "yellow";
  }
};
