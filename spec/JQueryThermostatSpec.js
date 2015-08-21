describe('Thermostat', function() {

  beforeEach(function () {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  it("dispalys the default temperature", function(){
    expect('#temperature').toContainText(20);
  });

  it("click UP button and temperature increases by 1", function(){
    $('#increase').click();
    expect('#temperature').toContainText(21);
  });

  it("click Down button and temperature decreases by 1", function(){
    $('#decrease').click();
    expect('#temperature').toContainText(19);
  });

  it("click reset button and temperature is set to default 20", function(){
    $('#increase').click();
    $('#reset').click();
    expect('#temperature').toContainText(20);
  });

  it("Power save is set to on by default", function() {
    expect($('#powerSave')).toBeChecked();
  });

  it("Cannot go beyond 25 degrees when power save is on", function() {
    for (i = 0; i < 7; i++) {
      $('#increase').click();
    }
    expect('#temperature').toContainText(25)
  });

  it("Cannot go beyond 32 degrees when power save is on", function() {
    $('#powerSave').click();
    for (i = 0; i < 15; i++) {
      $('#increase').click();
    }
    expect('#temperature').toContainText(32)
  });

  it("has a minimum temperature of 10 degress and can never go lower ", function() {
    for (i = 0; i < 15; i++) {
      $('#decrease').click();
    }
    expect('#temperature').toContainText(10);
  });
});
