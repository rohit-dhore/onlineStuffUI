'use strict';

describe('Service: configData', function () {

  // load the service's module
  beforeEach(module('onlineStuffApp'));

  // instantiate service
  var configData;
  beforeEach(inject(function (_configData_) {
    configData = _configData_;
  }));

  it('should do something', function () {
    expect(!!configData).toBe(true);
  });

});
